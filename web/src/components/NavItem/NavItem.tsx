import type { ReactText } from 'react'

import { Flex, Link, Icon, type FlexProps } from '@chakra-ui/react'
import type { IconType } from 'react-icons'

import { NavLink } from '@redwoodjs/router'

export interface NavItemProps extends FlexProps {
  icon?: IconType
  children: ReactText
  to: string
}

const NavItem = ({ icon, children, to, ...rest }: NavItemProps) => {
  return (
    <Link
      as={NavLink}
      to={to}
      activeClassName="active"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        sx={{
          '.active &': {
            bg: 'purple.400',
            color: 'white',
          },
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}

export default NavItem
