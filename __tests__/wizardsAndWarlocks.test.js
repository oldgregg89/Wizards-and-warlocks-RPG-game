import { Character } from '../src/wizardsAndWarlocks.js'

describe('Character', () => {
  let reusableCharacter;

  beforeEach(() => {
    reusableCharacter = new Character("wizard");
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
  
})
