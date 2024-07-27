// Bir sayının rakamlarının her birinin küpleri topları sayının kendisine eşitse bu sayıya "armstrong sayı" denir.

let sayi = prompt("Sayi giriniz: ");
let toplam = 0;
for(let i=0;i<sayi.length;i++){
    let rakam=sayi.charAt(i);
    toplam+=rakam*rakam*rakam;
}

if(Number(sayi)==toplam){
    alert("Armstrong sayısıdır :)");
}
else{
    alert("Armstrong sayısı değildir !");
}