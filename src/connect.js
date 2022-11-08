const mongoose = require ('mongoose');

const db = "mongodb+srv://sarveshwajs:sarvesh12345@cluster0.lrp65u6.mongodb.net/304CEM?retryWrites=true&w=majority";

mongoose.connect(db).then(()=>{
    console.log("Connected to database");
}).catch(()=>{
    console.log("Error Connecting to database");
})

const movieSchema = new mongoose.Schema({
    movieTitle: {type: String},
    movieYear: {type: String},
    movieDirector: {type: String}
});

const Film = mongoose.model('304CEM',movieSchema);

module.exports = Film;