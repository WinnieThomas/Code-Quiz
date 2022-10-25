var scoreSheet = document.getElementById("#scoreSheet");


function Display(){
for(var i=0;i<localStorage.length;i++){
   var initials = localStorage.key(i);
    var score = localStorage.getItem("localStorage.key(i)");
    document.getElementById("#scoreSheet").innerHTML+=localStorage.key(i);
    console.log(initials,score);}}
   
    //var result = document.createElement("div");
   // result.classList.add('result');
   
    //result.innerHTML=("initials" + (initials)+ "Score" + (score));
   // console.log(result);
    
scoreSheet.addEventListener("click",Display);
