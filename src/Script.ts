import { Cachorro } from "./Cachorro";
import { Cavalo } from "./Cavalo";
import { Preguica } from "./Preguica";
import { ICanRun } from "./ICanRun";
import { ICanTree } from "./ICanTree";

const cavalo = new Cavalo('Alazão', 12, 'Bruuuuuff...')
const cachorro = new Cachorro('totó', 6,'Au, Au, Auuu...')
const preguica = new Preguica('Preguiça', 3, 'hainn, hainn...')

function takeoff(animal : ICanTree) {
    animal.subir()
}
function takeoff1(animal : ICanRun) {
    animal.correr()
}

takeoff(preguica);
takeoff1(cavalo);
takeoff1(cachorro);