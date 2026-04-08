var boxes = document.querySelectorAll(".box");
var resetBtn  = document.querySelector("#reset");
var newGameBtn = document.querySelector("#new-btn");
var msgContainer = document.querySelector(".msg-container");
var msg = document.querySelector("#msg");
let turn0 = true; //PlayerX , player0

const winPatterns = [
    [0,1,2] ,
    [0 ,3 ,6],
    [0 ,4 ,8],
    [1 ,4 , 7],
    [2 ,5 ,8],
    [2 ,4 ,6],
    [3 ,4 ,5],
    [ 6, 7, 8]
]
boxes.forEach((box)=> {
    box.addEventListener("click" , () =>{
        if(turn0 ===true){
            box.innerText = "0";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const checkWinner =() => {
    for(patterns of winPatterns){
        let pos1Val =  boxes[patterns[0]].innerText
        let pos2Val =  boxes[patterns[1]].innerText
        let pos3Val =  boxes[patterns[2]].innerText

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val == pos3Val){
            console.log("winner" , pos1Val);
            disableBoxes();
            showWinner(pos1Val);
        }

        }


    }


};
const disableBoxes = () =>{
    for (box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for (box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}
const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame); 

