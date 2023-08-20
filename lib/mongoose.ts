import mongooose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongooose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log("MONGODB_URL not found");
    if(isConnected) return console.log("Already connected to MongoDB");

    try{
        await mongooose.connect(process.env.MONGODB_URL);

        isConnected = true;

        console.log("Connected to MongoDB");
        
    } catch(error){
        console.log(error);
    }

}