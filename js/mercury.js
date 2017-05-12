"use strict";

let Handlebars = require("hbsfy/runtime");
let planetTemplate = require("../templates/planet.hbs");
let mercury = {};

mercury.outputTo = function(){
    return new Promise(function(resolve, reject){
        mercury.getInfo()
        .then(data =>{
            console.log("Mercury outputTo function");
           $("#mercury").append(planetTemplate(data));
           resolve();
        }, reason =>{console.error();reject();});
    });
};



mercury.getInfo = function (){
    return new Promise(function(resolve, reject){
        let loader = new XMLHttpRequest();
        loader.open("GET", "../json-files/mercury.json");
        loader.addEventListener("load", function(){
            let mercuryData = JSON.parse(this.responseText);
            resolve(mercuryData);
        });
        loader.addEventListener("error", function(){
            reject("mercury Failed to load");
        });
        loader.send();
    });
};



module.exports = mercury;
