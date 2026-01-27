import mongoose, { Schema, Document } from 'mongoose';

export interface ISiteBanner extends Document {
  type: 'marquee' | 'hero-banner';
  title: string;
  icon: string;
  desktopImage?: string;
  mobileImage?: string;
  link?: string;
  isActive: boolean;
  order?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const SiteBannerSchema = new Schema<ISiteBanner>(
  {
    type: {
      type: String,
      enum: ['marquee', 'hero-banner'],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    desktopImage: {
      type: String,
      default: null,
    },
    mobileImage: {
      type: String,
      default: null,
    },
    link: {
      type: String,
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.models.SiteBanner ||
  mongoose.model<ISiteBanner>('SiteBanner', SiteBannerSchema);
