const mongoose = require("mongoose");
const Recycle_Point = require("../../models/recyclePoints/recyclePoint");

// functions that can be made:
// add_recycle_point_post, recycle_point_get
// main functions
const add_recycle_point_post = async (req, res) => {
  let temp = req.body;
  const newRecyclePoint = await Recycle_Point.create(temp)
    .then((r) => {
      res.send({ rpoint: newRecyclePoint, response: r });
      console.log("recycle point created successfully: ", r);
    })
    .catch((e) => {
      console.log("error: ", e);
    });
};
