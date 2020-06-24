export class Character {
  constructor(type) {
    this.type = type; 
    if (this.type === "wizard") {
      this.health = 10;
      this.defense = 0;
      this.attack = 3;
      this.special = 5;
    }
  }
}