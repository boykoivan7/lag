

// document.getElementById("btn-menu").addEventListener("click" , () => {
//     var menuHidden = document.getElementById("menu-hidden").style.display === "flex"; 
//     if (menuHidden) {
//         document.getElementById("menu-hidden").style.display = "none";
//     }
//     else {
//         document.getElementById("menu-hidden").style.display = "flex";
//     }
//  });

 $(window).resize(function() {
    if(document.documentElement.clientWidth > 992) {
        document.getElementById("menu-hidden").style.display = "flex";
    // if(document.getElementById("btn-menu").style.display === "block") {
    //     document.getElementById("menu-hidden").style.display = "none";
    // }
    // else {
    //     document.getElementById("menu-hidden").style.display = "flex";
    // }
}
else {
    document.getElementById("menu-hidden").style.display = "none";
}
  });
  document.getElementById("btn-menu").addEventListener("click" , () => {
    var menuHidden = document.getElementById("menu-hidden").style.display === "flex"; 
    if (menuHidden) {
        document.getElementById("menu-hidden").style.display = "none";
    }
    else {
        document.getElementById("menu-hidden").style.display = "flex";
    }
 });
//  var showMenu = document.getElementById("btn-menu").style.display === none;
//     if (showMenu) {
//         document.getElementById("menu-hidden").style.display = "flex";
//     }