"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cachorro_1 = require("./Cachorro");
var Cavalo_1 = require("./Cavalo");
var Preguica_1 = require("./Preguica");
var cavalo = new Cavalo_1.Cavalo('Alazão', 12, 'Bruuuuuff...');
var cachorro = new Cachorro_1.Cachorro('totó', 6, 'Au, Au, Auuu...');
var preguica = new Preguica_1.Preguica('Preguiça', 3, 'hainn, hainn...');
function takeoff(animal) {
    animal.subir();
}
function takeoff1(animal) {
    animal.correr();
}
takeoff(preguica);
takeoff1(cavalo);
takeoff1(cachorro);
