import TodoCell from 'src/components/Todo/TodoCell'

type TodoPageProps = {
  id: string
}

const TodoPage = ({ id }: TodoPageProps) => {
  return <TodoCell id={id} />
}

export default TodoPage
