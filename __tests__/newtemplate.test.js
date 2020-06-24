import { Character } from './../src/newtemplate.js'

describe('Character', () => {
  let reusableCharacter;

  beforeEach(() => {
    reusableCharacter = new Character("wizard");
  })
  

  test('character object should have type "wizard", "knight", or "rogue"', () => {
    expect(reusableCharacter.type).toEqual("wizard" || "knight" || "rogue")
  });

})