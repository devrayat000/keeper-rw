import { useRef, useEffect } from 'react'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
} from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import { Form, useForm } from '@redwoodjs/forms'
import { Link as RLink, routes, navigate } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const AdminLoginPage = () => {
  const formMethods = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  })
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.adminDashboard())
    }
  }, [isAuthenticated])

  const emailRef = useRef<HTMLInputElement>()
  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await logIn({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="AdminLogin" description="AdminLogin page" />

      <Flex
        as={'main'}
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

        <Stack spacing={8} mx={'auto'} minW={'md'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Welcome back! ✌️</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link>{' '}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
          >
            <Form formMethods={formMethods} onSubmit={onSubmit}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    ref={emailRef}
                    autoComplete="current-password"
                    {...formMethods.register('username')}
                  />
                  {formMethods.formState.errors.username && (
                    <FormErrorMessage as="p">
                      {formMethods.formState.errors.username.message}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    {...formMethods.register('password')}
                  />
                  {formMethods.formState.errors.password && (
                    <FormErrorMessage as="p">
                      {formMethods.formState.errors.password.message}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link color={'blue.400'} as={RLink} to={routes.home()}>
                      Forgot password?
                    </Link>
                  </Stack>
                  <Button
                    bg={'blue.400'}
                    color={'white'}
                    type="submit"
                    _hover={{
                      bg: 'blue.500',
                    }}
                  >
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </Form>
          </Box>
        </Stack>
      </Flex>
    </>
  )
}

export default AdminLoginPage
