var scoreSheet = document.getElementById("scoreSheet");



for(var i=0;i<localStorage.length;i++){
   var initials = localStorage.key(i);
    var score = localStorage.getItem(initials);
    var row = document.createElement("div");
    row.textContent = initials + "-" + score;
    scoreSheet.appendChild(row);
 
     console.log(initials,score);}
   
    
   
    
