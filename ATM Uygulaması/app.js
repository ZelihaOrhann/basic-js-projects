let yeniSatir="\r\n";
let bakiye=1000;

let metin="1-Bakiye Görüntüleme"+yeniSatir
+"2-Para çekme"+yeniSatir
+"3-Para yatırma"+yeniSatir
+"4-Çıkış"+yeniSatir
+"Lütfen bir değer seçiniz.";

let secim=prompt(metin);

switch(secim){
    case "1":
        alert("Bakiyeniz: " + bakiye);
        break;
    case "2":
        let cekilecekTutar=Number(prompt("Çekmek istediğiniz tutarı giriniz:"));
        if(cekilecekTutar<bakiye){
            //başarılı
            bakiye=bakiye-cekilecekTutar;
            alert("Kalan bakiye: " + bakiye);
        } 
        else{
            alert("Bakiyenizden fazla para çekemezsiniz!" +yeniSatir
                +"Bakiyeniz: " +bakiye + " " + "Çekilecek Tutar: " + cekilecekTutar 
            );
        }
        break;

    case "3":
        let yatirilacakTutar=Number(prompt("Yatırılacak tutarı giriniz: "));
        bakiye=bakiye+yatirilacakTutar;
        alert("Guncel bakiyeniz : " + bakiye);
        break;
    
    case "4":
        console.log("Sistemden çıkış yapılmıştır...");
        break;
    
    default:
        console.log("Lütfen 1 - 4 arasında değer giriniz !");
        break; 
    }