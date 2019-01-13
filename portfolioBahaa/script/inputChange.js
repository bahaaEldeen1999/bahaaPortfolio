let textarea = document.querySelector('.inputChange')
let inputDiv = document.querySelector('.inputDiv')
let closeInput = document.querySelector('.closeInput')
let x  = 1 ;
window.addEventListener('click',(e)=>{
    let classes = e.target.className.split(' ');
   // console.dir(classes)
   if(x==1){
    if( classes.includes('changeable') ){
        //  console.dir(e.target)
        x = -1;
        let elem = e.target;
       inputDiv.style.display = "block";
       textarea.value = elem.innerText
       textarea.addEventListener('keyup',(e)=>{
           let val = textarea.value;
           elem.innerText = val;
       })
       closeInput.addEventListener('click',()=>{
        inputDiv.style.display = "none";
        elem = null;
        x = 1;
       })
      }
     
   }
 
})
