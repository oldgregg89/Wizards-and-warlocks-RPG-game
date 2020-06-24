export class Character {
  constructor(type) {
    this.type = type; 
    if (this.type === "wizard") {
      this.health = 10;
      this.defense = 0;
      this.attack = 3;
      this.special = 5;
    } else if (this.type === "knight") {
      this.health = 10;
      this.defense = 3;
      this.attack = 3;
      this.special = 4;
    } else if (this.type === "rogue") {
      this.health = 10;
      this.defense = 1;
      this.attack = 2;
      this.special = 6;
    }
  }
}