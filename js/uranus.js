"use strict";

let Handlebars = require("hbsfy/runtime");
let planetTemplate = require("../templates/planet.hbs");
let uranus = {};

uranus.outputTo = function(){
    return new Promise(function(resolve, reject){
        uranus.getInfo()
        .then(data =>{
            console.log("uranus outputTo function");
           $("#uranus").append(planetTemplate(data));
           resolve();
        }, reason =>{console.error();reject();});
    });
};


uranus.getInfo = function (){
    return new Promise(function(resolve, reject){
        let loader = new XMLHttpRequest();
        loader.open("GET", "../json-files/uranus.json");
        loader.addEventListener("load", function(){
            let uranusData = JSON.parse(this.responseText);
            resolve(uranusData);
        });
        loader.addEventListener("error", function(){
            reject("uranus Failed to load");
        });
        loader.send();
    });
};



module.exports = uranus;
