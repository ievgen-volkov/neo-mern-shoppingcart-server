const mongoose = require("mongoose");



const mongoDB = async () =>{
  const conn  =  await   mongoose.connect("mongodb+srv://neo_odessa86:7115640Gtre@cluster0.gxsrvu9.mongodb.net/?retryWrites=true&w=majority")
  await  console.log(`Mongo DB is running: ${conn.connection.host}`)
}

module.exports = mongoDB;
