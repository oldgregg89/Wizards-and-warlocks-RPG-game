export class Character {
  constructor(type) {
    this.type = type; 
    this.health = 10;
    this.abilities(this.type);
  }

  abilities(type) {
    if (this.type === "wizard") {
      this.defense = 0;
      this.attack = 3;
      this.special = 5;
    } else if (this.type === "knight") {
      this.defense = 3;
      this.attack = 3;
      this.special = 4;
    } else if (this.type === "rogue") {
      this.defense = 1;
      this.attack = 2;
      this.special = 6;
    }
  }
}