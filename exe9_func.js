//Soal 1
function shoutOut(){
    console.log('Halo Function!');
}
shoutOut()

//soal 2
function calculateMultiply(num1, num2){
    return num1 * num2
}
var hasilPerkalian = calculateMultiply(5,6)
console.log(hasilPerkalian)

//soal3
var name    = 'Agus';
var age     = '30';
var address = 'Jln. Malioboro, Yogjakarta';
var hobby   = 'gaming !';
function processSentence(){
    return 'Nama saya '+ name +', umur saya '+age+' tahun, alamat saya di '+ address +' , dan saya punya hobby yaitu '+ hobby 
}
var fullSentence = processSentence();
console.log(fullSentence);

