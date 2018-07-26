var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 2381341
};

function prequal(car){
    if (car.mileage > 10000){
        return false;
    }else if (car.year > 1960){
        return false;
    }
    return true;

}

var worthAlook = prequal(taxi);

if(worthAlook){
    console.log("You gotta check out this " + taxi.make + " " + taxi.model);
}else{
    console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}






 <!-- Constructors -->
        
        function Fruit(name, color, shape) {
            this.name = name;
            this.color = color;
            this.shape = shape;

            this.describe = function() {
                return 'A ' + this.name + ' is the color ' + this.color + ' and is the shape ' + this.shape;
            }
        }

        let apple = new Fruit('apple', 'red', 'round');
        let banana = new Fruit('banana', 'yellow', 'oval');
        let orange = new Fruit('orange', 'orange', 'round');
        let grape = new Fruit('grape', 'purple', 'round');
        
        alert(orange.describe());
        alert(apple.describe());
        alert(grape.describe());
        alert(banana.describe());
        
