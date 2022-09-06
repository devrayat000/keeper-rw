import EditTodoCell from 'src/components/Todo/EditTodoCell'

type TodoPageProps = {
  id: string
}

const EditTodoPage = ({ id }: TodoPageProps) => {
  return <EditTodoCell id={id} />
}

export default EditTodoPage
