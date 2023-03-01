"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var indexRoute_1 = __importDefault(require("./routes/indexRoute"));
var app = (0, express_1.default)();
var port = 4000;
var domain = "localhost:4200";
var corsOptions = {
    origin: domain,
    optionsSuccessStatus: 200
};
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)(corsOptions));
app.use("/api", indexRoute_1.default);
app.get("/", function (req, res) {
    res.send("Hello Franny");
});
app.listen(port, function () {
    console.log("Listening on port " + port);
});
exports.default = app;
