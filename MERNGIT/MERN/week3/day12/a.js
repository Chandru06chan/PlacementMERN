function numberofVowels(){
    var input=document.getElementById("strinput").value;
    var s=input.replace(/[^aeiouAEIOU]/g,"");
    alert(s.length);

}
function numberof words(){
    var input=document.getElementById("strinput").value;
    var s=input.split("");
    alert(s.length);
}