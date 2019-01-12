let photos = document.querySelectorAll('.containImg img');
let overLays = document.querySelectorAll('.containImg .overImg');
let exits = document.querySelectorAll('.exit');
let bigImg = document.querySelectorAll('.imageBig')

function showOver(over){

    over.style.display = 'block';
        over.style.opacity = '0';
         setTimeout(()=>{
            over.style.opacity = '1';
        //     sec.classList.add('animated slideIn');
           },100)
        setTimeout(()=>{
        //  sec.style.opacity = '1';
        over.classList.add('fadeIn');
        },120)
        setTimeout(()=>{
        //  sec.style.opacity = '1';
        over.classList.remove('fadeIn');
        },130)

}
function hideOver(over){
   
    over.classList.add('fadeOut');
    setTimeout(()=>{
        //  sec.style.opacity = '1';
        over.style.opacity = "0";
        over.style.display = "none";
        over.classList.remove('fadeOut');
        },100)
    
}
//photos[0].nextElementSibling
function zoomInPhoto(photo){
    photo.style.transform = "scale(1.2)"
}
function zoomOutPhoto(photo){
    photo.style.transform = "scale(1)"
}
for(let photo of photos){
    photo.addEventListener('mouseover',(e)=>{
        console.log('a')
        let over = photo.nextElementSibling ;
        showOver(over)
        zoomInPhoto(photo)
    })
}
for(let overlay of overLays){
    overlay.addEventListener('mouseleave',(e)=>{
      
       // let over = photo.nextElementSibling ;
        hideOver(overlay)
        zoomOutPhoto(overlay.previousElementSibling)
    })
}

for(let overlay of overLays){
    overlay.addEventListener('click',(e)=>{
        showOver(overlay.parentElement.nextElementSibling.nextElementSibling)
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        let v  = overlay.parentElement.nextElementSibling.nextElementSibling;
        v.style.height = innerHeight +'px';
      //  v.style.background = "red"
      window.addEventListener('click',(e)=>{
    //   if((e.target != 'img' || e.target.className == 'fa fa-2x fa-times exit') && e.target.className != 'overImg animated' && e.target.className != 'overImg animated'){
    //     //hideOver(exit.parentElement.parentElement)
    //     console.dir(e.target.className)
    //     console.log('e')
    //   }
    console.dir(e.target)
    if(e.target.className == 'imageBig'){
        hideOver(e.target)
       
    }
    })
    })


}



for(let exit of exits){
     exit.addEventListener('click',(e)=>{
       hideOver(exit.parentElement.parentElement)
    })
 }

//xits[0].parentElement.parentElement

//overLays[0].parentElement.nextElementSibling.nextElementSibling


//   var $grid = $('.filtr-container').isotope({
//     itemSelector: '.filtr-item',
//   layoutMode: 'fitRows'
//   });

//   $grid.isotope({ filter: '.music' });
//   $grid.isotope({ filter: '.sing' });
//   $grid.isotope({ filter: '.play' });
//   $grid.isotope({ filter: '*' });
//   $('.filter-button-group').on( 'click', 'button', function() {
//     var filterValue = $(this).attr('data-filter');
//     $grid.isotope({ filter: filterValue });
//   });
// let filterCont = document.querySelector(".filtr-container")

// filterCont.style.position = "static"

//filter
let filterItem = document.querySelectorAll('.filter-item');

let filter1 = document.querySelectorAll('.filter1')
let filter2 = document.querySelectorAll('.filter2')
let filter3 = document.querySelectorAll('.filter3')
let allFilter = document.getElementById('allFilter');
let oneFilter = document.getElementById('oneFilter')
let twoFilter = document.getElementById('twoFilter')
let threeFilter = document.getElementById('threeFilter')

oneFilter.addEventListener('click',(e)=>{
    e.preventDefault();
    for(let i of filterItem){
        hideOver(i);
    }
    setTimeout(()=>{
        for(let i of filter1){
            showOver(i)
        }
    },100)
   
})
twoFilter.addEventListener('click',(e)=>{
    e.preventDefault();
    for(let i of filterItem){
        hideOver(i);
    }
    setTimeout(()=>{
        for(let i of filter2){
            showOver(i)
        }
    },100)
   
})
threeFilter.addEventListener('click',(e)=>{
    e.preventDefault();
    for(let i of filterItem){
        hideOver(i);
    }
    setTimeout(()=>{
        for(let i of filter3){
            showOver(i)
        }
    },100)
   
})
allFilter.addEventListener('click',(e)=>{
    e.preventDefault();
    for(let i of filterItem){
        showOver(i);
    }

   
})