"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const chalk_1 = __importDefault(require("chalk"));
const product_1 = __importDefault(require("./routes/product"));
// This allows us to use environment variables
dotenv_1.default.config();
// App express application
const app = express_1.default();
// Node environment
const nodeEnv = process.env.NODE_ENV;
if (nodeEnv === 'development') {
    app.use(morgan_1.default('dev'));
}
// This will allow accept json data in the body from the request
app.use(express_1.default.json());
//? Routes starts here-------------------------------
// Product Routes
app.use('/api/v1/products', product_1.default);
//? Routes ends here---------------------------------
//todo ----------------------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(chalk_1.default.magenta.bold(`Node Server Running On Port ${PORT}, In '${nodeEnv}' Mode`)); });
