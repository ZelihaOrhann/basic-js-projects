
let binary="1011";

function convertBinartToDecimal(binary){
    let toplam = 0;
    let us = 0;

    for(let i=binary.length-1;i>=0;i--){
        toplam += Number(binary.charAt(i)) * Math.pow(2,us) ;
        us++;
    }

    console.log("Sonuç: " + toplam);
}

convertBinartToDecimal(binary);