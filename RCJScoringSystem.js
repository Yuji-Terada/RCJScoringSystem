var timerStartSound = new Audio("./timer.mp3");
var timerFinishSound = new Audio("./timerEnd.mp3");
var plus = new Audio("./plus.mp3");
var minus = new Audio("./minus.mp3");

function soundStop(){
    timerStartSound.pause();
    timerStartSound.currentTime = 0;
    timerFinishSound.pause();
    timerFinishSound.currentTime = 0;
    plus.pause();
    plus.currentTime = 0;
    minus.pause();
    minus.currentTime = 0;
}




//============================================================

//時計
function clock(){
    const d = new Date();

    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let date = d.getDate();
    let dayNum = d.getDay();
    const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let day = weekday[dayNum];
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    let today = `${year}.${month}.${date} ${day}`;
    let time = `${hour}:${min}:${sec}`;
    document.querySelector(".clock-date").innerText = today;
    document.querySelector(".clock-time").innerText = time;
};
setInterval(clock, 10);

//============================================================

//============================================================

//試合時間
var gTInit = 60000;
var gT = gTInit;

function gameTimerMain(){
    var gTMin = Math.floor(gT / 6000);
    gTMin = gTMin < 10 ? "0" + gTMin : gTMin;
    var gTSec = Math.ceil((gT % 6000) / 100);
    gTSec = gTSec < 10 ? "0" + gTSec : gTSec;
    gTMin = gTSec == 60 ? Number(gTMin) + 1 : gTMin;
    gTMin = Number(gTMin) < 10 ? "0" + Number(gTMin) : gTMin;
    gTSec = gTSec == 60 ? "00" : gTSec;

    document.getElementById("gameTimer").innerHTML = gTMin + ":" + gTSec;

    gT = gT > 0 ? gT - 1 : gT;
}
gameTimerMain();

$("#start").click(function(){
    $("#start").toggleClass("active");
    $("#stop").toggleClass("active");
    gameTimer = setInterval("gameTimerMain()", 10);
});

$("#stop").click(function(){
    $("#start").toggleClass("active");
    $("#stop").toggleClass("active");
    clearInterval(gameTimer);
});

$("#reset").click(function(){
    $("#start").removeClass("active");
    $("#stop").removeClass("active");
    clearInterval(gameTimer);
    gT = gTInit;
    gameTimerMain();
});

//============================================================

//============================================================

//点数計算
var scoreLeft = 0;
var scoreRight = 0;

$("#scoreMinusLeft").click(function(){
    console.log("aA");
    scoreLeft = Number(scoreLeft) > 0 ? Number(scoreLeft) - 1 : Number(scoreLeft);
    scoreLeft = Number(scoreLeft) < 10 ? "0" + Number(scoreLeft) : Number(scoreLeft);
    document.getElementById("leftScore").innerHTML = scoreLeft;
    soundStop();
    minus.play();
});
$("#scorePlusLeft").click(function(){
    scoreLeft = Number(scoreLeft) + 1;
    scoreLeft = Number(scoreLeft) < 10 ? "0" + Number(scoreLeft) : Number(scoreLeft);
    document.getElementById("leftScore").innerHTML = scoreLeft;
    soundStop();
    plus.play();
});

$("#scoreMinusRight").click(function(){
    console.log("aA");
    scoreRight = Number(scoreRight) > 0 ? Number(scoreRight) - 1 : Number(scoreRight);
    scoreRight = Number(scoreRight) < 10 ? "0" + Number(scoreRight) : Number(scoreRight);
    document.getElementById("rightScore").innerHTML = scoreRight;
    soundStop();
    minus.play();
});
$("#scorePlusRight").click(function(){
    scoreRight = Number(scoreRight) + 1;
    scoreRight = Number(scoreRight) < 10 ? "0" + Number(scoreRight) : Number(scoreRight);
    document.getElementById("rightScore").innerHTML = scoreRight;
    soundStop();
    plus.play();
});

//============================================================

//============================================================

//機体別タイマー
var tInit = 6000;
var t1 = tInit;
var t2 = tInit;
var t3 = tInit;
var t4 = tInit;

function timer1Main() {
    t1 = t1 > 599900 ? 599900 : t1;
    var t1Min = Math.floor(t1 / 6000);
    t1Min = t1Min < 10 ? "0" + t1Min : t1Min;
    var t1Sec = Math.ceil((t1 % 6000) / 100);
    t1Sec = t1Sec < 10 ? "0" + t1Sec : t1Sec;
    t1Min = t1Sec == 60 ? Number(t1Min) + 1 : t1Min;
    t1Min = Number(t1Min) < 10 ? "0" + Number(t1Min) : t1Min;
    t1Sec = t1Sec == 60 ? "00" : t1Sec;
    document.getElementById("t1").innerHTML = t1Min + ":" + t1Sec;
    if(t1 == 0){
        document.getElementById("t1").style.color = '#ff0000';
        clearInterval(timer1);
        soundStop();
        timerFinishSound.play();
    }
    else{
        document.getElementById("t1").style.color = '#333333';
    }
    t1 =  t1 > 0 ? t1 - 1 : t1;
}
timer1Main();

