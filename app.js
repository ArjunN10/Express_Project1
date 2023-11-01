// const  express = require("express")
// const  app = express()
// const  port = 8000

// const userRouter = require ("./routes/User")
// app.use("/users",userRouter)

// app.listen(port, () => {
//     console.log("server runnig on port" + port);
// })




const express=require("express")
const app=express()
const port=8000

const userRouter=require("./routes/User")
app.use("/users",userRouter)


app.listen(port,()=>{
    console.log(`The server is Listening to Port:${port}`);
})