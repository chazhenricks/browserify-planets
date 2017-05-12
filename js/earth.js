"use strict";

let Handlebars = require("hbsfy/runtime");
let planetTemplate = require("../templates/planet.hbs");
let earth = {};

earth.outputTo = function(){
    return new Promise(function(resolve, reject){
        earth.getInfo()
        .then(data =>{
            console.log("earth outputTo function");
           $("#earth").append(planetTemplate(data));
           resolve();
        }, reason =>{console.error();reject();});
    });
};

earth.getInfo = function (){
    return new Promise(function(resolve, reject){
        let loader = new XMLHttpRequest();
        loader.open("GET", "../json-files/earth.json");
        loader.addEventListener("load", function(){
            let earthData = JSON.parse(this.responseText);
            resolve(earthData);
        });
        loader.addEventListener("error", function(){
            reject("Earth Failed to load");
        });
        loader.send();
    });
};



module.exports = earth;
