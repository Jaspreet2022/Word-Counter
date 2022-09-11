let textfield=document.getElementById("textfield");
textfield.addEventListener('input',function(){
 let text= this.value;
let char =text.length;
document.getElementById("Character").innerHTML=char;
//console.log(char);
let word=text.split(" ");
let wordlength=word.length;
console.log(wordlength);
document.getElementById("words").innerHTML=wordlength
})
