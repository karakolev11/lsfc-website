export interface Comment {
    username: string;
    text: string;
    createdAt: Date | string;
    rating?: number;
}