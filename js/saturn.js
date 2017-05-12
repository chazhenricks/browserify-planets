"use strict";

let Handlebars = require("hbsfy/runtime");
let planetTemplate = require("../templates/planet.hbs");
let saturn = {};

saturn.outputTo = function(){
    return new Promise(function(resolve, reject){
        saturn.getInfo()
        .then(data =>{
            console.log("saturn outputTo function");
           $("#saturn").append(planetTemplate(data));
           resolve();
        }, reason =>{console.error();reject();});
    });
};

saturn.getInfo = function (){
    return new Promise(function(resolve, reject){
        let loader = new XMLHttpRequest();
        loader.open("GET", "../json-files/saturn.json");
        loader.addEventListener("load", function(){
            let saturnData = JSON.parse(this.responseText);
            resolve(saturnData);
        });
        loader.addEventListener("error", function(){
            reject("saturn Failed to load");
        });
        loader.send();
    });
};



module.exports = saturn;
