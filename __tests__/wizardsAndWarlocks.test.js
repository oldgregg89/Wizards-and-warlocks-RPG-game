import { Character } from '../src/wizardsAndWarlocks.js'

describe('Character', () => {
  let reusableCharacter;
  let reusableCharacter2;
  let reusableCharacter3;

  beforeEach(() => {
    reusableCharacter = new Character("wizard");
    reusableCharacter2 = new Character("knight");
    reusableCharacter3 = new Character("rogue");
  })

  test('character object should have type "wizard", "knight", or "rogue"', () => {
    expect(reusableCharacter.type).toEqual("wizard" || "knight" || "rogue")
  });
  
  test('attributes of "wizard"', () => {
      expect(reusableCharacter.health).toEqual(10);
      expect(reusableCharacter.attack).toEqual(3);
      expect(reusableCharacter.defense).toEqual(0);
      expect(reusableCharacter.special).toEqual(5);
  });

  test('attributes of "knight"', () => {
    expect(reusableCharacter2.health).toEqual(10);
    expect(reusableCharacter2.attack).toEqual(3);
    expect(reusableCharacter2.defense).toEqual(3);
    expect(reusableCharacter2.special).toEqual(4);
  });

  test('attributes of "rogue"', () => {
    expect(reusableCharacter3.health).toEqual(10);
    expect(reusableCharacter3.attack).toEqual(2);
    expect(reusableCharacter3.defense).toEqual(1);
    expect(reusableCharacter3.special).toEqual(6);
  });

  test('knight attacks rogue should decrease rogue health', () => {
    reusableCharacter2.combatAction(reusableCharacter3);
    expect(reusableCharacter3.health).toEqual(7)
  });
  
})
