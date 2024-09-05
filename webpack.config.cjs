// import webpack from "webpack";
// import {resolve}from "path"
const {resolve}=require("path")
const config={
    entry:"./index.js",
    output:{
        path:resolve(__dirname,"dist"),
        filename:"bundle.js"
    }
}

module.exports=config