export const schema = gql`
  type Todo {
    id: String!
    title: String!
    type: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    todos: [Todo!]! @requireAuth
    todo(id: String!): Todo @requireAuth
  }

  input CreateTodoInput {
    title: String!
    type: String!
  }

  input UpdateTodoInput {
    title: String
    type: String
  }

  type Mutation {
    createTodo(input: CreateTodoInput!): Todo! @requireAuth
    updateTodo(id: String!, input: UpdateTodoInput!): Todo! @requireAuth
    deleteTodo(id: String!): Todo! @requireAuth
  }
`
