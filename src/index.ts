let sales = 12345768; // this is a number beacuse typeScript know with asigne with number
let course = 'Typescript'; // String type use can see when you over the mouse on variable
let is_published = true; // boolen type 
let level;// this is not recomemded 

level = 1; //  beacuse of this issue  initialize with number here .
level = 'a';//beacuse of this issue  there initialize with  string.

/** String Example  */
let Name: string = 'laraib Ahmad';
const greeting: string = `Hello, $(Name)!`;
const fileName: string = 'app.ts';
const emptyString: string = "";
const multiline: string = `Line 1 
line 2`;
/** Number with Example */
let age: number = 24;
const PI: number = 3.14159;
const hex: number = 0XFF;
const bigNum: number = 100_000_000;
const negative: number = -13;
/**Boolean with Example */
let isActive: boolean = true;
const hasPermission: boolean = false;
const isGreater: boolean = 10 > 5;
const isEqual: boolean = (10 === 10);
//  const isLoginIn: boolean = !!userToken; 
//  about this line we explain how the logic work.
//  Why Use !!?
//  Explicit Boolean Conversion → Forces userToken into a boolean type (instead of string | null).
// const isLoggedIn: boolean = (userToken);  // Equivalent
// const isLoggedIn = userToken ? true : false;  // Verbose

//Array with example 
let numbers: number[] = [1, 2, 3, 4,];
const string: string[] = ["hello", 'c', 'g'];
const mixed: any[] = [12, 'hello', true];
const emptyArr: never[] = [];
const matrix: number[][] = [[1, 2], [3, 5]];
console.log(matrix);

//Tuple with Example
let user: [string, number] = ["Alic", 25];
const rgb: [number, number, number] = [255, 0, 0];
const httpStatus: [number, string] = [200, "ok"];
const optinalTupel: [number, string?] = [100];
//why optinalTuple? 1)Useful for UI events where extra data is sometimes passed.
//2)Avoids full objects when only 1–2 fields are optional.
//3)More lightweight than an object ({status: number, message?: string}) when order matters.
// 4) When a function returns related but partially optional data (e.g., ID is required, name is optional).

/** Any with example */
let dynamicVar: any = "Hello";
dynamicVar = 42;
dynamicVar = true;
const untypeArr: any[] = [1, "a", true];
console.log(untypeArr);//just check the value.
function logAnything(value: any) {
    console.log(value);
}

/**Unknown with example */
//unknown is the type-safe alternative to any.
//jSON parsing (JSON.parse()).API responses (dynamic data).User input (forms, CLI).
//Forces you to validate data before use.
// let userInput : unknown = fetchUserInput();
// if (typeof userInput === "string") {
//     console.log(userInput.toUpperCase());   
// }
const uncertain: unknown = 10;
const safeParse = (data: unknown): string => JSON.stringify(data);
function assertIsString(val: unknown): asserts val is string {
    if (typeof val !== "string") throw new Error("Not a string!");
}

/**Never with Example */
function throwError(massage: string): never {
    throw new Error(massage);
}
console.log(throwError);
function infiniteLoop(): never { while (true) { } }
console.log(infiniteLoop);

type Empty = string & number;


const impossible: never = throwError("Failed");
function exhaustiveCheck(x: never): never { throw new Error("Unhandled case"); }

/** .Mixed Examples */
let mixedArray: (string | number)[] = ["a", 1];
const nullable: string | null = null;
type Result<T> = { success: true; data: T } | { success: false; error: string };
const response: Result<number> = { success: true, data: 42 };
const error: Result<never> = { success: false, error: "Failed" };

/* Advanced Usage */
type User = { name: string; age: number };  
const users: User[] = [{ name: "Alice", age: 25 }];  
function safeDivide(a: number, b: number): number | never {  
  if (b === 0) throwError("Division by zero");  
  return a / b;  
}  
const parsed: unknown = JSON.parse('{"key": "value"}');  
const isUser = (obj: unknown): obj is User =>  
  !!obj && typeof obj === "object" && "name" in obj && "age" in obj;  








