"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const configs_1 = require("./app/configs");
if (configs_1.config.mongoURI) {
    mongoose_1.default
        .connect(configs_1.config.mongoURI)
        .then(() => {
        console.log("✅ Database Connected!");
        app_1.default.listen(configs_1.config.port, () => console.log(`🚀 Server running on port ${configs_1.config.port}`));
    })
        .catch((error) => {
        console.error("❌ Database Connection Error:", error);
        process.exit(1);
    });
}
else {
    console.error("❌ MongoURI is not defined in the configuration.");
    process.exit(1);
}
