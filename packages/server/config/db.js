import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://admin:balaji18@devforum.2iyylz0.mongodb.net/devforum?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(
      `MongoDB connected: ${conn.connection.host}`.yellow.bold.underline
    );
  } catch (error) {
    console.log(`MognoDB Error: , ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;