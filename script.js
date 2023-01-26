let chose = "";

function handleChose(name){
    var boc = document.getElementById(name)
    let boxes = document.querySelectorAll(".rate--buttons div")
    for(let i = 0; i < boxes.length;i++){
        boxes[i].style.backgroundColor = ""
        boxes[i].style.color = ""
    }
    boc.style.backgroundColor = "#7d8798"
    boc.style.color = "white"
    chose = boc.innerText;
}

function handleSubmit(){
    let item = document.querySelector(".choice");
    item.innerText = `You Selected ${chose} out of 5`;
    var rating = document.querySelector(".rating")
    rating.style.display = "none"
    var thanks = document.querySelector(".thanks")
    thanks.style.display = ""
}