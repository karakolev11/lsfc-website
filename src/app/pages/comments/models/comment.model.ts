export interface Comment {
    username: string;
    text: string;
    date: Date | string;
    rating?: number;
}