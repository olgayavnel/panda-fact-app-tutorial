import { FactService, PandaFact } from './types';

export const pandaFacts: PandaFact[] = [
  { fact: 'Pandas have six fingers.' },
  { fact: 'Pandas can climb trees.' },
  { fact: 'A panda can eat 12-38 kg of bamboo per day.' },
  { fact: 'A newborn panda is about the size of a stick of butter.' },
  {
    fact: 'Pandas have a "thumb," which is actually a modified wrist bone that helps them grip bamboo.',
  },
  { fact: 'A newborn panda cub weighs just 3 to 5 ounces (85 to 140 grams).' },
  {
    fact: 'An adult panda can eat up to 38 kilograms (84 pounds) of bamboo a day.',
  },
  {
    fact: 'Pandas have a strong sense of smell, which helps them find bamboo and avoid other pandas.',
  },
  {
    fact: 'Pandas can climb trees and swim, which helps them escape predators.',
  },
  {
    fact: 'Giant pandas are good climbers and can swim, but they avoid steep terrain and avoid areas with deep snow.',
  },
  {
    fact: 'In the wild, pandas mainly communicate through vocalization and scent marking.',
  },
  { fact: 'Pandas have lived on Earth for at least 8 million years.' },
  {
    fact: 'Panda cubs do not open their eyes until they are 6 to 8 weeks old.',
  },
  {
    fact: 'Pandas are classified as a vulnerable species, with around 1,864 pandas living in the wild.',
  },
];

export const factService: FactService = {
  getRandomFact: () => {
    const randomIndex = Math.floor(Math.random() * pandaFacts.length);
    return pandaFacts[randomIndex];
  },
};
