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
      expect(reusableCharacter.defense).toEqual(10);
      expect(reusableCharacter.special).toEqual(5);
  });

  test('attributes of "knight"', () => {
    expect(reusableCharacter2.health).toEqual(10);
    expect(reusableCharacter2.attack).toEqual(3);
    expect(reusableCharacter2.defense).toEqual(13);
    expect(reusableCharacter2.special).toEqual(6);
  });

  test('attributes of "rogue"', () => {
    expect(reusableCharacter3.health).toEqual(10);
    expect(reusableCharacter3.attack).toEqual(2);
    expect(reusableCharacter3.defense).toEqual(11);
    expect(reusableCharacter3.special).toEqual(6);
  });

  test('knight attacks rogue should decrease rogue defense level', () => {
    reusableCharacter2.combatAction(reusableCharacter3);
    expect(reusableCharacter3.defense).toEqual(8);
  });
  
  test('knights special of parry adds to his defense' , () => {
    reusableCharacter2.knightSpecial()
    expect(reusableCharacter2.defense).toEqual(19)
  })
})
