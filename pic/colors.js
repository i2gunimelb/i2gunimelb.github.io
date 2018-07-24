
function object(o) {
    function F() {}
    F.prototype = o
    return new F()
}

function randInt(numVals) {
    return Math.floor(Math.random()*numVals)
}

function randColor() {
    var idx = randInt(9)
    var palette = [
        "rgb(220,100,120)",
        "rgb(85,120,105)",
        "rgb(220,200,100)",
        "rgb(130,130,50)",
        "rgb(80,130,200)",
        "rgb(220,100,70)",
        "rgb(90,170,190)",
        "rgb(90,110,80)",
        "rgb(190,70,150)"
    ];
    var color = palette[idx]
    return color
}

function assignColorBlocks() {
    var blocks = document.getElementsByClassName("color_block")
    var i = 0
    for(i=0; i<blocks.length; i++) {
        blocks[i].style.backgroundColor = randColor()
    }
}