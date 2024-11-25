//select all filter buttons and filterable cards
const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableCards =document.querySelectorAll(".filter-card .card");
//Filter function
const filterCard = e => {
    document.querySelector (".active").classList.remove("active");
    e.target.classList.add("active");
    //Iterate over each filter card
    filterableCards.forEach(card =>{
        //add"hide" class to hide the card initially
        card.classList.add("hide");
        // Check match card list
        if(card.dataset.name === e.target.dataset.name ||e.target.dataset.name ==="all"){
            card.classList.remove("hide");
        }
    });
};
//Add Click event listener to each button
filterButtons.forEach(button => button.addEventListener("click",filterCard));