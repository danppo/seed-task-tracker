import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
  recordId: { type: String },
});

const User = mongoose.model("User", userSchema);
export default User;

const userRecordSchema = new mongoose.Schema({
  user: { type: String, unique: true },
  displayName: { type: String },
  settings: { type: Object },
  seedCollection: { type: Array },
  growths: { type: Array }
});

export const Record = mongoose.model("Record", userRecordSchema);
