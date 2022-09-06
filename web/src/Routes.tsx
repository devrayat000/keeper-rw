// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'

import AdminSidebarLayout from './layouts/AdminSidebarLayout/AdminSidebarLayout'
import TodosLayout from './layouts/TodosLayout/TodosLayout'
import HomePage from './pages/HomePage/HomePage'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="login" roles="USER">
        <Route path="/" page={HomePage} name="home" />
      </Private>
      <Route path="/admin/login" page={AdminLoginPage} name="adminLogin" />
      <Private unauthenticated="adminLogin" roles={['ADMIN', 'MODERATOR']}>
        <Set wrap={AdminSidebarLayout}>
          <Route path="/admin" page={AdminDashboardPage} name="adminDashboard" />
          <Set>
            <Set wrap={TodosLayout}>
              <Route path="/admin/todos" page={TodoTodosPage} name="todos" />
            </Set>
            <Route path="/admin/todos/new" page={TodoNewTodoPage} name="newTodo" />
            <Route path="/admin/todos/{id}/edit" page={TodoEditTodoPage} name="editTodo" />
            <Route path="/admin/todos/{id}" page={TodoTodoPage} name="todo" />
          </Set>
        </Set>
      </Private>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route notfound prerender page={NotFoundPage} />
    </Router>
  )
}

export default Routes
