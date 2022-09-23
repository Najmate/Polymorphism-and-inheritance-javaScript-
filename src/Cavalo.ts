import { Animal } from "./Animal";
import { ICanRun } from "./ICanRun";

class Cavalo extends Animal implements ICanRun { 
    constructor (nome : string, idade : number, emitirSom : string){
        super(nome, idade, emitirSom)    
}
    public correr(): void {
        console.log(`${this.nome} have ${this.idade} years old, can run! and emits that sound: ${this.emitirSom}`);
    }
}

export { Cavalo };