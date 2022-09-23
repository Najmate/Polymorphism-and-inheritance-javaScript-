import { Animal } from "./Animal";
import { ICanTree } from "./ICanTree";

class Preguica extends Animal implements ICanTree { 
    constructor (nome : string, idade : number, emitirSom : string){
        super(nome, idade, emitirSom)    
}
    public subir(): void {
        console.log(`${this.nome} have ${this.idade} years old, can climb the tree! and emits that sound: ${this.emitirSom}`);
    }
}

export { Preguica };