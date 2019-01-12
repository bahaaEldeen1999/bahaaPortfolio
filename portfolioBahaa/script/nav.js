//click and hover on list item

let listItems = document.querySelectorAll('.listItem');

for(let item of listItems){
 
    item.addEventListener('click',(e)=>{
        for(let item1 of listItems){
            item1.style.borderLeft = "transparent 5px solid";
            item1.classList.remove('hoveredList');
        }
       item.style.borderLeft = "var(--blue) 5px solid";
       item.classList.add('hoveredList');
    })
}

//toggle navbar
let toggleBtn = document.getElementById('toggle');
let bodyNav = document.querySelector('body');
let html = document.querySelector('html');
let nav = document.querySelector('nav');
let toggledText = document.querySelectorAll('.textToggle');
let mainText = document.querySelector('.main-text');
let subSection = document.querySelectorAll('.subSection');
let profile = document.querySelector('.profile');
let opened = true ;
//initialize before even clicking 
//html.height = innerHeight+'px'
if( innerWidth > 1350 && innerHeight > 500 ){
    bodyNav.style.marginTop = "0px";
    toggleBtn.children[0].classList.remove('fa-times');
    toggleBtn.children[0].classList.remove('fa-bars');
    
if(opened){
    bodyNav.style.marginLeft = "250px";
   
    
    toggleBtn.children[0].classList.add('fa-angle-double-left');
    toggleBtn.children[0].classList.remove('fa-angle-double-right');
    for(let text of toggledText){
        
        text.classList.remove('toggleClose')
    
    
    }
    nav.style.width = "250px";
}else{
    bodyNav.style.marginLeft = "70px";
   
    nav.style.width = "70px";
    toggleBtn.children[0].classList.add('fa-angle-double-right');
    toggleBtn.children[0].classList.remove('fa-angle-double-left');
    for(let text of toggledText){
        
        text.classList.add('toggleClose')
    
    
    }
}


}else{
    toggleBtn.children[0].classList.remove('fa-angle-double-left');
    toggleBtn.children[0].classList.remove('fa-angle-double-left');
    for(let section of subSection){
        section.style.width = innerWidth + 'px';
    }
if(opened){
    bodyNav.style.marginTop = "130px"
    nav.style.height = "130px"
    toggleBtn.children[0].classList.add('fa-times');
    toggleBtn.children[0].classList.remove('fa-bars');
}else{
    bodyNav.style.marginTop = "60px"
    nav.style.height = "60px"
    toggleBtn.children[0].classList.add('fa-bars');
    toggleBtn.children[0].classList.remove('fa-times');
}
    //hide text 
    let i = 1;
    for(let text of toggledText){
        if(i != 1 ){
            text.classList.add('toggleClose')
        }
        i++;
       
        
    }
   
       bodyNav.style.marginLeft = "0"
}

