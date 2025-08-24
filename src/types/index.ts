export interface WeddingMessage {
  id: string;
  name: string;
  content: string;
  createdAt: string;
  updatedAt: string; // Changed back to updatedAt to match API response
}

export interface WeddingInvitationData {
  data: WeddingMessage[];
}

export interface CommentFormData {
  name: string;
  message: string;
  attendance: 'yes' | 'no' | 'maybe';
}

export interface WeddingDetails {
  brideName: string;
  groomName: string;
  weddingDate: string;
  weddingTime: string;
  venue: string;
  address: string;
  description: string;
  coverImage: string;
}
