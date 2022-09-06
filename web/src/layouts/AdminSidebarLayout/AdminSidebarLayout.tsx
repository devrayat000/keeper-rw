import {
  Box,
  Drawer,
  DrawerContent,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'

import { routes } from '@redwoodjs/router'

import MobileNav from 'src/components/MobileNav/MobileNav'
import SidebarContent from 'src/components/SidebarContent/SidebarContent'

type AdminSidebarLayoutProps = {
  children?: React.ReactNode
}

const sidebarItems = () => [
  {
    label: 'Todo',
    to: routes.todos(),
  },
]

const AdminSidebarLayout = ({ children }: AdminSidebarLayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose()}
        display={{ base: 'none', md: 'block' }}
        items={sidebarItems()}
      />
      <Drawer
        // eslint-disable-next-line
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} items={sidebarItems()} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  )
}

export default AdminSidebarLayout
