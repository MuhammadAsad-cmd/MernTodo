import mongoose from "mongoose";

// Declare the Schema of the Mongo model
var TodoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },
    timestamp: {
        type: String,
        default: Date.now(),
    }
});

// Export the model
export default mongoose.model("Todo", TodoSchema);
