export interface Person {
  name: string;
  age: number;
}

export const printPerson = (person: Person = { name: "Joe", age: 20 }) => {
  console.log(person);
};
