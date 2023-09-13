// Typage
let firstname: string = 'Fiorella';
const cars: Array<string> = ['Renault', 'Peugeot'];
const people: string[] = ['Fiorella', 'Marina'];
const valid: boolean | number = 1;
const unknown: any = 'Inconnu';

// Fonctions (ES6 arrow function)
const addition = (a: number, b: number): number => a + b;

// Classes (TypeScript)
const Log = () => {
    return (target, propertyKey, descriptor?) => {
        // console.log(target, propertyKey, descriptor);
        // return () => {};
        let method = descriptor.value;
        descriptor.value = () => {
            console.log('CALL');
            method.apply(this, arguments);
        };
    }
}

class Car {
    private wheel: number = 4;

    constructor(private name: string) {
    }

    @Log()
    drive(driver: string): void {
        // Template de string en ES6
        console.log(`
            ${driver} conduit la voiture ${this.name}
        `);
    }
}

const car1: Car = new Car('Renault');
car1.drive('Fiorella');
car1.drive('Fiorella');
