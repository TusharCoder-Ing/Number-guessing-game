let random_number = Math.floor(Math.random()*100)
let wins_indom = document.getElementById("wins")
let try_indom = document.getElementById("tries")
let wins = 0;
let tries = 0;

function random_num (){
    let user_input = document.querySelector("input").value;
    let parsed_user_input = parseInt(user_input);
    let result_area = document.getElementById("result");
    if(isNaN(parsed_user_input) || parsed_user_input > 100 || parsed_user_input < 0 ){
        result_area.innerHTML='Please Enter A number Between 1 to 100' 
    }
    else if (parsed_user_input === random_number){
        result_area.innerHTML=`Wow! You Got it right in ${tries} tries`
        random_number = Math.floor(Math.random()*100)
        wins++;
        tries = 0;
        wins_indom.innerHTML=wins
        try_indom.innerHTML=tries
    }
    else if (random_number > parsed_user_input && random_number-parsed_user_input <= 10){
        result_area.innerHTML='Your are very close , Try guessing A Larger number'
        tries++
        wins_indom.innerHTML=wins
        try_indom.innerHTML=tries
    }
    else if (random_number > parsed_user_input){
        result_area.innerHTML='Not Quite Right , Try Guessing A Larger Number'
        tries++
        wins_indom.innerHTML=wins
        try_indom.innerHTML=tries
    }
    else if (random_number <  parsed_user_input && parsed_user_input-random_number <= 10){
        result_area.innerHTML='Your are very close , Try guessing A Smaller number'
        tries++
        wins_indom.innerHTML=wins
        try_indom.innerHTML=tries
    }
    else if (random_number < parsed_user_input){
        result_area.innerHTML='Not Quite Right , Try Guessing A Smaller Number'
        tries++
        wins_indom.innerHTML=wins
        try_indom.innerHTML=tries
    }
    console.log(`Shhhhh!!!! The Answer IS ${random_number}`)
}


function give_up() {
    if(tries === 0){
        document.getElementById("result").innerHTML='Bro At Least Try To Guess it Once'
    }
    else{
    document.getElementById("result").innerHTML = `Well Looks Like You Gave Up IN ${tries} tries & Your Wins Will Be Resetted , The Answer Was ${random_number}`
    random_number = Math.floor(Math.random()*100)
    tries = 0;
    try_indom.innerHTML = tries;
    wins = 0
    wins_indom.innerHTML = wins;
    }
}


