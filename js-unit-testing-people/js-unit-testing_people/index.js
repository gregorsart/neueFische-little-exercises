export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  const fullNamesArray = people.map((person) => {
    const concat = `${person.firstName} ${person.lastName}`;
    return concat;
  });
  return fullNamesArray;
}

export function getNameAndAge(people) {
  const nameAndAgeArray = people.map((person) => {
    const concat = `${person.lastName} (${person.age})`;
    return concat;
  });
  return nameAndAgeArray;
}

export function getPeopleByAge(people, age) {
  const getPeopleByAgeArray = people.filter((person) => person.age === age);
  return getPeopleByAgeArray;
}

export function getPeopleNamesOlderThan(people, age) {
  const getPeopleNamesOlderThanArray = people
    .filter((person) => person.age > age)
    .map((person) => {
      return `${person.firstName} ${person.lastName}`;
    });
  return getPeopleNamesOlderThanArray;
}

export function getPeopleByLastName(people, lastName) {}

export function findPersonById(people, id) {}

export function isAnyoneOlderThan(people, age) {}

export function getFullNamesSortedByAge(people) {}
