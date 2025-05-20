export interface UpcomingProject {
  id?: string;          // MongoDB _id as string (optional)
  title: string;        // required
  description: string;  // required
  image: string;        // required, probably an image URL
  createdAt?: Date;     // from timestamps: true
  updatedAt?: Date;     // from timestamps: true
}
