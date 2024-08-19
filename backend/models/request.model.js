import { Schema, model } from "mongoose";

const requestSchema = new Schema(
    {
       status:{
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending"
       },
       sender: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
       },
       receiver: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
       }
    },
    { timestamps: true }
)

const Request = model("Request", requestSchema);

export default Request;