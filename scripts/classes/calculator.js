class calculator{
    constructor()
    {
        this.value = 0;
    }

    get Answer() { return this.value };

    Add(inc) {
        this.value += inc;
    }

    Min(dec) {
        this.value -= dec;
    }

    Divide(div) {
        this.value /= div;
    }

    Multiply(mult) {
        this.value *= mult;
    }

    Clear() {
        this.value = 0;
    }

}

const rekenmachine = new calculator();

rekenmachine.Add(100);
console.log(rekenmachine.Answer);

rekenmachine.Multiply(3);
console.log(rekenmachine.Answer);

rekenmachine.Clear();
console.log(rekenmachine.Answer);

rekenmachine.Add(20);
rekenmachine.Min(50);
console.log(rekenmachine.Answer);


