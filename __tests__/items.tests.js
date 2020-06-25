import { Character } from '../src/Character.js'
import { Sword } from '../src/items.js'

describe('Sword', () => {
  let sword;
  let knight;

  beforeEach(() => {
    knight = new Character("knight");
    let sword = new Sword();
  });

  test('sword item will add to character attack rating', () => {
    knight.itemsBag.push(sword);
    
    expect(knight.itemsBag.length).toEqual(1);
  });
});