import { Schema } from "mongoose";

export const workSchema = new Schema<IWork>({
  company: { type: String },
  href: { type: String },
  badges: [String],
  location: { type: String },
  title: { type: String },
  logoUrl: { type: String },
  start: { type: String },
  end: { type: String },
  description: { type: String },
});