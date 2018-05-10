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

function clickMario() {
    $("#luigi-pic").css("background","red"); 
    $("#wario-pic").css("background","red"); 
    $("#bowser-pic").css("background","red"); 

    $('#charactercard2').appendTo('#enemy-cards');
    $('#charactercard3').appendTo('#enemy-cards');
    $('#charactercard4').appendTo('#enemy-cards');
}

function clickLuigi() {
    $("#mario-pic").css("background","red"); 
    $("#wario-pic").css("background","red"); 
    $("#bowser-pic").css("background","red"); 

    $('#charactercard1').appendTo('#enemy-cards');
    $('#charactercard3').appendTo('#enemy-cards');
    $('#charactercard4').appendTo('#enemy-cards');


}

function clickWario() {
    $("#luigi-pic").css("background","red"); 
    $("#mario-pic").css("background","red"); 
    $("#bowser-pic").css("background","red"); 

    $('#charactercard2').appendTo('#enemy-cards');
    $('#charactercard1').appendTo('#enemy-cards');
    $('#charactercard4').appendTo('#enemy-cards');


}

function clickBowser() {
    $("#luigi-pic").css("background","red"); 
    $("#wario-pic").css("background","red"); 
    $("#mario-pic").css("background","red"); 

    $('#charactercard2').appendTo('#enemy-cards');
    $('#charactercard3').appendTo('#enemy-cards');
    $('#charactercard1').appendTo('#enemy-cards');
}

$("#charactercard1").on('click',function(){
    clickMario();
});

$("#charactercard2").on('click',function(){
    clickLuigi();
});

$("#charactercard3").on('click',function(){
    clickWario();
});

$("#charactercard4").on('click',function(){
    clickBowser();
});