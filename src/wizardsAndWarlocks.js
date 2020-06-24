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
      // this.combat = 
    } else if (this.type === "knight") {
      this.defense = 3 + this.health;
      this.attack = 3;
      this.special = 4;
      // this.combat = -3 
    } else if (this.type === "rogue") {
      this.defense = 1 + this.health;
      this.attack = 2;
      this.special = 6;
      //this.combat = 
    }
  }

  combatAction(Victim) {
    Victim.defense -= this.attack;
  }
  
}

export class Badguy {
  
}

