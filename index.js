function page1() {
console.log('page1');
console.log(8);
document.oncontextmenu = function() {return false;}
var countdown = 8;
setInterval(function() {
    
    if (countdown > 0) {
        countdown--;
    }
    if (countdown == 0) {
        document.getElementById('gone2').classList.remove('gone');
    }
}, 1000);
setInterval(function() {
    if (countdown > 0) {
    console.log(countdown);
    }}
, 1000);
setTimeout(function(){document.getElementById('gone').classList.remove('gone');},1000);
setTimeout(function(){document.title = 'BOOM!';},800);
setTimeout(function(){document.getElementById('gone1').classList.add('gone');},1750);
setTimeout(function(){document.getElementById('gone').classList.add('gone');},2200);
setTimeout(function(){document.title = 'anime is gone :)';},2000);
function rickroll() {
setInterval(function() {
    if (countdown > 0) {
    document.title = countdown;
    } else {
    document.title = 'click it';
    }
    if(countdown == 1) {
    document.getElementById("countdown").innerHTML = 'Something cool will happen in ' + countdown + ' second...';
    } else {
    document.getElementById("countdown").innerHTML = 'Something cool will happen in ' + countdown + ' seconds...';
    }
    if(countdown == 0) {
        document.getElementById("countdown").innerHTML = 'Something cool will happen if you click that button...';
    }
    if(countdown == 'heheheha') {
        document.getElementById("countdown").innerHTML = 'get rickrolled idiot';
    }}
, 10);}
setTimeout(function(){rickroll();},3500);}
function page2() {
    adrielHacksOnALegoGame();
    function adrielHacksOnALegoGame() {
        const adrielHacksOnALegoGame = 1
        if(adrielHacksOnALegoGame = 1) {
        console.warn('hacking is cringe');
        } else {
        console.error('404 not found');
        }}}