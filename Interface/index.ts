export interface ITodo {
  id: string;
  title: string;
  body?: string | null;
  completed: boolean;
  createAt: Date;
}
