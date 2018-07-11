for(var angka = 1; angka <= 100;  angka++){
    if((angka % 2)==0){
        console.log(angka+' Genap')
    }
    else {
        console.log(angka+' ganjil')
    }
 }
    
/*-----------------------*/
for(ulang2 = 1; ulang2 <=100; ulang2 += 2){
    if((ulang2 % 3 ) == 0){
        console.log('angka ' +ulang2+ ' 3 Kelipatan 3')
    }
        else {console.log('angka ' +ulang2+ ' _')
        }
}
/*-----------------------*/
for(ulang5 = 1; ulang5 <= 100; ulang5 += 5){
    if((ulang5 % 6) == 0){
        console.log('angka ' + ulang5 + ' 6 Kelipatan 6')
    }
    else {
        console.log('angka ' + ulang5 + ' _')
    }
}

/*-----------------------*/
for(ulang9 = 1; ulang9<=100; ulang9 += 9){
    if((ulang9 % 10) == 0){
        console.log('angka ' + ulang9 + ' 10 Kelipatan 10')
    }
    else {
        console.log('angka ' + ulang9 + ' _')
    }
}