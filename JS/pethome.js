let game = {
hungry: 1,
bordom: 1,
sleepiness: 1,
};

//console.log(game.hungry);


function lightsOnOff() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

function incPlay() {
    let element = document.getElementById('letsPlay');
    let value = element.innerHTML;
    ++value;
    console.log(value)
    document.getElementById('letsPlay').innerHTML = value;
}

function incFeed() {
    let element = document.getElementById('feedMe');
    let value = element.innerHTML;
    ++value;
    console.log(value)
    document.getElementById('feedMe').innerHTML = value;
}

function lights() {
    let element = document.getElementById('lightsToggle');
    let value = element.innerHTML;
    ++value;
    console.log(value)
    document.getElementById('lightsToggle').innerHTML = value;
}