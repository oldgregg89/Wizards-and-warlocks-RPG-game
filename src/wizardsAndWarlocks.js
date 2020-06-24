export class Character {
  constructor(type) {
    this.type = type; 
    this.health = 10;
    this.addCharacterProperties(this.type);
  }

  addCharacterProperties(type) {
    if (this.type === "wizard") {
      this.defense = 0 + this.health;
      this.attack = 3;
      this.special = 5;
    } else if (this.type === "knight") {
      this.defense = 3 + this.health;
      this.attack = 3;
      this.special = 6;
    } else if (this.type === "rogue") {
      this.defense = 1 + this.health;
      this.attack = 2;
      this.reverse = 7;
      this.special = 6;
    }
  }

  combatAction(Victim) {
    Victim.defense -= this.attack;
  }
  
  //Perry attack
  knightSpecial(){
    this.defense += this.special
  }

  //wizard fireball
  wizardSpecial(){
    this.attack += this.special
  }

  rogueSpecial(attacker){
    this.defense = 1 + this.health;
    attacker.defense -= attacker.attack;
  }
}



export class Badguy {
  
}
