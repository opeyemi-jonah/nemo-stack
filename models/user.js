const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

})

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User',UserSchema);

/*
User
-Email - string
-password -string
-username-string
-profilePic - string
-posts - array of objects ref Post
-reviews - array of objects ref Review
*/
