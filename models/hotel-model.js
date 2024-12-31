import mongoose, { Schema } from "mongoose";

const hotelSchema = new Schema({
  hotelId: {
    type: String,
    required: false,
    unique: false
  },
  name: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: false
  },
  price_per_night: {
    type: Number,
    required: false
  },
  available_rooms: {
    type: Number,
    required: false
  },
  guest_capacity: {
    type: Number,
    required: false
  },
  bedrooms: {
    type: Number,
    required: false
  },
  beds: {
    type: Number,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  amenities: {
    type: [String], // Array of strings
    required: false
  },
  images: {
    type: [String], // Array of image URLs
    required: false
  }
});

export const hotelModel = mongoose.models.hotels || mongoose.model("hotels", hotelSchema);
