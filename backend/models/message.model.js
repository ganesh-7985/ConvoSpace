import { Schema, model } from "mongoose";

const messageSchema = new Schema({
    sender:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    chat: {
        type: Schema.Types.ObjectId,
        ref: "Chat"
    },
    content: {
        type: String,
    },
    attechments:[
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }

    ],
    readBy: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
}, {timestamps: true }
    )

const Message = model("Message", messageSchema);

export default Message;