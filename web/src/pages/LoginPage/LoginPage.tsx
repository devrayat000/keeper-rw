import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  FormErrorMessage,
  Link,
} from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  // Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link as RLink, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const emailRef = useRef<HTMLInputElement>()
  useEffect(() => {
    emailRef.current.focus()
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
      <MetaTags title="Login" />

      <main>
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
          <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={4} w={'full'} maxW={'md'}>
              <Heading fontSize={'2xl'}>Sign in to your account</Heading>
              <Form onSubmit={onSubmit}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    ref={emailRef}
                    type="email"
                    name="username"
                    as={TextField}
                  />
                  <FormErrorMessage as={FieldError} name="username" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    as={PasswordField}
                    autoComplete="current-password"
                  />
                  <FormErrorMessage as={FieldError} name="password" />
                </FormControl>

                <Stack spacing={6} mt="4">
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link
                      as={RLink}
                      to={routes.forgotPassword()}
                      color={'blue.500'}
                    >
                      Forgot Password?
                    </Link>
                    {/* <Link color={'blue.500'}>Forgot password?</Link> */}
                  </Stack>
                  <Button
                    colorScheme={'blue'}
                    variant={'solid'}
                    as={Submit}
                    type="submit"
                  >
                    Sign in
                  </Button>
                </Stack>
              </Form>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
              alt={'Login Image'}
              objectFit={'cover'}
              src={
                'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
              }
            />
          </Flex>
        </Stack>
        {/* <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Login</h2>
            </header>

            <div className="rw-segment-main">
              <div className="rw-form-wrapper">
                <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <Label
                    name="username"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Email
                  </Label>
                  <TextField
                    name="username"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    ref={emailRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'Username is required',
                      },
                    }}
                  />

                  <FieldError name="email" className="rw-field-error" />

                  <Label
                    name="password"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Password
                  </Label>
                  <PasswordField
                    name="password"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                    }}
                  />

                  <div className="rw-forgot-link">
                    <Link
                      to={routes.forgotPassword()}
                      className="rw-forgot-link"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <FieldError name="password" className="rw-field-error" />

                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">Login</Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="rw-login-link">
            <span>Don&apos;t have an account?</span>{' '}
            <Link to={routes.signup()} className="rw-link">
              Sign up!
            </Link>
          </div>
        </div> */}
      </main>
    </>
  )
}

export default LoginPage
