import {
  Box,
  Flex,
  useColorModeValue,
  Text,
  CloseButton,
  type BoxProps,
} from '@chakra-ui/react'
import type { IconType } from 'react-icons'

import NavItem from '../NavItem/NavItem'

export interface SidebarProps extends BoxProps {
  onClose: () => void
  items: {
    icon?: IconType
    label: React.ReactText
    to: string
  }[]
}

const SidebarContent = ({ onClose, items, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {items.map((link) => (
        <NavItem key={link.to} icon={link.icon} to={link.to}>
          {link.label}
        </NavItem>
      ))}
    </Box>
  )
}

export default SidebarContent
