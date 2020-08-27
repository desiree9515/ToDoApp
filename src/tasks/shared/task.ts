import { Document } from 'mongoose';
export class Task extends Document {
    id: number;
    description: string;
    completed: boolean;
}
