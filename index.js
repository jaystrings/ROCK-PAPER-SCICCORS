// const pickUserHand =(hand)=>{
//     console.log(hand)
// }

const handOption ={
    'rock':"./rock-paper-scissors-master/images/icon-rock.svg",
    'paper':"./rock-paper-scissors-master/images/icon-paper.svg",
    'scissors':"./rock-paper-scissors-master/images/icon-scissors.svg"
}

let score = 0

const pickUserHand=(hand)=>{
    console.log(hand)
    //Hide the page being viewed
    let hands = document.querySelector(".hands");
    hands.style.display ="none"

    //Show the nex page i picked
    let contest = document.querySelector(".contest")
    contest.style.display = "flex";

    //Set the user pick method 1 give the user image an id

        document.getElementById('userimg').src=handOption[hand]

        let player_2 = computer_play();
        refree(hand,player_2)
    }

    const computer_play = ()=>{
        let comp_choice = ["rock","paper","scissors"]
        // let decision = Math.floor(Math.random()*3)
        let decision = comp_choice[Math.floor(Math.random()*3)]
        //Set computer pick
        document.getElementById("comp-img").src=handOption[decision]
        return decision
    }

    
    // compare player result to computer result
     const refree =(player_1, player_2)=>{
       if (player_1 == "paper" && player_2 == "scissors"){
        my_decision("YOU LOSE")
       }else if(player_1 =="paper"&& player_2 =="rock"){
        my_decision("YOU WIN")
        setScore(score+=1)
       }else if (player_1 == "paper" && player_2 == "paper"){
        my_decision("DRAW")
       }else if (player_1 == "rock" && player_2 == "scissors"){
        my_decision("YOU WIN")
        setScore(score+=1)
       }else if (player_1 == "rock" && player_2 == "paper"){
        my_decision("YOU LOSE")
       }else if (player_1 == "rock" && player_2 == "rock"){
        my_decision("DRAW")
       }else if (player_1 == "scissors" && player_2 == "scissors"){
        my_decision("DRAW")
       }else if (player_1 == "scissors" && player_2 == "rock"){
        my_decision("YOU LOSE")
       }else if (player_1 == "scissors" && player_2 == "paper"){
        my_decision("YOU WIN")
        setScore[score+=1]
        }
     }

     const my_decision = (decide)=>{
        document.getElementById('result').innerText=decide;
        console.log(decide)
     }

     const setScore = (score)=>{
        document.getElementById('count').innerText=score;
        console.log(score)
     }

     const play_again =()=>{
        let hands = document.querySelector(".hands");
    hands.style.display ="flex"

    //Show the nex page i picked
    let contest = document.querySelector(".contest")
    contest.style.display = "none";
     }

