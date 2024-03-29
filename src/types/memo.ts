import { Character } from './character';

export type SortOrders = 'DESC' | 'ASC';
export type SortTypes = 'createdAt' | 'modifiedAt';

export interface AllMemos {
    memos: Memo[];
    totalPages: number;
    totalCount: number;
    page: number;
    size: number;
    has_next: boolean;
    has_previous: boolean;
    isFirstPage: boolean;
    isLastPage: boolean;
}

export interface Memo {
    id: number;
    character: Pick<Character, 'id' | 'name'> & { characterImage: string };
    content: string;
    specialties: {
        id: number;
        content: string;
        memoCnt: number;
    }[];
    createdAt: string;
    modified: boolean;
}
