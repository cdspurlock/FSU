/* Casey Spurlock
    06/27/2022
    1.3 Code Exercise O2: Story Time */

    // alert totell user what is going on
    alert("I am going to ask you questions to come up with a story if your ready hit ok.");

    //Promts for user info to creat story
    let userName = prompt("What is your name?");
    let favColor = prompt("What is your favorit color?");
    let luckyNumber = prompt("What is your lucky number?");
    let favMovie = prompt("What is your favorit movie?");
    let typeAnimal = prompt("What type of animal do you like?");
    let adjectiveWord = prompt("Tell me a radom adjective?");

    // prompt answers for story in the console
    console.log("In a "+adjectiveWord+" town, which is far from any city. lived a "+ typeAnimal+" named "+userName+".");
    console.log(""+userName+", had one thing to do today.");
    console.log("He need to move all the cows to a new pen, but the "+luckyNumber+" cows where all "+favColor+".");
    console.log("This, unfortunately, made it hard for "+userName+" to move due to them not looking like cows.");
    console.log(""+userName+" desided to go watch "+favMovie+" instead of doing the one thing he/she needed to do today.");

    /* Test writing of the story before placing correct form in cosole.log
    
    In a +adjectiveWord+ town, which is far from the city.lived a +typeAnimal+ named +userName+. 
    +userName+ had one thing todo today.
    He needed to move all the cow to a new area, but the +luckyNumber+ where all +favColor+.
    This unfortunately made it hard for +userName+ to move them to the right place. 
    +userName+ desided to go watch +favMovie+ instead of the one thing he/she needed to do. */