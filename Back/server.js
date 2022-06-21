const express = require("express");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});
app.use(cors());
// database
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();


// route test
app.get("/", (req, res) => {
  res.json({ message: "Test" });
});

// routes
require("../Back/app/routes/auth.routes")(app);
require("../Back/app/routes/user.routes")(app);
require("../Back/app/routes/compte.routes")(app);
require("./app/routes/depense.routes")(app);
require("./app/routes/solde.routes")(app);



const PORT = process.env.PORT || 5001;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });


  Role.create({
    id: 2,
    name: "admin",
  });
}
