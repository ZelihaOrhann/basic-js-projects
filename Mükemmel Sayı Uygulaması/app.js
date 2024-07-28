// mükemmel sayi => verilen tam bölenlerin toplamı sayının 2 katına eşitse bu sayı mükemmel sayıdır.

function isPerfectNumber(number){
    let toplam = 0;
    for(let i=2;i<=number/2;i++){
        if(number%i==0){
            toplam+=i;
        }
    }
    toplam+=1+number;

    if(toplam==number*2){
        console.log("Mükemmel sayıdır.");
    }
    else{
        console.log("Mükemmel sayı değildir.");
    }
}