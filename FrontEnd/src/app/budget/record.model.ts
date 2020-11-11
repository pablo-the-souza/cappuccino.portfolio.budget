import { Category } from './category.model';

export class Record {
    id: number; 
    date: Date;
    name: string;
    value: number;
    categoryId: number;
    type: string;
    category?: Category;
}

