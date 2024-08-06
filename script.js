let boxes=document.querySelectorAll(".box");
let btn=document.querySelector(".btn");
let newGame=document.querySelector(".new-game");
let winnerCont=document.querySelector(".msg-container");
let winnerText=document.querySelector(".msg-text");
let turnO=true;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
 const showWinnerMsg = (winner) =>{
    winnerText.innerText=`Congratulations! ${winner} player,You are winner.`;
    winnerCont.classList.remove("hide");
    disabledBtns();

}
const disabledBtns = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const resetbtn = ()=>{
    turnO=true;
    enabledBtns();
    winnerCont.classList.add("hide");
}
const enabledBtns = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
            box.style.color="blue";
        }
        else{
            box.innerHTML="X";
            turnO=true;
            box.style.color="red";
        }
        box.disabled=true;
        checkWinner();
    }); 
}); 
const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner");
                showWinnerMsg(pos1Val);
            }
        }

    }
}
btn.addEventListener("click",resetbtn);
newGame.addEventListener("click",resetbtn);