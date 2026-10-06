import { model, models, Schema } from "mongoose";

const profileSchema = new Schema(
  {
    article: {
      type: String,
      required: true,
    },
    explanations: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    firm: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    SEO: {
      type: { title: String, description: String, phoneCall: Number },
      default: {},
    },
    constructionDate: {
      type: Date,
      required: true,
    },
    amenities: {
      type: [{ text: String }],
      default: [],
    },
    rules: {
      type: [{ text: String }],
      default: [],
    },
    published: {
      type: Boolean,
      default: false,
    },
    email: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "Client",
    },
  },
  { timestamps: true }
);

const Profile = models?.Profile || model("Profile", profileSchema);

export default Profile;
