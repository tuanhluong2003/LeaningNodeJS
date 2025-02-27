// var global let local

import express from 'express';

let configViewEngine = (app) => {

    app.use(express.static("./src/public")); // lấy ảnh trên server 1k,i9thì chỉ đc lấy trong thư mục public
    app.set("view engine", "ejs"); //if for else
    app.set("views", "./src/views");//set đường link lấy viewegine
}

module.exports = configViewEngine;