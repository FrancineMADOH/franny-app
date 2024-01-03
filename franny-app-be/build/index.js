"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var indexRoute_1 = __importDefault(require("./routes/indexRoute"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var fe_url = process.env.FE__URL;
var app = (0, express_1.default)();
var port = 4000;
var domain = fe_url;
var corsOptions = {
    origin: domain,
    optionsSuccessStatus: 200
};
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use('/public', express_1.default.static(path_1.default.join('public'))); //https://stackoverflow.com/questions/67033797/get-request-for-image-to-angular-component-returns-404-not-found
app.use(express_1.default.static(path_1.default.join(__dirname, "../public/views")));
//console.log(path.join(__dirname, "../public/"))
//app.use(express.urlencoded({ extended: true,}));
app.use(body_parser_1.default.urlencoded({ extended: true }));
//app.use(express.json());
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)(corsOptions));
//router
app.use("/api", indexRoute_1.default);
app.get("/", function (req, res) {
    res.render("index.html");
});
app.listen(port, function () {
    console.log("Listening on port " + port);
});
exports.default = app;
