export interface GalleryItem {
    title: string;
    description: string;
    url: string;
    likes: number;
    isNew: boolean;
    date: Date | string;
}