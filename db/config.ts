import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb+srv://poseidon:Q401n38U6V5F2gsu@db-mongodb-prd-17966-c6c60132.mongo.ondigitalocean.com/afrodita?tls=true&authSource=admin&replicaSet=db-mongodb-prd-17966');
        console.log('Database online')
    } catch (error:any) {
        throw new Error(error.toString());
    }
}