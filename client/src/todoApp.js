import { useGetTodosQuery } from "./store/apis"

export const TodoApp= () => {
    const {data} = useGetTodosQuery();
}