const imageContainerEl= document.querySelector('.image-container');

const btn1= document.querySelector('.btn');

btn1.addEventListener('click',()=>{
    //console.log('clicked');
    imageNum= 5;
    addNewImages();
})

function addNewImages(){
    for (let index = 0; index < imageNum; index++) {
        const newImgEl = document.createElement('img');
        newImgEl.src=`https://picsum.photos/300?random=${
            Math.floor(Math.random()*2000)
        }`
        imageContainerEl.appendChild(newImgEl);
    }
}