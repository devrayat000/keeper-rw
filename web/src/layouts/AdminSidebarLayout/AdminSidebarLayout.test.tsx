import { render } from '@redwoodjs/testing/web'

import AdminSidebarLayout from './AdminSidebarLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AdminSidebarLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminSidebarLayout />)
    }).not.toThrow()
  })
})
