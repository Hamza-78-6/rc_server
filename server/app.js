// njs framework
const express = require("express");
// moongose on top of mongodb
const mongoose = require("mongoose");
// routers import
const userRoutes = require("./routes/user");
const vendorRoutes = require("./routes/vendor");
const pickupTeamRoutes = require("./routes/pickupTeam");
const disposalRoutes = require("./routes/disposalRequest");
const learnRoutes = require("./routes/learn");
const cors = require("cors");
// creating instance of express
const app = express();
// middlewares
app.use(express.json());
app.use(cors());
// localhost port where server will be hosted
const port = 8080;
// database url
const db_url = "mongodb://localhost:27017/rk_db";
// database connection
mongoose
  .connect(db_url)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("error occured while connecting to database");
    console.log("Error:  ", err);
  });

// using user routes
app.use("/user", userRoutes);
app.use("/vendor", vendorRoutes);
app.use("/pickupTeam", pickupTeamRoutes);
app.use("/diposal", disposalRoutes);
app.use("/resource", learnRoutes);
//for starting server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
