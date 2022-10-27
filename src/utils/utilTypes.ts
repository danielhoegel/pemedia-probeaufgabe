import { filter } from '../views/PhotoUploadView/filter';

export type ColorType =
    | 'gray-100'
    | 'gray-200'
    | 'gray-400'
    | 'gray-500'
    | 'gray-600'
    | 'gray-700'
    | 'white'
    | 'primary'
    | 'primary-dark'
    | 'accent'
    | 'secondary'
    | 'body'
    | 'background'
    | 'danger';

export type FilterType = keyof typeof filter;