window.addEventListener('resize',()=>{
    if( innerWidth > 1350 && innerHeight > 500 ){
        
        bodyNav.style.marginTop = "0px";
        toggleBtn.children[0].classList.remove('fa-times');
        toggleBtn.children[0].classList.remove('fa-bars');
    if(opened){
        for(let section of subSection){
            section.style.width = '1050px';
        }
        bodyNav.style.marginLeft = "250px";

        mainText.style.fontSize = "50px";
        
    
        nav.style.width = "250px";
        toggleBtn.children[0].classList.add('fa-angle-double-left');
        toggleBtn.children[0].classList.remove('fa-angle-double-right');
        for(let text of toggledText){
            
            text.classList.remove('toggleClose')
        
        
        }
        

    }else{
        for(let section of subSection){
            section.style.width = '1200px';
        }
        bodyNav.style.marginLeft = "70px";

        mainText.style.fontSize = "70px";
        for(let section of subSection){
            section.style.left  = '70px'
            section.style.width  = '1200px'
        }
    
        nav.style.width = "70px";
        toggleBtn.children[0].classList.add('fa-angle-double-right');
        toggleBtn.children[0].classList.remove('fa-angle-double-left');
        for(let text of toggledText){
            
            text.classList.add('toggleClose')
        
        
        }
    }
    
    //less than 1350px
    }else{
        console.log('v')
        nav.style.width = "100%"
        toggleBtn.children[0].classList.remove('fa-angle-double-left');
        toggleBtn.children[0].classList.remove('fa-angle-double-right');
        for(let section of subSection){
            section.style.width = innerWidth + 'px';
        }
    if(opened){
        
        toggleBtn.children[0].classList.add('fa-times');
        toggleBtn.children[0].classList.remove('fa-bars');
        nav.style.height = "130px";
        bodyNav.style.marginTop = "130px"
    }else{

        nav.style.height = "60px"
        bodyNav.style.marginTop = "60px"
        toggleBtn.children[0].classList.add('fa-bars');
        toggleBtn.children[0].classList.remove('fa-times');
    }
        //hide text 
        let i = 1;
        for(let text of toggledText){
            if(i != 1 ){
                text.classList.add('toggleClose')
            }
            i++;
           
            
        }
       
           bodyNav.style.marginLeft = "0"
    }
})
toggleBtn.addEventListener('click',(e)=>{
if(innerWidth > 1350 && innerHeight > 500 ){
    bodyNav.style.marginTop = "0px";
        toggleBtn.children[0].classList.remove('fa-times');
        toggleBtn.children[0].classList.remove('fa-bars');
    if(opened){
        
        toggleBtn.children[0].classList.add('fa-angle-double-left');
        toggleBtn.children[0].classList.remove('fa-angle-double-right');
    }else{
        
        toggleBtn.children[0].classList.add('fa-angle-double-right');
        toggleBtn.children[0].classList.remove('fa-angle-double-left');
    }
    
    for(let text of toggledText){
            
        text.classList.remove('toggleClose')
   
    
  }
   

    //console.log("more" + " " + innerWidth)
if(opened){
   
        bodyNav.style.marginLeft = "70px";

        mainText.style.fontSize = "70px";
        for(let section of subSection){
            section.style.left  = '70px'
            section.style.width  = '1200px'
        }
    
        nav.style.width = "70px";
      
        for(let text of toggledText){
            text.classList.add('toggleClose')
        }
        toggleBtn.children[0].classList.remove('fa-angle-double-left');
        toggleBtn.children[0].classList.add('fa-angle-double-right');
       
        opened = false;
       
}else{
   
        bodyNav.style.marginLeft = "250px";
        for(let section of subSection){
            section.style.left  = '250px'
            section.style.width  = '1050px'
        }
  
    nav.style.width = "250px";
       // body.style.marginLeft = "250px";
       for(let section of subSection){
        section.style.left  = '250px'
        section.style.width  = '1050px'
    }
        for(let text of toggledText){
            setTimeout(()=>{text.classList.remove('toggleClose')},200)
            
        }
        toggleBtn.children[0].classList.remove('fa-angle-double-right');
        toggleBtn.children[0].classList.add('fa-angle-double-left');
        opened = true
        mainText.style.fontSize = "50px"
      

}


}
//less than 1350 px view port 
else{
    console.log("less" + " " + innerWidth)
    toggleBtn.children[0].classList.remove('fa-angle-double-left');
    toggleBtn.children[0].classList.remove('fa-angle-double-left');
    for(let section of subSection){
        section.style.width = innerWidth + 'px';
    }
if(opened){
    
    toggleBtn.children[0].classList.add('fa-times');
    toggleBtn.children[0].classList.remove('fa-bars');
}else{
    
    toggleBtn.children[0].classList.add('fa-bars');
    toggleBtn.children[0].classList.remove('fa-times');
}
    //hide text 
    let i = 1;
    for(let text of toggledText){
        if(i != 1 ){
            text.classList.add('toggleClose')
        }
        i++;
       
        
    }
   
       bodyNav.style.marginLeft = "0"
        if(opened){

            nav.style.height = "60px"
            bodyNav.style.marginTop = "60px";
            toggleBtn.children[0].classList.remove('fa-times');
            toggleBtn.children[0].classList.add('fa-bars');
            opened = false;
        }else{
            nav.style.height = "130px";
            bodyNav.style.marginTop = "130px";
            toggleBtn.children[0].classList.remove('fa-bars');
            toggleBtn.children[0].classList.add('fa-times');
            opened = true;
        }

    }

});





