/**
 *      SORU DAĞILIMI
 *      1-Türkçe 40       -4 puan ...
 *      2-Matematik 40
 *      3-Sosyal Bilgiler 20
 *      4-Fen bilimleri 20
 * 
 *      -----> 100 puanı ÖSYM veriyor
 *      -----> Okul puanı max 60 veriyor
 * 
 */


let turkceDogru, turkceYanlis = 0;
let matematikDogru, matematikYanlis = 0;
let sosyalDogru, sosyalYanlis = 0;
let fenDogru, fenYanlis = 0;
let puan = 0;
let okulPuani = 0;

let yeniSatir="\r\n";
let mesaj = "TYT Puan Hesaplama Uygulamasına Hoşgeldiniz!"+yeniSatir
+"1-Puan Hesapla"+yeniSatir
+"2-Çıkış Yap"+yeniSatir;

//alert(mesaj)

let secim=prompt(mesaj);

switch(secim){
    case "1":

        okulPuani=Number(prompt("Okul puanınızı giriniz: "));

        turkceDogru=Number(prompt("Turkce dogru sayısı: "));
        turkceYanlis=Number(prompt("Turkce yanlış sayısı: "));

        matematikDogru=Number(prompt("Matematik dogru sayisi: "));
        matematikYanlis=Number(prompt("Matematik yanlış sayisi: "));

        sosyalDogru=Number(prompt("Sosyal dogru sayisi: "));
        sosyalYanlis=Number(prompt("Sosyal yanlış sayisi: "));

        fenDogru=Number(prompt("Fen dogru sayisi: "));
        fenYanlis=Number(prompt("Fen yanlış sayisi: "));

        let dogruSayisi=turkceDogru+matematikDogru+sosyalDogru+fenDogru;
        let yanlisSayisi=turkceYanlis+matematikYanlis+sosyalYanlis+fenYanlis;

        let kalanDogruSayisi=dogruSayisi-(yanlisSayisi/4);
        puan=(kalanDogruSayisi*4) + 100 + okulPuani;
        alert("TYT Puanınız: " + puan);

        break;
    
    case "2":
        alert("Uygulamadan çıkış yapıldı...");
        break;
    
    
    default:
        alert("Lütfen geçerli aralıkta değer giriniz!");
        break;
}

