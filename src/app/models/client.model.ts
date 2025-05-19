export interface Client {
  _id?: string;            // MongoDB's _id field
  name: string;           // Client's name
  phoneNumber: string;    // Client's phone number
  description: string;   // Client's description (optional)
  createdAt?: string;     // Timestamp (optional)
  updatedAt?: string;     // Timestamp (optional)
}
