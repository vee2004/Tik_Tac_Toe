let boxes = document.querySelectorAll(".box");

let re_btn = document.querySelector(".reset");
let new_msg = document.querySelector(".new_msg");
let new_btn = document.querySelector(".new_game");
let new_con  = document.querySelector(".msg_con");

let turn = true;
let count =0;

const win_pattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("button was pressed");
        if(turn)
        {
            box.innerText = "O"

            turn = false;
        }else{
            box.innerText = "X"
            turn  = true;

        }
        box.disabled = true;
        count++;

       let isWinner =  checkwinner();

       if(count=== 9 && !isWinner){
        alert("game was draw");
       }
        
    });

});



const reset_game = () => {
    turn = true;  
    boxes.forEach((box) => {
        box.innerText = "";  
        box.disabled = false; 
    });
    new_con.classList.add("hide"); 
    new_msg.innerText = "";  
};



const showwinner = (winner) =>{
    new_msg.innerText = `congragulation ,winner is ${winner}`;
    new_con.classList.remove("hide");
    disable_btn();
};

const checkwinner = () =>{
    for( let pattern of win_pattern){
        console.log(pattern[0],pattern[1],pattern[2]);
       
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3)
            {
                console.log("winner",pos1);
                showwinner(pos1);
            }
        } 
    }
};

re_btn.addEventListener("click",reset_game);
new_btn.addEventListener("click",reset_game);
