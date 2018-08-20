function count(str){
    str = str.toLowerCase();
    str = str.replace("a-z", '');
    var obj = {};
    
    for (var i = 0; i < str.length; i++){
        obj[str[i]] = obj[str[i]] ? ++obj[str[i]] : 1;  //ternary if operation '?'
    }
    return obj
}  

console.log(count("hello hey"));


url = "";
if (url == ""){
    console.log("yes");
}
else{
    console.log("no");
}

n = url == "" ? "no" : url;
console.log(n);


function array_flip(){
    var flip = [1,2,4,3, 5];
   
    for(var i = 0; i < flip.length; i++){
        return Array.reverse(i);
    }
}
array_flip();



<!-- Constructors -->

function Fruit(name, color, shape, sides) {
    this.name = name;
    this.color = color;
    this.shape = shape;
    this.sides = sides;

    this.describe = function() {
        return 'A ' + this.name + ' is the color ' + this.color + ' and is the shape ' + this.shape;
    }
}

let apple = new Fruit('apple', 'red', 'round');
let banana = new Fruit('banana', 'yellow', 'oval');
let orannge = new Fruit('orange', 'orange', 'round');
let grape = new Fruit('grape', 'purple', 'round');

alert(apple.describe());




