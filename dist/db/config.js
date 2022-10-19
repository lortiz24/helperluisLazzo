"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dbConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //await mongoose.connect('mongodb+srv://poseidon:Q401n38U6V5F2gsu@db-mongodb-prd-17966-c6c60132.mongo.ondigitalocean.com/afrodita?tls=true&authSource=admin&replicaSet=db-mongodb-prd-17966');
        yield mongoose_1.default.connect('mongodb+srv://donaciones:VrR4IJd7bPGGURhY@cluster0.pmj9moh.mongodb.net/?retryWrites=true&w=majority');
        console.log('Database online');
    }
    catch (error) {
        throw new Error(error.toString());
    }
});
exports.dbConnection = dbConnection;
//# sourceMappingURL=config.js.map