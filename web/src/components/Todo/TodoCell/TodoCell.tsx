import type { FindTodoById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Todo from 'src/components/Todo/Todo'

export const QUERY = gql`
  query FindTodoById($id: String!) {
    todo: todo(id: $id) {
      id
      title
      type
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Todo not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ todo }: CellSuccessProps<FindTodoById>) => {
  return <Todo todo={todo} />
}
