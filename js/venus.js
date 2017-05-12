"use strict";

let Handlebars = require("hbsfy/runtime");
let planetTemplate = require("../templates/planet.hbs");
let venus = {};

venus.outputTo = function(){
    return new Promise(function(resolve, reject){
        venus.getInfo()
        .then(data =>{
            console.log("venus outputTo function");
           $("#venus").append(planetTemplate(data));
           resolve();
        }, reason =>{console.error();reject();});
    });
};

venus.getInfo = function (){
    return new Promise(function(resolve, reject){
        let loader = new XMLHttpRequest();
        loader.open("GET", "../json-files/venus.json");
        loader.addEventListener("load", function(){
            let venusData = JSON.parse(this.responseText);
            resolve(venusData);
        });
        loader.addEventListener("error", function(){
            reject("venus Failed to load");
        });
        loader.send();
    });
};



module.exports = venus;