function timer2Main() {
    t2 = t2 > 599900 ? 599900 : t2;
    var t2Min = Math.floor(t2 / 6000);
    t2Min = t2Min < 10 ? "0" + t2Min : t2Min;
    var t2Sec = Math.ceil((t2 % 6000) / 100);
    t2Sec = t2Sec < 10 ? "0" + t2Sec : t2Sec;
    t2Min = t2Sec == 60 ? Number(t2Min) + 1 : t2Min;
    t2Min = Number(t2Min) < 10 ? "0" + Number(t2Min) : t2Min;
    t2Sec = t2Sec == 60 ? "00" : t2Sec;
    document.getElementById("t2").innerHTML = t2Min + ":" + t2Sec;
    if(t2 == 0){
        document.getElementById("t2").style.color = '#ff0000';
        clearInterval(timer2);
        soundStop();
        timerFinishSound.play();
    }
    else{
        document.getElementById("t2").style.color = '#333333';
    }
    t2 =  t2 > 0 ? t2 - 1 : t2;
}
timer2Main();

function timer3Main() {
    t3 = t3 > 599900 ? 599900 : t3;
    var t3Min = Math.floor(t3 / 6000);
    t3Min = t3Min < 10 ? "0" + t3Min : t3Min;
    var t3Sec = Math.ceil((t3 % 6000) / 100);
    t3Sec = t3Sec < 10 ? "0" + t3Sec : t3Sec;
    t3Min = t3Sec == 60 ? Number(t3Min) + 1 : t3Min;
    t3Min = Number(t3Min) < 10 ? "0" + Number(t3Min) : t3Min;
    t3Sec = t3Sec == 60 ? "00" : t3Sec;
    document.getElementById("t3").innerHTML = t3Min + ":" + t3Sec;
    if(t3 == 0){
        document.getElementById("t3").style.color = '#ff0000';
        clearInterval(timer3);
        soundStop();
        timerFinishSound.play();
    }
    else{
        document.getElementById("t3").style.color = '#333333';
    }
    t3 =  t3 > 0 ? t3 - 1 : t3;
}
timer3Main();

function timer4Main() {
    t4 = t4 > 599900 ? 599900 : t4;
    var t4Min = Math.floor(t4 / 6000);
    t4Min = t4Min < 10 ? "0" + t4Min : t4Min;
    var t4Sec = Math.ceil((t4 % 6000) / 100);
    t4Sec = t4Sec < 10 ? "0" + t4Sec : t4Sec;
    t4Min = t4Sec == 60 ? Number(t4Min) + 1 : t4Min;
    t4Min = Number(t4Min) < 10 ? "0" + Number(t4Min) : t4Min;
    t4Sec = t4Sec == 60 ? "00" : t4Sec;
    document.getElementById("t4").innerHTML = t4Min + ":" + t4Sec;
    if(t4 == 0){
        document.getElementById("t4").style.color = '#ff0000';
        clearInterval(timer4);
        soundStop();
        timerFinishSound.play();
    }
    else{
        document.getElementById("t4").style.color = '#333333';
    }
    t4 =  t4 > 0 ? t4 - 1 : t4;
}
timer4Main();





var t1Active = true;
var t2Active = true;
var t3Active = true;
var t4Active = true;

$("#timer1").click(function(){
    $("#t1Number").toggleClass("active");
    $("#t1").toggleClass("active");
    $("#timer1").toggleClass("active");
    if(t1Active){
        document.getElementById("timer1").innerHTML = '<i class="fa-solid fa-pause"></i>';
        t1Active = !t1Active;
        timer1 = setInterval("timer1Main()", 10);
        soundStop();
        timerStartSound.play();
    }
    else{
        document.getElementById("timer1").innerHTML = '<i class="fa-solid fa-play"></i>';
        t1Active = !t1Active;
        clearInterval(timer1);
    }
});

$("#timer2").click(function(){
    $("#t2Number").toggleClass("active");
    $("#t2").toggleClass("active");
    $("#timer2").toggleClass("active");
    if(t2Active){
        document.getElementById("timer2").innerHTML = '<i class="fa-solid fa-pause"></i>';
        t2Active = !t2Active;
        timer2 = setInterval("timer2Main()", 10);
        soundStop();
        timerStartSound.play();
    }
    else{
        document.getElementById("timer2").innerHTML = '<i class="fa-solid fa-play"></i>';
        t2Active = !t2Active;
        clearInterval(timer2);
    }
});

$("#timer3").click(function(){
    $("#t3Number").toggleClass("active");
    $("#t3").toggleClass("active");
    $("#timer3").toggleClass("active");
    if(t3Active){
        document.getElementById("timer3").innerHTML = '<i class="fa-solid fa-pause"></i>';
        t3Active = !t3Active;
        timer3 = setInterval("timer3Main()", 10);
        soundStop();
        timerStartSound.play();
    }
    else{
        document.getElementById("timer3").innerHTML = '<i class="fa-solid fa-play"></i>';
        t3Active = !t3Active;
        clearInterval(timer3);
    }
});

