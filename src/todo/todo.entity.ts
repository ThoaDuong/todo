export default interface TodoEntity{
    id: number;
    title: string;
    description: string;
    status: 'new' | 'done';
    user_id: number;
}