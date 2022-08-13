let n: null = null;
let u: undefined = undefined;

// let someNumber: number = null;

const uppercaseFistLetter = (str: string | null) => {
  // this gives error because possibly null - strictNullChecks : true;
  // return str[0].toUpperCase(); //throws error

  // work around - checks if truthy before trying
  if (str) {
    return str[0].toUpperCase(); //throws error
  }
};

type primitiveTypes = boolean | number | string | symbol | null | undefined;

// the object type returns non primitive
const nonPrimitive: object = {}; // OR [] OR new Map()

// type void does not return anything
function log(str: string): void {
  // does not return anything -> void
  console.log("this function returns nothing");
}

let array1: Array<string>; //OR
let array2: string[];

array1 = ["a", "b", "c"];

let T;
