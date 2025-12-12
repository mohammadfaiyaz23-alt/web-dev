let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let msg=document.querySelector(".msg")
let msgContainer= document.querySelector(".msg-container");
let newGame = document.querySelector(".new-game");
let turnO=true;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const reset = () =>{
    turnO =true;
    enableBtn();
    msgContainer.classList.add("hide");

}
const enableBtn = () =>{
    for(box of boxes ){
        box.disabled = false;
        box.innerText="";
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO===true){

            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
})
const disabledBtn = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner) =>{
    msg.innerText=`Congratulation!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBtn();
}
const checkWinner = () =>{
    for (pattern of winPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val !="" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log(`${pos1val} Won The Match!!`)
                showWinner(pos1val)
            }
        }
        
    }
}
resetBtn.addEventListener("click", reset);
newGame.addEventListener("click", reset);