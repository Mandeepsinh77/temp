const express = require("express")
const connectToMongo = require("./db.js")
connectToMongo();
const auth = require("./routes/auth.js");
const category_crud = require("./routes/category_crud.js");
const add = require("./routes/add.js")
const cors = require("cors")


const app = express();
const port = 4000;

//to get data from the client we need to make a cors beetween two
app.use(cors())

//to send some information to server
app.use(express.json());
 
//Available Routes
app.use("/auth", auth);
app.use("/category_crud", category_crud);
app.use("/add", add);

app.listen(port, (err) => {
    console.log(`Server Running on port ${port}`)
})