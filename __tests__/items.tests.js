import { Character } from '../src/Character.js'
import { Sword } from '../src/items.js'

describe('Sword', () => {
  let sword;
  let reusableCharacter2;

  beforeEach(() => {
    reusableCharacter2 = new Character("knight");
    let sword = new Sword();
  });

  test('sword item will add to character attack rating', () => {
    reusableCharacter2.itemsBag.push(sword);
    expect(reusableCharacter2.itemProperties()).toEqual(7);
  })
});