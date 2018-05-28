<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Learning JavaScript</title>
    <link rel="stylesheet" href="design.css" />

</head>

<body>
    <div class="header">
        <h1>Learning JavaScript</h1>
        <p>With Malfred Koryor</p>

    </div>

    <div class="container">

    </div>
    <script>
        
        <!-- Literals -->
        
        let person = {
            first: "Brad",
            last_name: "koryor",
            age: 22,
            middle: function() {
                return this.first + " likes apples alot!!";
            },
            address: {
                street: '3023 Main street',
                city: 'Dallas',
                state: 'Texas'
            }
        };

        alert(person.middle());
        
        
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

        alert(apple.describe());
        
    </script>

</body>

</html>
