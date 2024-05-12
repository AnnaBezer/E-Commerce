//---------- Sidebar setup-----------
let cartIcon= document.querySelector(".navbar img");
let sideBar = document.querySelector(".sidebar");
let overlay = document.querySelector(".overlay");
let productCardsContainer = document.querySelector(".product-cards-container");

let showSidebBar = () =>{
    sideBar.style.transform = "translateX(0px)";
    overlay.style.display = "block";
    //optional pentru blocare scroll
    // document.body.style.overflow ="hidden";
};

let hideSideBar= () => {
  sideBar.style.transform = "translateX(448px)";
  overlay.style.display = "none";
  //pentru deblocare
  // document.body.style.overlow = "auto";
};
cartIcon.addEventListener("click", showSidebBar);
overlay.addEventListener("click", hideSideBar );