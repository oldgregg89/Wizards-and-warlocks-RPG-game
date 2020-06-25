export class Character {
  constructor(type) {
    this.type = type; 
    this.health = 10;
    this.itemsBag = [];
    this.addCharacterProperties();
  }

  addCharacterProperties() {
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
    } else if (this.type === "goblin") {
      this.health = 6
      this.defense = 1 + this.health;
      this.attack = 2;
    } else if (this.type === "bandit") {
      this.health = 7
      this.defense = 1 + this.health;
      this.attack = 2;
    } else if (this.type === "warlock") {
      this.health = 14
      this.defense = 3 + this.health;
      this.attack = 4;
    }
  }

  itemProperties() {
    this.itemsBag.forEach((element) => {
      if (element.kind === "weapon") {
        this.attack += element.damage;
      }
    });
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

  //reverse
  rogueSpecial(attacker){
    this.defense = 1 + this.health;
    attacker.defense -= attacker.attack;
  }
}

