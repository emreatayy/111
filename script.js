function my_computer(x) {
    close_window();
    var my_computer = document.getElementById("window");
    var my_content = document.getElementById(x);
    my_computer.style.display = "flex";
    my_content.style.display = "flex"
}
function my_computer2(x) {
    var all_content = document.getElementsByClassName("content");
    var my_content = document.getElementById(x);
    for (let index = 0; index < all_content.length; index++) {
        all_content[index].style.display = "none";    
    }
    my_content.style.display = "flex";
}

function close_window() {
    var my_computer = document.getElementsByClassName("window");
    var my_content = document.getElementsByClassName("content");

    for (let index = 0; index < my_computer.length; index++) {
        my_computer[index].style.display = "none";
        
    }
    for (let index = 0; index < my_content.length; index++) {
        my_content[index].style.display = "none";
        
    }
    
}



