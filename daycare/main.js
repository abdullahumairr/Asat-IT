function changeImage() {
    var menuImage = document.getElementById("menu");
    if (menuImage.src.match("menu-list-right hamburger")) {
      menuImage.src = "image/menu-list-right";
    } else if (menuImage.src.match("image/menu-list-right hamburger")) {
      menuImage.src = "Picture/menu-list-right.svg";
    }
  }
  
  function myFunction() {
    let x = document.getElementById("hamburger-div");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }