// CONNECT TO DATABASE

const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI_TEST || process.env.MONGODB_URI)

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error){
    console.log(error);
    process.exit(1)
  }
}

module.exports = connectDB