/* Dada uma série de eleitores em potencial, retorne um objeto que represente os resultados da votação. Inclua quantos eleitores potenciais tinham entre 18 e 25 anos, quantos eram de 26 a 35 anos, quantos de 36 a 55 nos e quantos de cada uma dessas faixas etárias realmente votaram. O objeto resultante contendo esses dados deve ter 6 propriedades. */

const voters  = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false },
  ];

  const getVoterResult = (array) => array.reduce(
      (totalVoters, person) => {
          return {
              numYoungVotes:
                  person.age >= 18 && person.age <= 25 && person.voted ? (totalVoters.numYoungVotes += 1) : totalVoters.numYoungVotes,
              numYoungPeople:
                  person.age >= 18 && person.age <= 25 ? (totalVoters.numYoungPeople += 1) : totalVoters.numYoungPeople, 
              numMidVotes:
                  person.age > 25 && person.age <= 35 && person.voted ? (totalVoters.numMidVotes += 1) : totalVoters.numMidVotes,
              numMidsPeople:
                  person.age > 25 && person.age <= 35 ? (totalVoters.numMidsPeople += 1) : totalVoters.numMidsPeople,
              numOldVotes:
                  person.age > 35 && person.age > 35 && person.voted ? (totalVoters.numOldVotes += 1) : totalVoters.numOldVotes,
              numOldsPeople:
                  person.age > 35 && person.age > 35 ? (totalVoters.numOldsPeople += 1) : totalVoters.numOldsPeople,
          };
      },
      {
          numYoungVotes: 0,
          numYoungPeople: 0,
          numMidVotes: 0,
          numMidsPeople: 0,
          numOldVotes: 0,
          numOldsPeople: 0,
      }
  );

console.log(getVoterResult(voters));