import mongoose from "mongoose";

const branchschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    longitude: {
      type: Number,
    },
    latitude: {
      type: Number,
    },
  },
  address: { type: String },
  deliveryPartners: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DeliveryPartner",
    },
  ],
});

const Branch = mongoose.model("Branch", branchschema);

export default Branch;
