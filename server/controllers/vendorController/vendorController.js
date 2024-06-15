// functions that can be made
// vendor_login_post, vendor_signup_post, view_disposal_requests_post, update_disposal_requests_get, update_price_per_kg_put, add_team_member_post, assign_team_member_post, remove_team_member_delete
// vendor model
const Vendor = require("../../models/vendor/vendor");
const Disposal_Request = require("../../models/diposal/disposalRequest");
// function to check either vendor exists or not
const isVendorExists = async (name) => {
  let vendorList = await Vendor.find({ name: name });
  if (vendorList.length <= 0) {
    console.log("vendor with name: ", name, " does not exists");
    return false;
  } else {
    console.log("vendor already exists");
    return true;
  }
};
//function for creating new vendor
const addVendorToDb = async (vendorObj) => {
  const newVendor = await Vendor.create(vendorObj)
    .then((res) => {
      console.log("vendor created successfully");
    })
    .catch((err) => {
      console.log("error occured while creating new vendor: ", err);
    });
};
// vendor login function
const vendor_login_post = async (req, res) => {
  const tempVendor = req.body;
  let isVendorExist = await isVendorExists(tempVendor.name);
  if (!isVendorExist) {
    console.log(
      "while login vendor request: ",
      tempVendor.name,
      " vendor does not exists at all"
    );
    res.send({ message: "vendor does not exists", status: false });
  } else {
    const vendorobj = await Vendor.find({
      name: tempVendor.name,
      password: tempVendor.password,
    });
    if (vendorobj.length <= 0) {
      res.send({ message: "incorrect password", status: false });
    } else {
      vendorobj[0].password = "**********";
      res.send({
        message: "login success",
        status: true,
        vendor: vendorobj[0],
      });
    }
  }
};
// vendor signup function
const vendor_signup_post = async (req, res) => {
  let tempVendor = req.body;
  let isVendorExist = await isVendorExists(tempVendor.name);
  if (!isVendorExist) {
    addVendorToDb(tempVendor);
    res.send({ is_account_created: true, vendor: tempVendor });
  } else {
    res.send({ message: "vendor already exists", is_account_created: false });
  }
};
// get vendor object
const get_vendor_obj = async (req, res) => {
  const { name } = req.params;
  let vendorObj = await Vendor.find({ name: name });
  vendorObj = vendorObj[0];
  res.send({ user: vendorObj });
};
// view disposal requests
const view_disposal_requests_post = async (req, res) => {
  const temp = req.body;
  const vendorId = temp._id;
  const vendorsObj = await Disposal_Request.find({
    request_to_vendor: vendorId,
  });
  res.send({ vendor: vendorsObj });
  console.log(temp);
};
// update disposal requests
const update_disposal_requests_get = async (req, res) => {};
// function to add diposal request
const add_disposal_request_put = async (req, res) => {
  const temp = req.body;
  const vendorObj = await Vendor.findOneAndUpdate(
    { name: temp.name },
    { $push: { requested_disposal: temp.disposalId } },
    { new: true }
  );
  res.send({ message: "request added successfully", vendorObj: vendorObj });
};
// function to update price per kg
const update_price_per_kg_put = async (req, res) => {
  const temp = req.body;
  const vendorObj = await Vendor.findOneAndUpdate(
    { name: temp.name },
    { price_per_kg: temp.price_per_kg }
  )
    .then((r) => {
      console.log(r);
      res.send({ message: "price updated successfully", vendorObj: vendorObj });
    })
    .catch((e) => {
      res.send({ error: e });
    });
};
const accpet_request_put = async (req, res) => {
  const temp = req.body.id;
  const requestObj = await Disposal_Request.findOneAndUpdate(
    { _id: temp },
    { isAccepted: true }
  ).then((re) => {
    res.send({ message: "request accepted successfully", status: true });
  });
};
module.exports = {
  vendor_login_post,
  vendor_signup_post,
  view_disposal_requests_post,
  // update_disposal_requests_get,
  update_price_per_kg_put,
  add_disposal_request_put,
  accpet_request_put,
};
