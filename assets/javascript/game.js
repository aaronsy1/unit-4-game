//setting objects 

var mario = {
    name: 'mario',
    hp:  100,
    attack: 8,
    counter: 15,
}

var luigi = {
    name: 'luigi',
    hp: 100,
    attack: 4,
    counter: 10,
}

var wario = {
    name: 'wario',
    hp: 100,
    attack: 4,
    counter: 15,
}

var bowser = {
    name: 'bowser',
    hp: 100,
    attack: 8,
    counter: 50,
}

var currentChar = {
    name: 'char',
    hp: 0,
    attack: 0
    
}

var currentEnemy = {
    name: 'enemy',
    hp: 0,
    attack: 0,
    counter: 0,
}

// set variables for initial attacks in order to increment currentChar attack by this value

let intitalMario = 8;
let initialLuigi = 4;
let initialWario = 4;
let initialBowser = 8;
let initialAtk = 0;

// reset conditions
let isDefeatedEnemy = false;
let isGameOver = false;
// choosing character condition
let isMario = true;
let isLuigi = true;
let isWario = true;
let isBowser = true;
// to see which is cuurent character
let isCurrentCharMario = false;
let isCurrentCharLuigi = false;
let isCurrentCharWario = false;
let isCurrentCharBowser = false;
// to see which is current enemy
let isCurrentEnemyMario = true;
let isCurrentEnemyLuigi = true;
let isCurrentEnemyWario = true;
let isCurrentEnemyBowser = true;

// first click to decide character

$("#charactercard1").on('click', function () {
    if (isMario === true) {
        isCurrentCharMario = true;
        clickMario();
    };


});

$("#charactercard2").on('click', function () {
    if (isLuigi === true){
        isCurrentCharLuigi = true;
        clickLuigi();
    };
});

$("#charactercard3").on('click', function () {
    if (isWario === true){
        isCurrentCharWario = true;
        clickWario();
        };
    });

$("#charactercard4").on('click', function () {

    if (isBowser === true){
        isCurrentCharBowser = true;
        clickBowser();
        };
});


//when you click one of the character cards the others turn red and shift to an enemy div
function clickMario() {

    currentChar = mario;
    initialAtk = intitalMario;
    

    $("#luigi-pic").css("background", "red");
    $("#wario-pic").css("background", "red");
    $("#bowser-pic").css("background", "red");

    $('#charactercard2').appendTo('#enemy-cards');
    $('#charactercard3').appendTo('#enemy-cards');
    $('#charactercard4').appendTo('#enemy-cards');

    isMario = false;    
    isLuigi = false;
    isWario = false;
    isBowser = false;

    

    //next onclick to decide current enemy

    $("#charactercard2").on('click', function () {
        if (isLuigi === false){
        enemyLuigi();
        };
    });
    
    $("#charactercard3").on('click', function () {
        if (isWario === false){
            enemyWario();
            };
        });
    
    $("#charactercard4").on('click', function () {
    
        if (isBowser === false){
            enemyBowser();
            };
    });

}

function clickLuigi() {

    currentChar = luigi;
    initialAtk = initialLuigi

    $("#mario-pic").css("background", "red");
    $("#wario-pic").css("background", "red");
    $("#bowser-pic").css("background", "red");

    $('#charactercard1').appendTo('#enemy-cards');
    $('#charactercard3').appendTo('#enemy-cards');
    $('#charactercard4').appendTo('#enemy-cards');

    isMario = false;
    isLuigi = false;  
    isWario = false;
    isBowser = false;


   

    $("#charactercard1").on('click', function () {
        if (isMario === false){
        enemyMario();
        };
    });
    
    $("#charactercard3").on('click', function () {
        if (isWario === false){
            enemyWario();
            };
        });
    
    $("#charactercard4").on('click', function () {
    
        if (isBowser === false){
            enemyBowser();
            };
    });


}

function clickWario() {

    currentChar = wario;
    initialAtk = initialWario;

    $("#luigi-pic").css("background", "red");
    $("#mario-pic").css("background", "red");
    $("#bowser-pic").css("background", "red");

    $('#charactercard2').appendTo('#enemy-cards');
    $('#charactercard1').appendTo('#enemy-cards');
    $('#charactercard4').appendTo('#enemy-cards');

    isLuigi = false;
    isMario = false;
    isBowser = false;
    isWario = false;



    
    $("#charactercard1").on('click', function () {
        if (isMario === false){
        enemyMario();
        };
    });
    
    $("#charactercard2").on('click', function () {
        if (isLuigi === false){
            enemyLuigi();
            };
        });
    
    $("#charactercard4").on('click', function () {
    
        if (isBowser === false){
            enemyBowser();
            };
    });

}

