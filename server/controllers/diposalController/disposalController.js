// functions that can be made
//disposal_collected_put, disposal_cancelled_put, disposal_fake_put
// model import
const Disposal_Request = require("../../models/diposal/disposalRequest");
// main functions
// function to mark disposal as collected
const disposal_collected_put = async (req, res) => {
  const disposalObj = req.body;
  const disposal = await Disposal_Request.findByIdAndUpdate(
    disposalObj._id,
    { isCollected: true },
    { new: true }
  );
  res.send({ message: "disposal collected successfully", disposal: disposal });
};
// function to mark disposal as cancelled
const disposal_cancelled_put = async (req, res) => {
  const disposalObj = req.body;
  const disposal = await Disposal_Request.findByIdAndUpdate(
    disposalObj._id,
    { isCancelled: true },
    { new: true }
  );
  console.log("====================================");
  console.log("in it");
  console.log("====================================");
  res.send({ message: "disposal collected successfully", disposal: disposal });
};
//function to mark disposal as fake
const disposal_fake_put = async (req, res) => {
  const disposalObj = req.body;
  const disposal = await Disposal_Request.findByIdAndUpdate(
    disposalObj._id,
    { isFake_request: true },
    { new: true }
  );
  res.send({ message: "disposal collected successfully", disposal: disposal });
};

module.exports = {
  disposal_collected_put,
  disposal_cancelled_put,
  disposal_fake_put,
};
