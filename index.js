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