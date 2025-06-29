import { Schema, model } from 'mongoose'

const reportModel = new Schema({
    author: String,
    ubication: String,
    updatedAt: Date,
})

const Report = model('Report', reportModel)
export default Report