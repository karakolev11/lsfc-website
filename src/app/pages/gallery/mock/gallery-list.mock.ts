import { GalleryItem } from "../models/gallery-item.model";

export const GalletyListMock: GalleryItem[] = [
    {
      title: 'Sunset Bliss',
      description: 'A beautiful sunset over the ocean with vibrant orange and pink hues.',
      url: 'https://via.placeholder.com/300x200?text=Sunset',
      likes: 120,
      isNew: true,
      date: new Date('2024-11-01'),
    },
    {
      title: 'Mountain Majesty',
      description: 'Snow-capped mountains under a clear blue sky.',
      url: 'https://via.placeholder.com/300x200?text=Mountain',
      likes: 85,
      isNew: false,
      date: new Date('2024-10-15'),
    },
    {
      title: 'City Lights',
      description: 'A bustling cityscape at night with glowing lights.',
      url: 'https://via.placeholder.com/300x200?text=City',
      likes: 200,
      isNew: true,
      date: new Date('2024-11-10'),
    },
    {
      title: 'Forest Pathway',
      description: 'A serene path through a dense forest, lined with tall trees.',
      url: 'https://via.placeholder.com/300x200?text=Forest',
      likes: 65,
      isNew: false,
      date: new Date('2024-09-30'),
    },
    {
      title: 'Desert Mirage',
      description: 'A stunning desert landscape with golden sands and a mirage in the distance.',
      url: 'https://via.placeholder.com/300x200?text=Desert',
      likes: 45,
      isNew: false,
      date: new Date('2024-08-20'),
    },
    {
      title: 'Ocean Wave',
      description: 'A powerful ocean wave crashing on the shore.',
      url: 'https://via.placeholder.com/300x200?text=Wave',
      likes: 150,
      isNew: true,
      date: new Date('2024-11-18'),
    },
  ];