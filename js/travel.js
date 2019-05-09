var emailBtn = document.querySelector(".email-btn");

emailBtn.addEventListener("mouseenter", function(){
  emailBtn.style.width = "35%";

});

emailBtn.addEventListener("mouseout", function(){
  emailBtn.style.width = "30%";

})

//Hamburger Menu


function clickMenu(){
    document.querySelector("#menu").classList.toggle("change");
    document.querySelector("#nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");


}

///Contact Button

function contactBtn(){
    window.location.href="contact.html";
}

//Image Slider 1

var cont = document.querySelector(".slideshow-container");
var pic = document.querySelector(".slideImg");
var imgNum = 1;
var imgNum2 = 1;
var imgNum3 = 1;


function plusIndex(){
  imgNum++

  pic.src = "imgs/Central/CA"+imgNum+".JPG";
  if(imgNum >= 4){
    imgNum = 0;
  }
}


////Image Slider 2

var pic2 = document.querySelector(".slideImg2");

function plusIndex2(){
    imgNum2++
    
    pic2.src = "imgs/Col/Col"+imgNum2+".JPG";
    if(imgNum2 >= 3){
        imgNum2 = 0;
    }
}

//Image Slider 3

var pic3 = document.querySelector(".slideImg3");

function plusIndex3(){
    imgNum3++
    
    pic3.src = "imgs/Thai/thai"+imgNum3+".JPG";
    if(imgNum3 >= 4){
        imgNum3 = 0;
    }
}


