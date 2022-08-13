interface Animals {
  live: () => void;
}

interface Dog extends Animals {
  woof: () => void;
}

// extend adds the property
const dogAnimal: Dog = {
  live: function (): void {
    throw new Error("Function not implemented.");
  },
  woof: (): void => {},
};

dogAnimal.woof();

// example of conditional types
type ConditionalType = Dog extends Animals ? number : string;

// gives back this -
type ConditionalTypeResult = number;

// Another case

// this thows an error because T isn't known so you can constrain it - like the example below
// type MessageOf<T> = T["message"];

// remember extends just adds the types e.g. extends Dog -> adds woof: ()=> void;
type MessageOf<T extends { message: unknown }> = T["message"];

interface Email {
  message: string;
}

interface Email2 {
  name: string;
}

type EmailMessageContent = MessageOf<Email>;

// now if we wanted if the "message" propery does not exist to give back a type or number if it does not exist
//can either be unknown - for when you dont know the type or the type itself - string
type MessageOfImproved<T> = T extends { message: unknown }
  ? T["message"]
  : number;

type EmailMessageContent2 = MessageOfImproved<{ notMessageProperty: boolean }>;
// result -> type EmailMessageContent2 = number
// because message does not exist in Email2 so defaults to number - the conditional was false

// ANOTHER USE CASE
// say you want to create an array of type from the type
// string -> string[]

// this will alway be true so will create that T[] - can even be unknown - will never be false -> never
type ConvertToArrayOfType<T> = T extends any ? T[] : never;

type CreatedArray = ConvertToArrayOfType<string>;
