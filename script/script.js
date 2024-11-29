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


// Handle the mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

// Toggle the menu visibility on mobile
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Handle cart update functionality
let cartCount = 0;
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCountElement = document.getElementById('cart-count');

// Event listener for the Add to Cart button
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;  // Increment the cart count
        cartCountElement.textContent = cartCount;  // Update the cart count in the navigation
        alert('Product added to cart!');
    });
});
