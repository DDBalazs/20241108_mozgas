var width = window.innerWidth;
var Height = window.innerHeight;

//kocka számítása
document.getElementById('kep').src = "img/PogJobbra.png";
var lep = 20;
var square = document.getElementById('kocka');
var square_bal = Math.floor(width/2-lep);
var square_fent = Math.floor(Height/2-lep);
square.style.left = square_bal+"px";
square.style.top  = square_fent + "px";

//pontnak a számítása
    var pont = document.getElementById('pontt');
    var randomwidth = Math.round(Math.random()*width);
    var randomheight = Math.round(Math.random()*Height);
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    var pont_bal = pont.style.left = randomwidth+"px";
    var pont_fent = pont.style.top = randomheight+"px";
    pont.style.backgroundColor = "#" + randomColor;

function pontok(){
    /*
    if(square_bal-pont_bal<40 && square_fent-pont_fent<40){
       square.style.border = "3px solid #"+ randomColor;
    }*/
}

//console.log(square_bal+" "+square_fent);
function kocka(e){
    if(e.code == "ArrowRight" || e.code == "KeyD"){ //jobbra
        if(square_bal+lep < Math.max(width)-40){
            square_bal+=lep;
            document.getElementById('kep').src = "img/PogJobbra.png";
        }
    }
    else if(e.code == "ArrowUp" || e.code == "KeyW"){ //fel
        if(square_fent > 0){
            square_fent-=lep;
            document.getElementById('kep').src = "img/PogFel.png";
        }
    }
    else if(e.code == "ArrowLeft" || e.code == "KeyA"){ //balra
        if(square_bal-lep > 0){
            square_bal-=lep;
            document.getElementById('kep').src = "img/PogBalra.png";
        }

    }
    else if(e.code == "ArrowDown" ||e.code == "KeyS"){ //le
        if(square_fent < Math.min(Height)-40){
            square_fent+=lep;
            document.getElementById('kep').src = "img/PogLe.png";
        }

    }
    square.style.left = square_bal+"px";
    square.style.top = square_fent+"px";

    
    //pontok();
}
if (pont_bal>square_bal || pont_bal<square_bal+30 || pont_fent>square_fent || pont_fent<square_fent+30){
    square.style.border="3px solid #"+randomColor;
    var randomwidth = Math.round(Math.random()*width);
var randomheight = Math.round(Math.random()*Height);
var randomColor = Math.floor(Math.random()*16777215).toString(16);
var pont_bal = pont.style.left = randomwidth+"px";
var pont_fent = pont.style.top = randomheight+"px";
pont.style.backgroundColor = "#" + randomColor;

}

addEventListener("keydown", kocka)
