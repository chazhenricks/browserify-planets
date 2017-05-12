"use strict";

let Handlebars = require("hbsfy/runtime");
let planetTemplate = require("../templates/planet.hbs");
let jupiter = {};

jupiter.outputTo = function(){
    return new Promise(function(resolve, reject){
        jupiter.getInfo()
        .then(data =>{
            console.log("jupiter outputTo function");
           $("#jupiter").append(planetTemplate(data));
           resolve();
        }, reason =>{console.error();reject();});
    });
};


jupiter.getInfo = function (){
    return new Promise(function(resolve, reject){
        let loader = new XMLHttpRequest();
        loader.open("GET", "../json-files/jupiter.json");
        loader.addEventListener("load", function(){
            let jupiterData = JSON.parse(this.responseText);
            resolve(jupiterData);
        });
        loader.addEventListener("error", function(){
            reject("jupiter Failed to load");
        });
        loader.send();
    });
};



module.exports = jupiter;
