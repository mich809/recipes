const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    title:{
        type: String,
        require: true
    },
    text:{
        type: String,
        require: true
    },
    
},{
    timestamps: true
})

module.exports = mongoose.model('Recipe',recipeSchema)