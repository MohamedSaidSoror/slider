var images =Array.from( document.querySelectorAll('img'));
var slider = document.getElementById('slider');
var close = document.getElementById('close');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var currentImg=0;


for(var i=0;i<images.length;i++){
images[i].addEventListener('click',showSlider);
}
function showSlider(e)
{
    
    imgSrc = e.target.src;
    currentImg =images.indexOf(e.target);
    slider.style.display = "flex";
    slider.firstElementChild.style.backgroundImage = "url("+imgSrc+")";
}
close.addEventListener('click',hideSlider);

function hideSlider()
{
    slider.style.display = "none";
}

next.addEventListener('click',nextImg)
function nextImg()
{
    currentImg++;
    if(currentImg < images.length)
    {
        slider.firstElementChild.style.backgroundImage = "url("+images[currentImg].src+")";
    }else{
        currentImg = 0;
    slider.firstElementChild.style.backgroundImage = "url("+images[currentImg].src+")";

    }
}
prev.addEventListener('click',prevImg);
function prevImg()
{
    currentImg--;
    if(currentImg > -1){
    slider.firstElementChild.style.backgroundImage = "url("+images[currentImg].src+")";
}else{
    currentImg = images.length-1;
    slider.firstElementChild.style.backgroundImage = "url("+images[currentImg].src+")";

    }

}
document.addEventListener('keydown',function(e){
    if(e.code == "ArrowRight"){
        nextImg();
    }else if(e.code == "ArrowLeft"){
        prevImg();
    }else if(e.code == "Escape"){
        hideSlider();
    }
    
});
