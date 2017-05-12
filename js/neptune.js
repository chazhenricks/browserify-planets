"use strict";

let Handlebars = require("hbsfy/runtime");
let planetTemplate = require("../templates/planet.hbs");
let neptune = {};

neptune.outputTo = function(){
    return new Promise(function(resolve, reject){
        neptune.getInfo()
        .then(data =>{
            console.log("neptune outputTo function");
           $("#neptune").append(planetTemplate(data));
           resolve();
        }, reason =>{console.error();reject();});
    });
};

neptune.getInfo = function (){
    return new Promise(function(resolve, reject){
        let loader = new XMLHttpRequest();
        loader.open("GET", "../json-files/neptune.json");
        loader.addEventListener("load", function(){
            let neptuneData = JSON.parse(this.responseText);
            resolve(neptuneData);
        });
        loader.addEventListener("error", function(){
            reject("neptune Failed to load");
        });
        loader.send();
    });
};



module.exports = neptune;
