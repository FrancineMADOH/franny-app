"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
//import bodyParser from "body-parser";
var app = (0, express_1.default)();
var port = 4000;
//app.use(bodyParser);
app.get("/", function (req, res) {
    res.send("Hello Franny");
});
app.listen(port, function () {
    console.log("Listening on port " + port);
});
exports.default = app;
