"use strict";

let Handlebars = require("hbsfy/runtime");
let planetTemplate = require("../templates/planet.hbs");
let mars = {};

mars.outputTo = function(){
    return new Promise(function(resolve, reject){
        mars.getInfo()
        .then(data =>{
            console.log("mars outputTo function");
           $("#mars").append(planetTemplate(data));
           resolve();
        }, reason =>{console.error();reject();});
    });
};

mars.getInfo = function (){
    return new Promise(function(resolve, reject){
        let loader = new XMLHttpRequest();
        loader.open("GET", "../json-files/mars.json");
        loader.addEventListener("load", function(){
            let marsData = JSON.parse(this.responseText);
            resolve(marsData);
        });
        loader.addEventListener("error", function(){
            reject("mars Failed to load");
        });
        loader.send();
    });
};



module.exports = mars;
