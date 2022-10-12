import { Button, Flex, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from '../components/Form';

type SingInFormData = {
  email: string;
  password: string;
}

export default function Home() {
  const { register, handleSubmit, formState } = useForm();

  const  handleSignIn: SubmitHandler<SingInFormData> = async (values) =>{
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
  }

  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center">
      
      <Flex as="form" 
        w="100%" 
        maxWidth={360} 
        bg="gray.800" 
        p="8" 
        borderRadius={8} 
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
        >
        
      <Stack spacing="4">
        <Input 
          name="email"
          type="email" 
          label="E-mail"
          {...register('email')} 
        />

        <Input 
        name="passaword" 
        type="password" 
        label="Senha"
        {...register('passaword')} 
        />

      </Stack>

      
        <Button 
          type='submit' 
          mt="6" 
          colorScheme="pink"
          isLoading={formState.isSubmitting}
          >
            Entrar
        </Button>
      </Flex>
    </Flex>

  )
}
