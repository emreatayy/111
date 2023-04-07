function my_computer(x) {
    close_window();
    var my_computer = document.getElementById("window");
    var my_content = document.getElementById(x);
    my_computer.style.display = "flex";
    my_content.style.display = "flex"
}
function my_computer2(x,y) {
    var all_content = document.getElementsByClassName("content");
    var my_content = document.getElementById(x);
    var index_content = document.getElementById(y);
    for (let index = 0; index < all_content.length; index++) {
        all_content[index].style.display = "none";    
    }
    index_content.style.display = "flex";
    my_content.style.display = "flex";
}

function close_window() {
    var my_computer = document.getElementsByClassName("window");
    var my_content = document.getElementsByClassName("content");
    var my_content2 = document.getElementsByClassName("content2");

    for (let index = 0; index < my_computer.length; index++) {
        my_computer[index].style.display = "none";
        
    }
    for (let index = 0; index < my_content.length; index++) {
        my_content[index].style.display = "none";
    }
    for (let index = 0; index < my_content2.length; index++) {
        my_content2[index].style.display = "none";
    }
}

function showtxt(x) {
    var myTxt = document.getElementById(x)
    myTxt.style.display = "flex";
}

function closetxt(x,y) {
    var myTxt = document.getElementsByClassName(x);
    for (let index = 0; index < myTxt.length; index++) {
        myTxt[index].style.display = "none";
    }
}

