// ? Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.

enum Direction {
   Up,
   Down,
   Left,
   Right,
}

function doSomething(keyPressed: Direction) {
   // do something.
}

doSomething(Direction.Up);
console.log(Direction.Up); // 0

// ? By default, enums get values as 0, 1, 2...

// ? 3. How to change values?
enum DirectionChangeValue {
   Up = 1,
   Down, // becomes 2 by default
   Left, // becomes 3
   Right, // becomes 4
}

// ? 4. Can also be strings
enum DirectionCanBeAString {
   Up = 'UP',
   Down = 'Down',
   Left = 'Left',
   Right = 'Right',
}

// ? 5. Common usecase in express
enum ResponseStatus {
   Success = 200,
   NotFound = 404,
   Error = 500,
}

// app.get("/', (req, res) => {
//    if (!req.query.userId) {
//         res.status(ResponseStatus.Error).json({})
//    }
//    // and so on...
//      res.status(ResponseStatus.Success).json({});
// })

// ? enums are not the part of js

enum Temp {
   temp1, // 0
   temp2, // 1
   temp3 = 1,
   temp4, // becomes 2 by default
}

console.log(Temp);

enum Temp2 {
   temp1,
   temp2,
   temp3 = '1',
   temp4 = '2',
}

console.log(Temp2);
