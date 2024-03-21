let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let restartbtn= document.querySelector("#restart-btn");
let msgContainer = document.querySelector(".container-msg");
let msg = document.querySelector("#msg");
let turn0 = true;
let count = 0;
const winpatters = [
    [0,1,3],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
boxes.forEach((box) => {
   box.addEventListener("click",() =>{
    console.log("box is clicked");
    if(turn0){
        box.innerText = "O";
        turn0 = false;
    }else {
        box.innerText = "X";
        turn0 = true;
    }
    box.disabled = true;
    count ++;
    let winnerChEck = winnerCheck();
    if (count === 9 && !winnerChEck){
        gameDraw();
    }

   });
    
});
let resetGame = () =>{
    turn0 = true;
    count = 0;
    Enablebtn();
    msgContainer.classList.add("hide");

}
let gameDraw = () => {
    msg.innerText = `game is drawn`;
    msgContainer.classList.remove("hide");
    disabledbtn();
}
let showwinner = (winner) => {
    msg.innerText = `the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledbtn();
}
let Enablebtn = ()=>{
    for (box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
let disabledbtn = ()=>{
    for (box of boxes){
        box.disabled = true;
    }
}
const winnerCheck = () => {
    for(let pattern of winpatters){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
    if (val1 != "" && val2 != "" && val3 != ""){
        if (val1 === val2 && val2 === val3){
            console.log("winner is ",val1);
            showwinner(val1);
            return true;
        }
    }
    }
};
restartbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);