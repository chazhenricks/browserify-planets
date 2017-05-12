"use strict";

console.log("MAIN.JS");

let Mercury = require("./mercury.js");
let Venus = require('./venus.js');
let Earth = require("./earth.js");
let Mars = require("./mars.js");
let Jupiter = require("./jupiter.js");
let Saturn = require("./saturn.js");
let Uranus = require("./uranus.js");
let Neptune = require("./neptune.js");

let solarSystem = {};



Mercury.outputTo()
.then (
    Venus.outputTo,
    console.error
).then (
    Earth.outputTo,
    console.error
).then (
    Mars.outputTo,
    console.error
).then (
    Saturn.outputTo,
    console.error
).then (
    Jupiter.outputTo,
    console.error
).then (
    Uranus.outputTo,
    console.error
)
.then (
    Neptune.outputTo,
    console.error
);

// .then(mercury =>{
//     solarSystem.mercury = mercury;
//     return Venus.getInfo();
// }, reason =>{console.error();}

// ).then( venus => {
//     solarSystem.venus = venus;
//     return Earth.getInfo();
// }, reason => {console.error();}
// ).then (earth =>{
//         solarSystem.earth = earth;
//         return Mars.getInfo();
//     }, resason =>{console.error();}

// ).then(mars => {
//     solarSystem.mars = mars;
//     return Jupiter.getInfo();
// }, reason =>{console.error();}

// ).then( jupiter => {
//         solarSystem.jupiter = jupiter;
//         return Saturn.getInfo();
//     },reason => {console.error();}
// ).then( saturn => {
//     solarSystem.saturn = saturn;
//     return Uranus.getInfo();
//     }, reason => {console.error();}
// ).then( uranus =>{
//     solarSystem.uranus = uranus;
//     return Neptune.getInfo();
//     }, reason =>{console.error();}
// ).then (neptune =>{
//     solarSystem.neptune = neptune;
//     console.log(solarSystem);
//     }, reason =>{console.error();}
// );



























