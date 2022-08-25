
document.addEventListener('DOMContentLoaded', function() {
    const getIframe = document.querySelectorAll('.video-iframe')
    for(i = 0; i < getIframe.length; i++){
        resize_iframe(getIframe[i])
    }    
})

window.addEventListener('resize', function(){
    const getIframe = document.querySelectorAll('.video-iframe')
    for(i = 0; i < getIframe.length; i++){
        resize_iframe(getIframe[i])
    }  
})

let getBtnAvancar = document.querySelector('.btAvancar')

getBtnAvancar.addEventListener('click', function(e){
    e.preventDefault()
    liberaTelaEdge()
    setTimeout(function(){
        avancaTela();
    },1000)
})

function resize_iframe(iframe){
    // Calcula aspect ratio 
    let ratio_width = 16
    let ratio_height = 9
    let pixels_width = iframe
    if(pixels_width !== null){
        pixels_width = pixels_width.offsetWidth
    }
    let result = pixels_width / (ratio_width / ratio_height)
    
    // if(window_width <= 1024){        
    //     document.querySelector('.video').style.width = '100%'
    // }
    if(iframe !== null){
        iframe.setAttribute('height', result)
    }            
}

setTimeout(function(){
    try{
        parent.document.querySelector('#iCurso').setAttribute('scrolling', 'yes')
    }catch(e){
        console.log('ERRO SCROLL', e)
    }
},3000)

let getCloseBox = document.querySelector('.box .icon')
let getBox = document.querySelector('.box')

if(getCloseBox !== null){
    getCloseBox.addEventListener('click', function(){
        getBox.style.display = 'none'
    })
}

window.addEventListener('scroll', function(){
    setTimeout(function(){
        getBox.style.opacity = '0'
    },1500)
})