function clickBowser() {

    currentChar = bowser;
    initialAtk = initialBowser;

    $("#luigi-pic").css("background", "red");
    $("#wario-pic").css("background", "red");
    $("#mario-pic").css("background", "red");

    $('#charactercard2').appendTo('#enemy-cards');
    $('#charactercard3').appendTo('#enemy-cards');
    $('#charactercard1').appendTo('#enemy-cards');

    isLuigi = false;
    isWario = false;
    isMario = false;
    isBowser = false;


    $("#charactercard1").on('click', function () {
        if (isMario === false){
        enemyMario();
        };
    });
    
    $("#charactercard3").on('click', function () {
        if (isWario === false){
            enemyWario();
            };
        });
    
    $("#charactercard2").on('click', function () {
    
        if (isLuigi === false){
            enemyLuigi();
            };
    });
}

//choosing current enemy functions

function enemyMario(){

    currentEnemy = mario;

    if (isCurrentEnemyMario ===true) {
    $("#mario-pic").css("background", "white");
    $('#charactercard1').appendTo('#current-enemy');
        
        isCurrentEnemyLuigi = false;
        isCurrentEnemyWario = false;
        isCurrentEnemyBowser = false;
    }

    battleEnemy();
}

function enemyLuigi(){

    currentEnemy = luigi;

    if (isCurrentEnemyLuigi ===true) {
    $("#luigi-pic").css("background", "white");
    $('#charactercard2').appendTo('#current-enemy');
        
        isCurrentEnemyMario = false;
        isCurrentEnemyWario = false;
        isCurrentEnemyBowser = false;
    }

    battleEnemy();
}

function enemyWario(){

    currentEnemy = wario;

    if (isCurrentEnemyWario === true) {
    $("#wario-pic").css("background", "white");
    $('#charactercard3').appendTo('#current-enemy');

        isCurrentEnemyMario = false;
        isCurrentEnemyLuigi = false;
        isCurrentEnemyBowser = false;
    }

    battleEnemy();
}

function enemyBowser(){

    currentEnemy = bowser;

    if (isCurrentEnemyBowser === true) {
    $("#bowser-pic").css("background", "white");
    $('#charactercard4').appendTo('#current-enemy');

        isCurrentEnemyMario = false;
        isCurrentEnemyWario = false;
        isCurrentEnemyLuigi = false;
    }


    

    battleEnemy();
}

        // function that initiates battle logic

function battleEnemy() {

    $("#attackBtn").on('click',function(){


        // text to show how much damage was taken, and manipulate hp

  

        currentEnemy.hp -= currentChar.attack;
        $("#battle-text").text("You dealt " + currentEnemy.name + " " + currentChar.attack + " damage");
        
        if(currentEnemy.hp > 0){
        currentChar.hp -= currentEnemy.counter;
        $("#counter-text").text("You took " + currentEnemy.counter + " damage");
        currentChar.attack += initialAtk;
        }

        else{

            $("#counter-text").text("You beat " +currentEnemy.name);
        }

        // to change hp under current char 

        if (isCurrentCharMario === true){
            $("#mario-hp").text(currentChar.hp);
            if (currentChar.hp === 0) {
                $("#battle-text").text("YOU LOSE");
            }
        }

        else if (isCurrentCharLuigi === true){
            $("#luigi-hp").text(currentChar.hp);
            if (currentChar.hp === 0) {
                $("#battle-text").text("YOU LOSE");
            }
        }

        else if (isCurrentCharWario === true){
            $("#wario-hp").text(currentChar.hp);
            if (currentChar.hp === 0) {
                $("#battle-text").text("YOU LOSE");
            }
        }

        else if (isCurrentCharBowser === true){
            $("#bowser-hp").text(currentChar.hp);
            if (currentChar.hp === 0) {
                $("#battle-text").text("YOU LOSE");
            }
        }
       
        // display current hp of enemy and show when enemy hp is 0
        
        if (isCurrentEnemyMario === true){
            if (currentEnemy.hp <= 0){
                $("#mario-hp").text("0");
            }
            else {
            $("#mario-hp").text(currentEnemy.hp);
            }
        }

        else if (isCurrentEnemyLuigi === true){
            if (currentEnemy.hp <= 0){
                $("#luigi-hp").text("0");
            }
            else {
            $("#luigi-hp").text(currentEnemy.hp);
            }
        }

        else if (isCurrentEnemyWario === true){
            if (currentEnemy.hp <= 0){
                $("#wario-hp").text("0");
            }
            else {
            $("#wario-hp").text(currentEnemy.hp);
            }
        }

        else if (isCurrentEnemyBowser === true){
            if (currentEnemy.hp <= 0){
                $("#bowser-hp").text("0");
            }
            else {
            $("#bowser-hp").text(currentEnemy.hp);
            }
        }
       
        
    });
    
}


