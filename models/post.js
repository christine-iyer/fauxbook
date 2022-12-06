/ ----------IMPORT DEPENDENCIES----------//
const mongoose = require('mongoose')

// ----------DEFINE MODEL----------//
// ----------pull schema and model from mongoose----------//
const { Schema, model } = mongoose

// ----------make Post schema----------//
const PostSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  preferredPronouns: { type: String },
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

// ----------make Post model----------//
const Post = model('Post', PostSchema)

// ----------EXPORT MODEL----------//
module.exports = Post