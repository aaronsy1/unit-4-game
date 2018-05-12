let marioHp = 100;
let luigiHp = 100;
let warioHp = 100;
let bowserHp = 100;

let marioAtk = 4;
let luigiAtk = 4;
let warioAtk = 6;
let bowserAtk = 8;

let marioCounter = 10;
let luigiCounter = 10;
let warioCounter = 15;
let bowsercounter = 23;

let isDefeatedEnemy = false;
let isGameOver = false;
let isMario = true;
let isLuigi = true;
let isWario = true;
let isBowser = true;
let isCurrentEnemyMario = true;
let isCurrentEnemyLuigi = true;
let isCurrentEnemyWario = true;
let isCurrentEnemyBowser = true;

//on clicks

$("#charactercard1").on('click', function () {
    //  console.log($("#charactercard1").value);
    if (isMario === true) {
        clickMario();
    };


});

$("#charactercard2").on('click', function () {
    if (isLuigi === true){
    clickLuigi();
    };
});

$("#charactercard3").on('click', function () {
    if (isWario === true){
        clickWario();
        };
    });

$("#charactercard4").on('click', function () {

    if (isBowser === true){
        clickBowser();
        };
});


//when you click one of the character cards the others turn red and shift to an enemy div
function clickMario() {
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

    //next onclick

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
    if (isCurrentEnemyMario ===true) {
    $("#mario-pic").css("background", "white");
    $('#charactercard1').appendTo('#current-enemy');
        
        isCurrentEnemyLuigi = false;
        isCurrentEnemyWario = false;
        isCurrentEnemyBowser = false;
    }
}

function enemyLuigi(){
    if (isCurrentEnemyLuigi ===true) {
    $("#luigi-pic").css("background", "white");
    $('#charactercard2').appendTo('#current-enemy');
        
        isCurrentEnemyMario = false;
        isCurrentEnemyWario = false;
        isCurrentEnemyBowser = false;
    }
}

function enemyWario(){
    if (isCurrentEnemyWario === true) {
    $("#wario-pic").css("background", "white");
    $('#charactercard3').appendTo('#current-enemy');

        isCurrentEnemyMario = false;
        isCurrentEnemyLuigi = false;
        isCurrentEnemyBowser = false;
    }
}

function enemyBowser(){
    if (isCurrentEnemyBowser === true) {
    $("#bowser-pic").css("background", "white");
    $('#charactercard4').appendTo('#current-enemy');

        isCurrentEnemyMario = false;
        isCurrentEnemyWario = false;
        isCurrentEnemyBowser = false;
    }
}