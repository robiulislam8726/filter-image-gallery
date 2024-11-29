const buyBtn = document.querySelector('.buy-btn');
const okBtn = document.querySelector('.ok-btn');
const popupBox = document.querySelector('.popup-overlay');

buyBtn.addEventListener('click', () =>{
    popupBox.classList.add('active')
})
okBtn.addEventListener('click', () => {
    popupBox.classList.remove('active')
})