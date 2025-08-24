import { WeddingInvitationData, CommentFormData, WeddingMessage } from '@/types';

export async function fetchWeddingMessages(): Promise<WeddingInvitationData> {
  try {
    const response = await fetch('/api/messages', {
      method: 'GET',
      headers: {
        'Accept-Language': 'id-ID',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching wedding messages:', error);
    throw error;
  }
}

export async function submitComment(commentData: CommentFormData): Promise<WeddingMessage> {
  try {
    const response = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': 'id-ID',
      },
      body: JSON.stringify({
        action: 'rsvp',
        data: {
          name: commentData.name,
          message: commentData.message,
          attendance: commentData.attendance,
        }
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to submit comment');
    }

    const result = await response.json();
    console.log('Comment submitted successfully:', result);
    
    // Return the new message data for immediate UI update
    return result.data as WeddingMessage;
    
  } catch (error) {
    console.error('Error submitting comment:', error);
    throw error;
  }
}
