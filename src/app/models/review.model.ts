export interface Review {
  _id?: string;              // MongoDB's _id field
  name: string;             // Reviewer's name
  numberOfStars: number;    // Number of stars (1-5)
  description: string;      // Review description
  createdAt?: string;       // Timestamp for when review was created
  updatedAt?: string;       // Timestamp for when review was last updated
}