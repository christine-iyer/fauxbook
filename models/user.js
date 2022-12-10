// ----------IMPORT DEPENDENCIES----------//
const mongoose = require('mongoose')

// ----------DEFINE MODEL----------//
// ----------pull schema and model from mongoose----------//
const { Schema, model } = mongoose

// ----------make user schema----------//
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true},
  userPassword: { type: String, required: true },
  preferredPronouns: { type: String },
  desplayPronouns: { type: Boolean },
  image: { type: String },
  city: { type: String },
  state: { type: String },
  gender: { type: String },
  accountType: { type: Boolean },
  raceEthnicity: [{ type: String }],
  interests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Interests' }],
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Friends' }],
  myPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: '' }],
  sentFriendsRequest: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Friends' }],
  receivedFriendRequests[{ type: mongoose.Schema.Types.ObjectId, ref: 'Friends' }], 
  blockedFriends:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Friends' }],
  createdDate: { type: Date },
  birthday: { type: Date },
  employer: { type: String },
  highSchool: { type: String },
  college:{ type: String },
  hometown: { type: String },
  relationshipStatus: { type: String },
  friendsPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Friendsposts' }]
})

// ----------make user model----------//
const User = model('User', userSchema)

// ----------EXPORT MODEL----------//
module.exports = User