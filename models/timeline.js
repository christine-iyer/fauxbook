// ----------IMPORT DEPENDENCIES----------//
const mongoose = require('mongoose')

// ----------DEFINE MODEL----------//
// ----------pull schema and model from mongoose----------//
const { Schema, model } = mongoose

// ----------make user schema----------//
const timeLineSchema = new Schema({
  displayName: { type: String, required: true },
  post: { type: String, required: true },
  text: { type: String, required: true, unique: true },
  createdDate: { type: String, required: true },
  editedDate: { type: String },
  desplayPronouns: { type: Boolean },
  image: { type: String },
  city: { type: String },
  state: { type: String },
  gender: { type: String },
  raceEthnicity: [{ type: String }],
  workExperience: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Experience' }],
  education: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Education' }],
  jobsApplied: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
  jobsSaved: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }]
})

// ----------make user model----------//
const User = model('User', userSchema)

// ----------EXPORT MODEL----------//
module.exports = User