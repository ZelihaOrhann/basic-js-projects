let sayi = Number(prompt("Bir sayı giriniz: "));
let sonuc = 1;
for(let i=1;i<=sayi;i++){
    sonuc*=i;
}
console.log("Sonuç: " + sonuc);