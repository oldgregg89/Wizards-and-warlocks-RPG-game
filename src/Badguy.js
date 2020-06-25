//focus on Badguy
//
export class Badguy {
  constructor(type) {
    this.type = type;
    this.addBadGuyProperties();
  }

  addBadGuyProperties() {
    
    if (this.type === "goblin") {
      this.health = 6;
      this.defense = 1 + this.health;
      this.attack = 2;
    } else if (this.type === "bandit") {
      this.health = 7;
      this.defense = 1 + this.health;
      this.attack = 2;
    } else if (this.type === "warlock") {
      this.health = 14;
      this.defense = 3 + this.health;
      this.attack = 4;
    }
  }

  // combatAction(Automatic) {
  //   //player finishes turn automaticly starts attack sequence for badguy
  //   badguy(turn);
  //   this.attack += element.damage;
  //   (endturn)
  // }


}
