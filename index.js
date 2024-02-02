let popup = document.querySelector(".popup")
let btn = document.querySelector("button")
let ok = document.querySelector(".ok")


function openPopup(){
        popup.style.top = "50%";
        popup.style.visibility = "visible";
        popup.style.transform = "translate(-50%,-50%)";
    }
    function closePopup(){
            popup.style.top = "0";
            popup.style.visibility = "hidden";
            popup.style.transform = "translate(-50%,-50%) scale(0.1)";
        }
        btn.addEventListener("click",openPopup);
        ok.addEventListener("click",closePopup);

