"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const chalk_1 = __importDefault(require("chalk"));
const connectDB = async () => {
    const mongoURI = await process.env.MONGO_URI;
    try {
        const conn = await mongoose_1.default.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log(chalk_1.default.blueBright.underline(`MongoDB Connected: ${conn.connection.host}`));
    }
    catch (error) {
        console.error(chalk_1.default.redBright.bold.underline(`Error: ${error.message}`));
        process.exit(1);
    }
};
exports.default = connectDB;
//# sourceMappingURL=db.js.map