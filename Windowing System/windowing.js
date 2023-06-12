// Exercici 1
function Size(width, height){
    this.width = width;
    this.height = height;
    this.resize = function Resize(newWidth, newHeight){
        this.width = newWidth;
        this.height = newHeight;
    }
}
let size = new Size(1080, 764);
size.width; // => 1080
size.height; // => 764

size.resize(1920, 1080);
size.width; // => 1920
size.height; // => 1080

function Size(){
    this.width = 80;
    this.height = 60;
    this.resize = function Resize(newWidth, newHeight){
        this.width = newWidth;
        this.height = newHeight;
    }
    return this.width;
}
let size2 = new Size();
size2.width; // => 80
size2.height; // => 60
size2.resize(130, 115);
size2.width; // => 130
size2.height; // => 115

// Exercici 2
function Position(x, y){
    this.x = x;
    this.y = y;
    this.move = function move(newX, newY){
        this.x = newX;
        this.y = newY;
    }
}
let point = new Position(40,20);
point.x; // => 40
point.y; // => 20
point.move(50,100)
point.x; // => 50
point.y; // => 100
function Position(){
    this.x = 0;
    this.y = 0;
    this.move = function move(newX, newY){
        this.x = newX;
        this.y = newY;
    }
}
const point2 = new Position();
point2.x;
point2.y;
point2.move(100, 200);
point2.x; // => 100
point2.y; // => 200

// Exercici 3
function ProgramWindows(){
    this.screensize = Size(800, 500);
    this.size = Size();
    this.point = Position();
    this.resize = function Resize(size){
        if (size.height<1){
            size.height = 1;
        }
        else if (size.width<1){
            size.width = 1;
        }

    }
}
let program = new ProgramWindows();
let newSize = new Size(600,400);
program.resize(newSize);
program.screensize;