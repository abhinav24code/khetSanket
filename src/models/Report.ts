
import mongoose, { Schema } from "mongoose";

const ReportSchema = new Schema(
  {
    farmerId: {
      type: String,
      default: "demo-farmer",
      index: true,
    },

    farmerName: {
      type: String,
      required: true,
      trim: true,
    },

    cropType: {
      type: String,
      required: true,
      trim: true,
    },

    symptoms: {
      type: [String],
      default: [],
    },

    severity: {
      type: String,
      enum: ["mild", "moderate", "severe"],
      default: "moderate",
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    transcript: {
      type: String,
      default: "",
    },

    aiSummary: {
      type: String,
      default: "",
    },

    imageUrl: {
      type: String,
      default: "",
    },

    source: {
      type: String,
      enum: ["manual", "voice", "photo"],
      default: "manual",
    },

    location: {
      village: {
        type: String,
        required: true,
        trim: true,
      },
      district: {
        type: String,
        default: "",
        trim: true,
      },
      state: {
        type: String,
        default: "",
        trim: true,
      },
      latitude: {
        type: Number,
        min: -90,
        max: 90,
      },
      longitude: {
        type: Number,
        min: -180,
        max: 180,
      },
    },

    status: {
      type: String,
      enum: [
        "pending_review",
        "under_review",
        "action_taken",
        "follow_up_required",
        "resolved",
        "escalated",
      ],
      default: "pending_review",
      index: true,
    },

    expertNotes: {
      type: String,
      default: "",
    },

    isDemo: {
      type: Boolean,
      default: false,
    },

    reportedAt: {
      type: Date,
      default: Date.now,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

const Report =
  mongoose.models.Report ||
  mongoose.model("Report", ReportSchema);

export default Report;
