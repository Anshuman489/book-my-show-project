const express = require("express");
const router = express.Router();
const Ticket = require("./models");
const cors = require("cors");

router.use(express.json());
router.use(cors());

router.post("/booking", async (req, res) => {
  try {
    const myData = await Ticket.create(req.body);
    res
      .status(201)
      .json({
        data: myData,
        message: "Ticket booked successfully"
      });
  } catch (error) {
    res.status(500).json({
      data: null,
      message: "Something went wrong ! please try again later",
    });
  }
});


router.get("/booking", async (req, res) => {
  try {
    const myData = await Ticket.find().sort({_id:-1}).limit(1);

    if (myData.length === 0) {
      return res.status(200).json({
        data: null,
        message: "No previous bookings found",
      });
    }
    res.status(200).json({
      data: myData[0],
      message: "Ticket fetched successfully",
    });
  }catch (error) {
    res.status(500).json({
      data: null,
      message: "Something went wrong ! please try again later",
    });
  }
})


module.exports = router;
// This code defines the routes for booking tickets and fetching previous bookings.