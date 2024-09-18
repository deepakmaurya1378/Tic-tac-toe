 let boxes = document.querySelectorAll(".box");
 let resetbt = document.querySelectorAll("#reset");
 let newGameBtn = document.querySelector("#newBt");
 let msgContainer = document.querySelector(".msg-container");
 let msg = document.querySelector("#msg");
 let turnO = true;
 let count = 0;
 
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetGame = () =>{
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");  
};
boxes.forEach( (box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText=  "O";
            turnO = false;
        }else{
            box.innerText ="X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();

        if(count === 9 && !isWinner){
            gameDraw();
        }
    });
});
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulation,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () =>{
    for(let pat of winPatterns){
        let pat1 =boxes[pat[0]].innerText;
        let pat2 =boxes[pat[1]].innerText;
        let pat3 =boxes[pat[2]].innerText;

        if(pat1 != "" && pat2 != "" && pat3 != ""){
            if(pat1 == pat2 && pat2 == pat3){
                console.log("Winner",pat1);
                disableBoxes();
                showWinner(pat1);
                return true;
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);


