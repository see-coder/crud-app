
import mongoose from "mongoose";


mongoose.set('strictQuery', true);


const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@crud-app.htsyyij.mongodb.net/?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the databse ', error);
    }
};

export default Connection;