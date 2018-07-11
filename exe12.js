

function konversiMenit(menit){ 
    var x = Math.floor(menit / 60);
    var y = menit % 60;
    y = y < 10 ? '0' + y : y;

    return x +':'+ y
}
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00



