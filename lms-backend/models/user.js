const mongoose = require("mongoose");


const userSchems = new mongoose.Schema({
    name : String,
    email:{type: String, required: true, unique : true},
    password : String,
    role : {type: String, enum: ['admin', 'student', 'teacher'], default: 'student'},

});

module.exports = mongoose.model("User", userSchems);


const User = require("./models/User");

app.post("/api/register", async (req, res) => {
  const newUser = new User({ name: "Isuru", email: "isuru@gmail.com", password: "hashed_pw" });
  await newUser.save(); // MongoDB will create "users" collection if not exists
});
