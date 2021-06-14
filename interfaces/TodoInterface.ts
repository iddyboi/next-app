export interface TodoInterface {
  id?: string;
  todo: string;
  completed: boolean;
}

export interface Todos {
  todos: TodoInterface[];
}
