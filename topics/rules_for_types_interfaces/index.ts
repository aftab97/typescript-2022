// interfaces

interface PersonInterface {
  firstName: string;
  lastName: string;
}

interface NewInterface extends PersonInterface {
  gender: string;
}

const Person: NewInterface = {
  firstName: "aftab",
  lastName: "alam",
  gender: "male",
};
// extend inherits the properties from the other interface
// EXTEND CAN ONLY BE USED WITH INTERFACES AND CLASSES
// interfaces can extend each other. This allows you to copy the members of one interface into another,

// so if you put ? becomes a conditional type
// so you can only make types with conditional types

type ConditionalInteraface = NewInterface extends PersonInterface
  ? number
  : string;

// if you want to extend a type use  &
type PersonType = {
  firstName: string;
  lastName: string;
};

type GenderType = {
  gender: string;
};

type NewType = PersonType & GenderType;

const PersonTypeVersion: NewType = {
  firstName: "aftab",
  lastName: "alam",
  gender: "male",
};
