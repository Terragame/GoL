let started = false;// Set to true when use clicks start
let timer;//To control evolutions
let evolutionSpeed = 100;

const rows = 32;
const cols = 64;
var cellSize = 20;

var mousedwn = false;
var canV = document.getElementById("myCanvas");
canV.width  = cellSize * cols;
canV.height = cellSize * rows;

var ctx = canV.getContext("2d");

var canVis = false;

/*let width = screen.availWidth;
let height = screen.availHeight;*/

// Need 2D arrays. These are 1D
let currGen = [rows];
let nextGen = [rows];
//let SaveOne = [rows];

// Creates two-dimensional arrays
function createGenArrays() {
    for (let i = 0; i < rows; i++) {
        currGen[i] = new Array(cols);
        nextGen[i] = new Array(cols);
        //        SaveOne[i] = new Array(cols);
    }
}

function initGenArrays() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            currGen[i][j] = 0;
            nextGen[i][j] = 0;
            //            SaveOne[i][j] = 0;
        }
    }
}

function createWorld() {
    let world = document.querySelector('#world');

    let tbl = document.createElement('table');
    tbl.setAttribute('id', 'worldgrid');
    //tbl.classList.add("border");
    //tbl.classList.add("border-3");
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement('td');
            cell.setAttribute('id', i + '_' + j);
            cell.setAttribute('class', 'dead');
            cell.addEventListener('click', cellClick);
            //cell.setAttribute('class', 'td_sq');
            //cell.addEventListener('mousedown', cellClick);
            tr.appendChild(cell);
            //tr.classList.add("border-0")
        }
        tbl.appendChild(tr);
    }
    world.appendChild(tbl);
}

function cellClick() {
    let loc = this.id.split("_");
    let row = Number(loc[0]);//Get i
    let col = Number(loc[1]);//Get j

    function mouseD0wn() {
        mousedwn = true;
    }

    //mousedwn = document.getElementById("world").onmousedown = function() {mouseD0wn()};
    // Toggle cell alive or dead
    //debugger;
    if (this.className === 'alive') {
        this.setAttribute('class', 'dead');
        currGen[row][col] = 0;
    } else if (this.className === 'dead') {
        this.setAttribute('class', 'alive');
        currGen[row][col] = 1;
    }
}


function createNextGen() {
    for (row in currGen) {
        for (col in currGen[row]) {

            let neighbors = getNeighborCount(row, col);

            // Check the rules
            // If Alive
            if (currGen[row][col] == 1) {

                if (neighbors < 2) {
                    nextGen[row][col] = 0;
                } else if (neighbors == 2 || neighbors == 3) {
                    nextGen[row][col] = 1;
                } else if (neighbors > 3) {
                    nextGen[row][col] = 0;
                }
            } else if (currGen[row][col] == 0) {
                // If Dead or Empty

                if (neighbors == 3) {
                    // Propogate the species
                    nextGen[row][col] = 1;//Birth?
                }
            }
        }
    }

}

function updateCurrGen() {

    for (row in currGen) {
        for (col in currGen[row]) {
            // Update the current generation with
            // the results of createNextGen function
            currGen[row][col] = nextGen[row][col];
            // Set nextGen back to empty
            nextGen[row][col] = 0;
        }
    }

}

function updateWorld() {
    let cell = '';
    for (row in currGen) {
        for (col in currGen[row]) {
            cell = document.getElementById(row + '_' + col);
            //debugger;
            if (currGen[row][col] == 0) {
                cell.setAttribute('class', 'dead');
            } else {
                cell.setAttribute('class', 'alive');
            }
        }
    }
}

function startStopGol() {
    let startstop = document.querySelector('#btnstartstop');

    if (!started) {
        started = true;
        startstop.value = 'Stop evolving';
        evolve();

    } else {
        started = false;
        startstop.value = 'Start evolving';
        clearTimeout(timer);
    }
}

function oneTurnGol() {
    if (!started) {
        started = true;
        evolve();
        started = false;
    }
}
function resetWorld() {
    location.reload();
}

function fillCanvas() {
    let row = 0;
    let col = 0;
    for (row in currGen) {
        for (col in currGen[row]) {
            //debugger;
            ctx.beginPath();
            ctx.rect(col * cellSize, row * cellSize, cellSize, cellSize);
            if (currGen[row][col] == 1) {
                ctx.fillStyle = "#00009A";
            }
            else {
                ctx.fillStyle = "#FDF8B5";
            }
            ctx.fill();
            ctx.closePath();
        }
    }
    /*ctx.moveTo(0, 0);
    ctx.lineTo(100, 100);
    ctx.stroke();
    for(i=0; i<rows; i++){
        ctx.moveTo(0,cellSize*i);
        ctx.lineTo(cellSize*cols,cellSize*i);
        ctx.lineWidth = 1;
        ctx.fillStyle = '#000000';
        ctx.stroke();
    }*/
}

function evolve() {
    if (started) {
        timer = setTimeout(evolve, evolutionSpeed);
        createNextGen();//Apply the rules
        updateCurrGen();//Set Current values from new generation
        updateWorld();//Update the world view
        if (canVis) {
            fillCanvas();
        }
    }
}

function showHide() {
    var x = document.getElementById("myCanvas");
    var y = document.getElementById("worldgrid");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        canVis = true;
        fillCanvas();
    } else {
        x.style.display = "none";
        y.style.display = "block";
        canVis = false;
    }
}

window.onload = () => {
    createWorld();// The visual table
    createGenArrays();// current and next generations
    initGenArrays();//Set all array locations to 0=dead
    checkCookie();
    document.getElementById("myCanvas").style.display = "none";
}
