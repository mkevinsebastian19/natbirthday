// JavaScript for handling video playback and wishes

// // // Video URL
// const videoUrl = 'https://www.youtube.com/embed/VIDEO_ID';

// function loadVideo() {
//     const videoContainer = document.getElementById('video-container');
//     videoContainer.innerHTML = `<video controls width="560" height="315" src=${videoUrl} frameborder="0" allowfullscreen></video>`;
// }

// function submitWish(event) {
//     event.preventDefault();
//     const wishText = document.getElementById('wish-text').value;
//     if (wishText.trim() !== '') {
//         const wishList = document.getElementById('wish-list');
//         const wishItem = document.createElement('div');
//         wishItem.classList.add('wish-item');
//         wishItem.textContent = wishText;
//         wishList.appendChild(wishItem);
//         document.getElementById('wish-text').value = '';
//     }
// }

// window.addEventListener('load', () => {
//     loadVideo();
//     const wishForm = document.getElementById('wish-form');
//     wishForm.addEventListener('submit', submitWish);
// });

const click=document.querySelector('.click');
const giftBox=document.querySelector('.gift-box');
const Shadow=document.querySelector('.shadow');
const giftContainer=document.querySelector('.gift-container');
const text=document.querySelector('.text');

click.addEventListener('click', ()=>{
    if(click.className=="click"){
        click.classList.add('active')
        giftBox.classList.add('active')
        Shadow.classList.add('active')
        giftContainer.classList.add('active')
        text.classList.add('active')
        text.classList.add('active2')
    }
    else{
        click.classList.remove('active')
        giftBox.classList.remove('active')
        Shadow.classList.remove('active')
        giftContainer.classList.remove('active')
        text.classList.remove('active')
        text.classList.remove('active2')
    }
})
