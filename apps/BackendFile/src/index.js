const dotenv = require('dotenv')
const { connectDB } = require("./database/db")
const { app } = require("./app")
dotenv.config()

// App configration

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    })
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  })
require('./app')
