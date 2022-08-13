console.log("hello");

type Properties = "propA" | "propB";

type MyMappedType<Properties extends string | number | symbol> = {
  // Type 'Properties' is not assignable to type 'string | number | symbol'.
  [P in Properties]: P;
};

type MyNewType = MyMappedType<"propA" | "propB" | "propC">;

// SO - creates - the key and properties are the same
type WhatItCreated = {
  propA: "propA";
  propB: "propB";
};

// To do the above with GENERIC -
type GenericMappedTypes<T> = {
  [P in keyof T]: T[P];
};

type NewGenericMappedType = GenericMappedTypes<{ a: "a"; b: "b" }>;
type WhatItCreated2 = {
  a: "a";
  b: "b";
};

// REMINDER what keyof is
type Example = { x: number; y: number };
type KeyOfExample = keyof Example;
const test: KeyOfExample = "y"; // "x" or "y"

interface MyDogInfo {
  name: string;
}

type ConvertAllKeysBoolean<Type> = {
  [Property in keyof Type]: boolean;
};

type ConvertedDogInforTypeToBooleans = ConvertAllKeysBoolean<MyDogInfo>;

// gives --
// type ConvertedDogInforTypeToBooleans = {
//   name: boolean;
// }

// SOME CASE SCENARIOS
// you have a interface with properties and you want to change it to something that gives backa  function that returns the type

interface Person {
  name: string;
  age: number;
}

// gives back this
interface PersonInterfaceConvertedToFunction {
  name: () => string;
  age: () => number;
}

// implemented like this
interface Animal {
  type: string;
  age: number;
}

// the as lets you change what the name of the key is
type ConvertInterfaceWithFunctions<Type> = {
  [Property in keyof Type as `get${Capitalize<
    Property & string
  >}`]: () => Type[Property];
};

type NewAnimalInterface = ConvertInterfaceWithFunctions<Animal>;

// returns
type NewAnimalInterfacePreview = {
  type: () => string;
  age: () => number;
};

// ANOTHER SCENARIO
// say you have an interface you dont want to have a specific property in there

// e.g.
interface InterfaceWithAPropertyWeDontWant {
  firstName: string;
  lastName: string;
  ethnicity: string;
}

type RemovePropertyEthnicity<Type> = {
  [Property in keyof Type as Exclude<Property, "ethnicity">]: Type[Property];
};

type TypeWithoutPropertyWeDoNotWant =
  RemovePropertyEthnicity<InterfaceWithAPropertyWeDontWant>;
// Result - removes the enthnicity property
