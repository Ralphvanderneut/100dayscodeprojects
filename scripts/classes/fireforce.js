
class Soldier{
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
    get GetName() {
        return this.name;
    }
    get BMI() {
        return this.CalcBMI()
    }
    CalcBMI() {
        return this.weight / (this.height * this.height);
    }
}

class FireSoldier extends Soldier{
    constructor(generation, specialMove,name, height, weight) {
          super(name, height, weight);
          this.generation = generation;
          this.specialMove = specialMove;
    }

    get GetSpecialMove() {
        return this.specialMove;
    }

    get GetGeneration() {
        return this.generation
    }
}

class Company {
    constructor(number) {
        this.number = number;
        this.members = [];
    }

    AddMember(soldier) {
        this.members.push(soldier);
     }

    get FirstMember() {
       return this.members[0];
    }
}

const soldier = new FireSoldier(1,"volcona of doom","ralph", 1.87, 85);
const company = new Company(1);

company.AddMember(soldier);
let firstMember = company.FirstMember;

console.log(firstMember.BMI)
