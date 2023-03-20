export type PandaFact = {
  fact: string;
};

export interface FactService {
  getRandomFact: () => PandaFact;
}
