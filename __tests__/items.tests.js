import { Character } from './../src/Character.js'
import { Sword } from './../src/items.js'

describe('Sword', () => {
  let sword;
  let knight;

  beforeEach(() => {
    knight = new Character("knight", "test");
    sword = new Sword();
  });

  test('sword item will add to character attack rating', () => {
    knight.handItem(sword);
    expect(knight.attack).toEqual(7);
    
  });
});