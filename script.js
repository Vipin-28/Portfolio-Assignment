// Scrolling navbar color change

window.onscroll = windowScrool;

var navbar = document.querySelector('.navbar');
var scrollupbtn = document.querySelector('.scroll-up-btn');

function windowScrool() {
    if(this.pageYOffset > 20){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }

    if(this.pageYOffset > 500){
        scrollupbtn.classList.add("show");
    }else{
        scrollupbtn.classList.remove('show');
    }
}




// scroll up btn functionality
document.querySelector(".scroll-up-btn").onclick = scrollToTop;
function scrollToTop(){
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}



//Toggle hamburger btn menu script
document.querySelector('.menu-btn').onclick = function(){

    document.querySelector('.navbar .menu').classList.toggle('active');
    document.querySelector('.menu-btn i').classList.toggle('active');

};

document.querySelector('.navbar .menu li a').onclick = function(){
    document.querySelector('.navbar .menu').classList.remove('active');
    document.querySelector('.menu-btn i').classList.remove('active');
};

//Skills section readmore btn
let flag = 0;
document.querySelector('.skills .skills-content .left a').onclick = function(){


    if(!flag){

        document.querySelector('.skills .skills-content .left p .dots').style.display = "none";
        document.querySelector('.skills .skills-content .left a').textContent = 'Read less';
        document.querySelector('.skills .skills-content .left p .more').style.display =  'inline';
        flag = 1;
    }
    else{

        document.querySelector('.skills .skills-content .left p .dots').style.display = "inline-block";
        document.querySelector('.skills .skills-content .left a').textContent = 'Read more';
        document.querySelector('.skills .skills-content .left p .more').style.display =  'none';
        flag = 0;
    }

};

// Typing animation script


var dynamictype = document.querySelector('.typing');
var work = ["Web Developer", "Programmer", "Coder"];

function sleep(time){
    return new Promise(resolve=>setTimeout(resolve, time)); 
}
async function changeText(){
    for(let i = 0;i<Number.MAX_VALUE;i++){
        await sleep(1500);
        dynamictype.textContent = work[i%work.length];
    }
}

changeText();
    