import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Ramesh' },
      { id: 12, name: 'Miss. Diya' },
      { id: 13, name: 'Abrakadabra' },
      { id: 14, name: 'Kelly' },
      { id: 15, name: 'Robertino' },
      { id: 16, name: 'Killian' },
      { id: 17, name: 'Gerard' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magneto' },
      { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }
}