import mongoose from "mongoose";

// Base user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ["Admin", "Customer", "Delivery Partner"],
    required: true,
  },
  isActivated: {
    type: Boolean,
    default: false,
  },
});

// Customer schema
const customerSchema = new mongoose.Schema({
  ...userSchema.obj,
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    default: "Customer",
    enum: ["Customer"],
  },
  liveLocation: {
    longitude: {
      type: Number,
    },
    latitude: {
      type: Number,
    },
  },
  address: { type: String },
});

// Delivery Partner schema
const DeliveryPartnerSchema = new mongoose.Schema({
  ...userSchema.obj,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    default: "DeliveryPartner",
    enum: ["DeliveryPartner"],
  },
  liveLocation: {
    longitude: {
      type: Number,
    },
    latitude: {
      type: Number,
    },
  },
  address: { type: String },
  branch: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Branch",
  },
});

// Admin schema

const AdminSchema = new mongoose.Schema({
  ...userSchema.obj,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "Admin",
    enum: ["Admin"],
  },
});

export const Customer = mongoose.model("Customer", customerSchema);
export const DeliveryPartner = mongoose.model(
  "DeliveryPartner",
  DeliveryPartnerSchema
);
export const Admin = mongoose.model("Admin", AdminSchema);
// export default userSchema;
