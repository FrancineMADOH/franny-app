"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var express_fileupload_1 = __importDefault(require("express-fileupload"));
var indexRoute_1 = __importDefault(require("./routes/indexRoute"));
var app = (0, express_1.default)();
var port = 4000;
var domain = "http://localhost:4200";
var corsOptions = {
    origin: domain,
    optionsSuccessStatus: 200
};
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express_1.default.static(path_1.default.join(__dirname, "../public/views")));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, express_fileupload_1.default)());
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)(corsOptions));
app.use("/api", indexRoute_1.default);
app.get("/", function (req, res) {
    res.render("index.html");
});
app.listen(port, function () {
    console.log("Listening on port " + port);
});
exports.default = app;
