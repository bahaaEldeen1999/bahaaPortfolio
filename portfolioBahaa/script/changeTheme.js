 let root = document.documentElement;
// //let root = document.querySelector('html')
 let whiteSkin = document.getElementById('whiteSkin')
 let darkSkin = document.getElementById('darkSkin')
let bgchange = document.querySelectorAll('.bgChange')
let mainP = document.querySelectorAll('.mainP')
let changeColor = document.querySelectorAll('.changeColor')
let fontColor = document.querySelectorAll('.fontColor')
let backText = document.querySelectorAll('.backText')
let subHeader = document.querySelectorAll('.subHeader')
let factChange = document.querySelectorAll('.factChange')
let inputChange = document.querySelectorAll('.inputChange')
darkSkin.addEventListener('click',(e)=>{

    e.preventDefault();
    root.style.setProperty('--mainHover','#303b4c')
   // root.style.setProperty('--mainHover','#303b4c')
    root.style.setProperty('--mainFont','#fff')
   // root.style.setProperty('--darkWhite','#252D3A')
    //root.style.cssText

    for(let i of bgchange){
        i.style.backgroundColor = "var(--dark)"
        i.style.color = "var(--white)"
    }
    for(let i of mainP){
      //  i.style.backgroundColor = "var(--dark)"
        i.style.color = "var(--white)"
    }
    for(let i of changeColor){
      //  i.style.backgroundColor = "var(--dark)"
        i.style.color = "var(--lightGray)"
    }
    for(let i of backText){
      //  i.style.backgroundColor = "var(--dark)"
        i.style.color = "rgba(0,0,0,.7)"
    }
    for(let i of subHeader){
        i.style.backgroundColor = "#303b4c"
        i.style.color = "white"
    }
    for(let i of factChange){
        i.style.backgroundColor = "#303b4c"
        i.style.color = "white"
    }
    for(let i of inputChange){
        i.style.backgroundColor = "#303b4c"
        i.style.color = "white"
        i.style.borderColor = "var(--dark)"
    }
    for(let i of fontColor){
     //   i.style.backgroundColor = "#303b4c"
        i.style.color = "white"
    }
})
whiteSkin.addEventListener('click',(e)=>{

    e.preventDefault();
    root.style.setProperty('--mainHover','#afaeac')
   // root.style.setProperty('--mainHover','#303b4c')
    root.style.setProperty('--mainFont','#666666')
   // root.style.setProperty('--darkWhite','#252D3A')
    //root.style.cssText

    for(let i of bgchange){
        i.style.backgroundColor = "var(--white)"
        i.style.color = "var(--dark)"
    }
    for(let i of mainP){
      //  i.style.backgroundColor = "var(--dark)"
        i.style.color = "#212529"
    }
    for(let i of changeColor){
      //  i.style.backgroundColor = "var(--dark)"
        i.style.color = "gray"
    }
    for(let i of backText){
      //  i.style.backgroundColor = "var(--dark)"
        i.style.color = "var(--lightGray)"
    }
    for(let i of subHeader){
        i.style.backgroundColor = "var(--lightGray)"
        i.style.color = "var(--mainFont)"
    }
    for(let i of factChange){
        i.style.backgroundColor = "var(--lightGray)"
        i.style.color = "gray"
    }
    for(let i of fontColor){
     //   i.style.backgroundColor = "#303b4c"
        i.style.color = "var(--mainFont)"
    }
    for(let i of inputChange){
        i.style.backgroundColor = "white"
        i.style.color = "var(--dark)"
        i.style.borderColor = "#ced4da"
    }
})






//color

let blueColor = document.getElementById('blueColor')
let redColor = document.getElementById('redColor')
let yellowColor = document.getElementById('yellowColor')
let greenColor = document.getElementById('greenColor')
let purpleColor = document.getElementById('purpleColor')

blueColor.addEventListener('click',(e)=>{
    e.preventDefault();
    root.style.setProperty('--blue','#0078D4')
})
redColor.addEventListener('click',(e)=>{
    e.preventDefault();
    root.style.setProperty('--blue','#dc3545')
})
greenColor.addEventListener('click',(e)=>{
    e.preventDefault();
    root.style.setProperty('--blue','#28a745')
})
yellowColor.addEventListener('click',(e)=>{
    e.preventDefault();
    root.style.setProperty('--blue','#ffc107')
})
purpleColor.addEventListener('click',(e)=>{
    e.preventDefault();
    root.style.setProperty('--blue','#6f42c1')
})

//toggle 
let changeTheme = document.querySelector('.changeTheme')
let toggleChange = document.querySelector('.toggleChange')
let changeOpened = false ;
toggleChange.addEventListener('click',(e)=>{
if(changeOpened){
changeTheme.style.right = "-170px"
changeOpened = false;
}else{
    changeTheme.style.right = "0px";
    changeOpened = true;
}
})