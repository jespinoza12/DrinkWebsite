import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb+srv://FrostyFeet:1234@cluster.tbjhmul.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: String,
    age: Number, 
    favorites: [],
})

const drinkSchema = new mongoose.Schema({
    name: String, 
    ingredients: String,
    containsAlc: Boolean,
    authorId:String, 
    authorUsername:String,
})

const User = new mongoose.model("User", userSchema)
const Drink = new mongoose.model("Drink", drinkSchema)


app.post("/addFavorite", (req, res)=>{
    const {sdrink, userId} = req.body
    User.findByIdAndUpdate({_id:userId}, {$push: {favorites: sdrink}}, (err, user) => {
        if (err){
            res.send("Oops somthing happened")
        }else {
            res.send("Successfully favorited")
        }
    })
})

app.post("/createDrink"), (req, res)=>{
    const {name, ingredients, containsAlc, authorId, authorUsername} = req.body
    Drink.findOne({name:name, authorId:authorId}, (err, drink) => {
        if (drink){
            "Oops you already have a drink named this try again"
        }else{
            const drink = new Drink({
                name,
                ingredients,
                containsAlc,
                authorId,
                authorUsername
            })
            drink.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Drink Has been added to MongoDb" })
                }
            })
        }
    })
}

app.post("/deleteDrink"), (req, res)=>{
    const {drinkId} = req.body
    Drink.findOneByIdAndDelete({_id:drinkId}, (err) => {
        if (err){
            console.log("Oops")
        }else{
            console.log("Drink Deleted")
        }
    })
}

//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const { name, email, password, age, username} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                username,
                age,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 



app.listen(9002,() => {
    console.log("BE started at port 9002")
})