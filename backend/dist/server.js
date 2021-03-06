"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const chalk_1 = __importDefault(require("chalk"));
const cors_1 = __importDefault(require("cors"));
const product_1 = __importDefault(require("./routes/product"));
const db_1 = __importDefault(require("./config/db"));
const errorHandler_1 = require("./middlewares/errorHandler");
// This allows us to use environment variables
dotenv_1.default.config();
// Connect to MongoDB using Mongoose
db_1.default();
// App express application
const app = express_1.default();
// Node environment
const nodeEnv = process.env.NODE_ENV;
if (nodeEnv === 'development') {
    app.use(morgan_1.default('dev'));
}
// This will allow accept json data in the body from the request
app.use(express_1.default.json());
// Enable CORS
app.use(cors_1.default());
//? Routes starts here-------------------------------
// Product Routes
app.use('/api/v1/products', product_1.default);
//? Routes ends here---------------------------------
// Error Handling
app.use(errorHandler_1.notFoundError);
app.use(errorHandler_1.allErrorsHandler);
//todo ----------------------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(chalk_1.default.magenta.bold(`Node Server Running On Port ${PORT}, In '${nodeEnv}' Mode`));
});
//# sourceMappingURL=server.js.map