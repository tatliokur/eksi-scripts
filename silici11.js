var sleep;
var tum_entryleri_yukle;
var silme_modunu_ac;
var silme_modunu_kapat;
var secilen_entryleri_sil;

(function($) {

sleep = function(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

tum_entryleri_yukle = async function() {
  while(true){
    if ($('a.load-more-entries.hidden').length == 1) break;
    $('a.load-more-entries').click()
    await sleep(1500);
  }
}

var silinecekler = [];
silme_modunu_ac = function(){
	$('a.entry-date').click(function(){
		entrynum=$(this).attr("href").split("/")[2];
		const index = silinecekler.indexOf(entrynum);
		// entry zaten silinecek olarak işaretli, silinecekler'den kaldır
		if (index > -1) {
			silinecekler.splice(index, 1);
			console.log( entrynum + " numaralı entry silineceklerden çıkarıldı.");
			$(this).parent().find("span").remove();
			return false;
		}
		// entry yok, silinecekler'e ekle
		else {
			silinecekler.push(entrynum);
			console.log( entrynum + " numaralı entry silineceklere eklendi.");
			$(this).parent().prepend("<span>⛔</span>");
		}
		return false;
	});
}

silme_modunu_kapat = function(){
	$('a.entry-date').unbind('click');
}

secilen_entryleri_sil = async function() {
  while(true){
    if (silinecekler.length == 0) break;
    $.ajax("https://eksisozluk.com/entry/sil", {
	   type: "POST",
	   data: {"id":silinecekler[0]},
	   statusCode: {
		  200: function (response) {
			 console.log('200');
			 silinecekler.shift();
		  },
		  429: function (response) {
			 console.log('429');
		  },
		  500: function (response) {
			 console.log('500');
			 silinecekler.shift();
		  }
	   }, success: function () {
		  console.log('success');
	   },
	});
    await sleep(25000);
  }
  alert("SEÇİLEN ENTRYLERİN SİLİNME İŞLEMİ TAMAMLANDI!");
}

$("div.sub-title-menu.profile-buttons").append('<button onclick="tum_entryleri_yukle()">Tüm entryleri yükle</button>');
$("div.sub-title-menu.profile-buttons").append('<button onclick="silme_modunu_ac()">Silme Modunu Aç</button>');
$("div.sub-title-menu.profile-buttons").append('<button onclick="silme_modunu_kapat()">Silme Modunu Kapat</button>');
$("div.sub-title-menu.profile-buttons").append('<button onclick="secilen_entryleri_sil()">Seçilen Entryleri Sil</button>');
	
})(jQuery);
