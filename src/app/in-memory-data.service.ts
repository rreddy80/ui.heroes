import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
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

    let  comments = [
      { _id: 100, message: 'messag1', name: 'num1', email: '1@email.com', parent_id: 0, replying: false, unique_id: 'UQ001', upvotes: 12, downvotes: 2 },
      { _id: 101, message: 'messag2', name: 'num2', email: '2@email.com', parent_id: 0, replying: false, unique_id: 'UQ002', upvotes: 10, downvotes: 1 }
    ];

    return { heroes, comments };
  }
}