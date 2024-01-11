let message = "HI! WELCOME TO MY WEBPAGE!";
let count=0;
function welcomeFun() {
    let time;
    if(count < 10 * message.length){
        document.getElementById("welcome-sign").innerHTML += message.charAt(count/10);
        count+=10;
        time = setTimeout(welcomeFun,50);
    }
    else{
        clearTimeout(time);
    }
}

var git = document.getElementById("github");
var lin = document.getElementById("linkedin");

lin.addEventListener("mouseover", function(){
    incSize(event,this);
});
lin.addEventListener("mouseout", function(){
    decSize(event,this);
});

git.addEventListener("mouseover", function(){
    incSize(event,this);
});
git.addEventListener("mouseout", function(){
    decSize(event,this);
});

function incSize(event,var1){
    var1.classList.add("fa-2xl");
}
function decSize(event,var1){
    var1.classList.remove("fa-2xl");
}