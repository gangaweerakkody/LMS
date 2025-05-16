const mongoose = require("mongoose");
const PORT = 5000;

const User = mongoose.model("User", new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    }
}));

app.get("/add-test-user", async (req, res) => {
  const user = new User({
    name: "Test User",
    email: "test@example.com"
  });
  await user.save();
  res.send("User added!");
});


app.listen()
