import { Comment } from "../models/comment.model";

export const CommentsMock: Comment[] = [
    {
      username: 'John Doe',
      createdAt: '2024-11-07T10:00:00Z',
      rating: 5,
      text: 'This product exceeded my expectations! Great quality and performance. Would buy again.'
    },
    {
      username: 'Jane Smith',
      createdAt: '2024-11-06T14:30:00Z',
      rating: 3,
      text: 'The product is good but the delivery was delayed. I hope they improve their shipping service.'
    },
    {
      username: 'Mike Johnson',
      createdAt: '2024-11-05T09:45:00Z',
      rating: 4,
      text: 'Overall, very satisfied. The item works as expected, but the packaging could be improved.'
    },
    {
      username: 'Emily Davis',
      createdAt: '2024-11-04T16:20:00Z',
      rating: 2,
      text: 'Not what I expected. It broke after only a few uses. Would not recommend.'
    },
    {
      username: 'Chris Lee',
      createdAt: '2024-11-03T11:10:00Z',
      rating: 5,
      text: 'Fantastic! I love the design and performance. Worth every penny.'
    },
    {
      username: 'Sarah Williams',
      createdAt: '2024-11-02T18:00:00Z',
      rating: 4,
      text: 'Great product but could use a few tweaks. Still happy with the purchase overall.'
    }
  ];
