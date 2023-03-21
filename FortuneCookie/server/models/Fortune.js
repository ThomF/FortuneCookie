import mongoose from "mongoose";

const Schema = mongoose.Schema


export const FortuneSchema = new Schema({
    fortune: { type: String, required: true }
},
    { timestamps: true, toJSON: { virtuals: true } })