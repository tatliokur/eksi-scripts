var kurallar = [];
var sureliKurallar = {};
var ctrlKeyPressed = false;
var shiftKeyPressed = false;
var altKeyPressed = false;

var yasaklilari_gizle;
var kurallari_yukle;
var yeni_kural_ekle;
var yeni_sureli_kural_ekle;
var sureli_kurallari_temizle;
var kurallari_esitle;
var init_events;
var filtrelemeyi_baslat;


(function($) {

	yasaklilari_gizle = async function(){
		topikler = $("div#content section#content-body ul.topic-list li a");
		sureliKur = [];
		for (x in sureliKurallar) 
			sureliKur.push(sureliKurallar[x]);
		
		kur1 = new RegExp(kurallar.join("|"), "");
		kur2 = new RegExp(sureliKur.join("|"), "");
		
		for (i=0; i<topikler.length; i++){
			baslik = $(topikler[i]).clone().children().remove().end().text().trim();
			if ( (kurallar.length > 0 && kur1.test(baslik)) || (sureliKur.length > 0 && kur2.test(baslik))){
				$(topikler[i]).remove();
			}

		}
	}

	kurallari_yukle = async function()
	{
		var kurallarLS = localStorage.getItem('suresizkurallar');
		kurallarLSArray = JSON.parse(kurallarLS);
		if (Array.isArray(kurallarLSArray)){
			kurallar = kurallarLSArray;
		}
		
		var surelikurallarLS = localStorage.getItem('surelikurallar');
		surelikurallarLSObj = JSON.parse(surelikurallarLS);
		if (typeof surelikurallarLSObj == 'object' && Array.isArray(surelikurallarLSObj) == false){
			sureliKurallar = surelikurallarLSObj;
		}
		
	}

	yeni_kural_ekle = function(kelime){
		kurallar.push(kelime);
		localStorage.setItem('suresizkurallar', JSON.stringify(kurallar));
	}

	yeni_sureli_kural_ekle = function(kelime){
		sureliKurallar[Date.now()] = kelime;
		localStorage.setItem('surelikurallar', JSON.stringify(sureliKurallar));
	}

	sureli_kurallari_temizle = async function(){
		var d = new Date();
		//var ts = d.setMonth(d.getMonth()-1);
		var ts = d.setDate(d.getDate() - 7);
		for (x in sureliKurallar) {
			if (x < ts){
				console.log(sureliKurallar[x]);
				delete sureliKurallar[x]
			}

		}
		
		localStorage.setItem('surelikurallar', JSON.stringify(sureliKurallar));
		
	}

	kurallari_esitle = async function(){
		
		if (Array.isArray(kurallarLSArray))
			localStorage.setItem('suresizkurallar', JSON.stringify(kurallar));
		
		if (typeof sureliKurallar == 'object' && Array.isArray(sureliKurallar) == false)
			localStorage.setItem('surelikurallar', JSON.stringify(sureliKurallar));
		
	}

	init_events = async function(){
		$(document).keydown(function (e) {
			if (e.keyCode == 16) {
				  shiftKeyPressed = true;
				  //console.log('Left SHIFT pressed.');

			} else if (e.keyCode == 17) {
				ctrlKeyPressed = true;
				//console.log('Left CTRL pressed.');
			} else if (e.keyCode == 18) {
				altKeyPressed = true;
				e.preventDefault();
				//console.log('Left CTRL pressed.');
			} 
			
		});
		
		$(document).keyup(function (e) {
			if (e.keyCode == 16) {
				  shiftKeyPressed = false;
			} else if (e.keyCode == 17) {
				ctrlKeyPressed = false;
			} else if (e.keyCode == 18) {
				altKeyPressed = false;
				e.preventDefault();
			} 
		});
		
		$("div#content section#content-body ul.topic-list li a").click(function (e) {
			if (shiftKeyPressed == true && ctrlKeyPressed == true) {
				baslik = $(this).clone().children().remove().end().text().trim();
				regex_text = "^" + baslik + "$";
				yeni_kural_ekle(regex_text);
				$(this).remove();
				e.preventDefault();
			} else if (altKeyPressed == true && ctrlKeyPressed == true) {
				baslik = $(this).clone().children().remove().end().text().trim();
				regex_text = "^" + baslik + "$";
				yeni_sureli_kural_ekle(regex_text);
				$(this).remove();
				e.preventDefault();
			}
		});
		
	}
        
	filtrelemeyi_baslat = async function(){
		await init_events();
		await kurallari_yukle();
		await yasaklilari_gizle();
		await sureli_kurallari_temizle();
	}
	
	filtrelemeyi_baslat();

})(jQuery);
