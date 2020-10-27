class calculatorTS {
    value: number

    constructor() {
        this.value = 0;
    }

    get Answer(): number {
        return this.value;
    }

    Add(add: number): void{
        this.value += add;
    }

    Min(min: number): void{
        this.value -= min;
    }

    Divide(div: number): void {
        this.value /= div;
    }

    Multiply(mult: number): void {
        this.value *= mult;
    }

    Clear() : void {
        this.value = 0;
    }
} 


let rekenmachine2 = new calculatorTS();

rekenmachine2.Add(100);
console.log(rekenmachine2.Answer);

rekenmachine2.Multiply(3);
console.log(rekenmachine2.Answer);

rekenmachine2.Clear();
console.log(rekenmachine2.Answer);

rekenmachine2.Add(20);
rekenmachine2.Min(50);
console.log(rekenmachine2.Answer);



