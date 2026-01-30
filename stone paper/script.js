let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user=document.querySelector("#user-score");
const comp=document.querySelector("#comp-score");

const gencomputerChoice=()=>{
    //rock,paper,scissor
    const options=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    // console.log(randidx);
    return options[randidx];
}
const drawGame=()=>{
    console.log("game was drawn");
    msg.innerHTML="Game Draw.Play Again";
    msg.style.backgroundColor=" #1b7363cf";
}
const showwinner=(userwin,userChoice,compchoice)=>{
    if(userwin){
        console.log("you win");
        msg.innerHTML=`You Win!.Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor="blue";
        userScore++;
        user.innerHTML=userScore;
}
    else{
        console.log("you lose");
        msg.innerHTML=`You Lose .${userChoice} beats Your ${compchoice}`;
        
        msg.style.backgroundColor="red";
        compScore++;
        comp.innerHTML=compScore;

    }

}

const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compchoice=gencomputerChoice();
    console.log("comp-choice =",compchoice);
    //generate computer choice

    if(userChoice=== compchoice){
        drawGame();
    } else{
        let userwin =true;
        if(userChoice==="rock"){
            userwin=compchoice==="paper" ? false:true;
        }
        else if(userChoice==="paper"){
            userwin= compchoice==="scissor"?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userChoice,compchoice);
    }

}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})