//Benzin İstasyonu 

/**
 *      1-Dizel  : 24.53
 *      2-Benzin : 22.25
 *      3-LPG    : 11.1
 * 
 *      Gelen müşterilerden alacağımız bilgiler;
 *      1-Yakıt Tipi
 *      2-Yüklenecek yakıt litresi
 * 
 */

let dizel = 25.53, benzin = 22.25, lpg=11.1;
const yeniSatir="\r\n";

const yakitMetni="1-Dizel"+yeniSatir
+"2-Benzin"+yeniSatir
+"3-LPG"+yeniSatir
+"Yakıt türünüzü seçiniz:";

let yakitTipi=prompt(yakitMetni);
let yakitLitresi=Number(prompt("Yakıt litresini giriniz:"))
let bakiye=Number(prompt("Bakiyenizi giriniz:"))


if(yakitTipi=="1"){
    //DİZEL
    let odenecekTutar=dizel*yakitLitresi;
    if(odenecekTutar<bakiye){
        //bakiyeniz yeterli
        alert("Yakıt alma işlemi başarılı"+yeniSatir
            +"Kalan bakiye : " + bakiye
        );
    }
    else{
        //bakiyeniz yeterli değil
        alert("Bakiyeniz yeterli değildir"+yeniSatir
            +"Ödenecek tutar: " + odenecekTutar
            +"Bakiye: " + bakiye+yeniSatir
            +"Eksik Tutar: " + (odenecekTutar-bakiye)
        );
    }
}
else if(yakitTipi=="2"){
    //BENZİN
    let odenecekTutar=benzin*yakitLitresi;
    if(odenecekTutar<bakiye){
        //bakiyeniz yeterli
        alert("Yakıt alma işlemi başarılı"+yeniSatir
            +"Kalan bakiye : " + bakiye
        );
    }
    else{
        //bakiyeniz yeterli değil
        alert("Bakiyeniz yeterli değildir"+yeniSatir
            +"Ödenecek tutar: " + odenecekTutar
            +"Bakiye: " + bakiye+yeniSatir
            +"Eksik Tutar: " + (odenecekTutar-bakiye)
        );
    }
}
else if(yakitTipi=="3"){
    //LPG
    let odenecekTutar=lpg*odenecekTutar;
    if(odenecekTutar<bakiye){
        //bakiyeniz yeterli
        alert("Yakıt alma işlemi başarılı"+yeniSatir
            +"Kalan bakiye : " + bakiye
        );
    }
    else{
        //bakiyeniz yeterli değil
        alert("Bakiyeniz yeterli değildir"+yeniSatir
            +"Ödenecek tutar: " + odenecekTutar
            +"Bakiye: " + bakiye+yeniSatir
            +"Eksik Tutar: " + (odenecekTutar-bakiye)
        );
    }
}
else{
    alert("Lütfen geçerli bir yakıt türü seçiniz!!");
}