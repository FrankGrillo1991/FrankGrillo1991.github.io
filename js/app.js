const navbar = document.getElementById("navbar");

navbar.addEventListener(
    "mouseover", 
    (event) => {
        event.target.style.color = "red";

    setTimeout(() => {
        event.target.style.color = "";
    }, 500);
},
false,
);