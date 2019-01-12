let sections =  document.querySelectorAll('section');
let suBsections =  document.querySelectorAll('.subSection');
let home  = document.getElementById('home');
let about  = document.getElementById('about');
let blog  = document.getElementById('blog');
let contact  = document.getElementById('contact');
let portfolio  = document.getElementById('portfolio');
let resume  = document.getElementById('resume');

let homeLink  = document.getElementById('homeLink');
let aboutLink  = document.getElementById('aboutLink');
let blogLink  = document.getElementById('blogLink');
let contactLink  = document.getElementById('contactLink');
let portfolioLink  = document.getElementById('portfolioLink');
let resumeLink  = document.getElementById('resumeLink');

let overLay = document.querySelector('.overlay');
let htmlE = document.querySelector('html');

let changeNav = document.querySelector('.changeNav')
overLay.style.height = innerHeight + 'px'
htmlE.style.height = innerHeight + 'px'
changeNav.style.height = innerHeight + 'px'
window.addEventListener('resize',()=>{
    overLay.style.height = innerHeight + 'px';
    htmlE.style.height = innerHeight + 'px';
    changeNav.style.height = innerHeight + 'px'
})
function hideAll(obj){
    for(section of obj ){
        section.style.display = 'none' 
    }
}
function showSec(sec){
        sec.style.display = 'block';
        sec.style.opacity = '0';
         setTimeout(()=>{
             sec.style.opacity = '1';
        //     sec.classList.add('animated slideIn');
           },100)
        setTimeout(()=>{
        //  sec.style.opacity = '1';
          sec.classList.add('slideInDown');
        },120)
        setTimeout(()=>{
        //  sec.style.opacity = '1';
          sec.classList.remove('slideInDown');
        },1000)
        
}
hideAll(suBsections);

homeLink.addEventListener('click',(e)=>{
    hideAll(sections);
    showSec(home)
    
});
aboutLink.addEventListener('click',(e)=>{
    hideAll(sections);
    showSec(about)  
});
resumeLink.addEventListener('click',(e)=>{
    hideAll(sections);
    showSec(resume)  
});
portfolioLink.addEventListener('click',(e)=>{
    hideAll(sections);
    showSec(portfolio)  
});
blogLink.addEventListener('click',(e)=>{
    hideAll(sections);
    showSec(blog)  
});
contactLink.addEventListener('click',(e)=>{
    hideAll(sections);
    showSec(contact)  
});

