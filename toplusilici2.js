var silinecekler = [];
var sleep;
var tum_entryleri_yukle;
var silme_modunu_ac;
var silme_modunu_kapat;
var secilen_entryleri_sil;
var silinecekleri_yedekle;
var silinecekleri_geri_yükle;

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
	$('a.entry-date').parent().find("span").remove();
	silinecekler = [];
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

silinecekleri_yedekle = function() {
    localStorage.setItem('silinecekler', JSON.stringify(silinecekler));
}

silinecekleri_geri_yukle = function() {
    var silineceklerLS = localStorage.getItem('silinecekler');
    var silineceklerJSONP = JSON.parse(silineceklerLS);
    if(Array.isArray(silineceklerJSONP)) silinecekler = silineceklerJSONP;
}

$("div.sub-title-menu.profile-buttons").append('<button onclick="tum_entryleri_yukle()">Tüm entryleri yükle</button>');
$("div.sub-title-menu.profile-buttons").append('<button onclick="silme_modunu_ac()">Silme modunu aç</button>');
$("div.sub-title-menu.profile-buttons").append('<button onclick="silme_modunu_kapat()">Silme modunu kapat</button>');
$("div.sub-title-menu.profile-buttons").append('<button onclick="secilen_entryleri_sil()">Seçilen entryleri sil</button>');
$("div.sub-title-menu.profile-buttons").append('<button onclick="secilen_entryleri_sil()">Silinecek listesini yedekle</button>');
$("div.sub-title-menu.profile-buttons").append('<button onclick="secilen_entryleri_sil()">Silinecek listesini geri yükle</button>');
	
})(jQuery);