$("#timer4").click(function(){
    $("#t4Number").toggleClass("active");
    $("#t4").toggleClass("active");
    $("#timer4").toggleClass("active");
    if(t4Active){
        document.getElementById("timer4").innerHTML = '<i class="fa-solid fa-pause"></i>';
        t4Active = !t4Active;
        timer4 = setInterval("timer4Main()", 10);
        soundStop();
        timerStartSound.play();
    }
    else{
        document.getElementById("timer4").innerHTML = '<i class="fa-solid fa-play"></i>';
        t4Active = !t4Active;
        clearInterval(timer4);
    }
});

$("#allreset").click(function(){
    timer1Reset();
    timer2Reset();
    timer3Reset();
    timer4Reset();
    timer1Main();
    timer2Main();
    timer3Main();
    timer4Main();
});

function timer1Reset(){
    t1Active = true;
    t1 = tInit;
    timer1Main();
    $("#t1Number").removeClass("active");
    $("#t1").removeClass("active");
    $("#timer1").removeClass("active");
    document.getElementById("timer1").innerHTML = '<i class="fa-solid fa-play"></i>';
    clearInterval(timer1);
}
function timer2Reset(){
    t2Active = true;
    t2 = tInit;
    timer2Main();
    $("#t2Number").removeClass("active");
    $("#t2").removeClass("active");
    $("#timer2").removeClass("active");
    document.getElementById("timer2").innerHTML = '<i class="fa-solid fa-play"></i>';
    clearInterval(timer2);
}
function timer3Reset(){
    t3Active = true;
    t3 = tInit;
    timer3Main();
    $("#t3Number").removeClass("active");
    $("#t3").removeClass("active");
    $("#timer3").removeClass("active");
    document.getElementById("timer3").innerHTML = '<i class="fa-solid fa-play"></i>';
    clearInterval(timer3);
}
function timer4Reset(){
    t4Active = true;
    t4 = tInit;
    timer4Main();
    $("#t4Number").removeClass("active");
    $("#t4").removeClass("active");
    $("#timer4").removeClass("active");
    document.getElementById("timer4").innerHTML = '<i class="fa-solid fa-play"></i>';
    clearInterval(timer4);
}


$("#timer1-re").click(function(){
    timer1Reset();
});

$("#timer2-re").click(function(){
    timer2Reset();
});

$("#timer3-re").click(function(){
    timer3Reset();
});

$("#timer4-re").click(function(){
    timer4Reset();
});

//============================================================

//============================================================

//前後半・ハーフタイム切り替え
var gameMode = 0;
var gameModeWord = ["前半", "ハーフタイム", "後半", "休憩"];

var hTInit = 30000;

$("#half").click(function(){
    gameMode = gameMode < gameModeWord.length-1 ? gameMode + 1 : 0;
    document.getElementById("half").innerHTML = gameModeWord[gameMode];
    if(gameModeWord[gameMode] == "前半" || gameModeWord[gameMode] == "後半"){
        $("#start").removeClass("active");
        $("#stop").removeClass("active");
        clearInterval(gameTimer);
        gT = gTInit;
        gameTimerMain();
    }
    else if(gameModeWord[gameMode] == "ハーフタイム"){
        $("#start").removeClass("active");
        $("#stop").removeClass("active");
        clearInterval(gameTimer);
        gT = hTInit;
        gameTimerMain();
    }
});

//============================================================

//============================================================

//試合時間等設定画面
var gameTimerSettingMin = document.getElementById("gameTimerSettingMin");
var gameTimerSettingSec = document.getElementById("gameTimerSettingSec");
var halfTimerSettingMin = document.getElementById("halfTimerSettingMin");
var halfTimerSettingSec = document.getElementById("halfTimerSettingSec");
var robotTimerSettingMin = document.getElementById("robotTimerSettingMin");
var robotTimerSettingSec = document.getElementById("robotTimerSettingSec");
var blueTeamSetting = document.getElementById("blueTeam");
var yellowTeamSetting = document.getElementById("yellowTeam");

$("#settingOpen").click(function(){
    $("#dialog").addClass("active");
});

$("#settingClose").click(function(){
    $("#dialog").removeClass("active");

    gTInit = (Number(gameTimerSettingMin.value) * 60 + Number(gameTimerSettingSec.value)) * 100;
    tInit = (Number(robotTimerSettingMin.value) * 60 + Number(robotTimerSettingSec.value)) * 100;
    hTInit = (Number(halfTimerSettingMin.value) * 60 + Number(halfTimerSettingSec.value)) * 100;
    document.getElementById("teamNames-left").innerHTML = blueTeamSetting.value;
    document.getElementById("teamNames-right").innerHTML = yellowTeamSetting.value;

    timer1Reset();
    timer2Reset();
    timer3Reset();
    timer4Reset();

    clearInterval(gameTimer);
    gT = gTInit;
    gameTimerMain();
})