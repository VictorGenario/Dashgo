import { Button, Flex, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../components/Form';

type SingInFormData = {
  email: string;
  password: string;
}

const singInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail Obrigatorio").email("E-mail Invalido"),
  password: yup.string().required("Senha Obrigatoria"),  
})

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(singInFormSchema)
  });

  const { errors } = formState

  const  handleSignIn: SubmitHandler<SingInFormData> = async (values) =>{
    await new Promise(resolve => setTimeout(resolve, 500))

    console.log(values)
  }

  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
    >
      
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
          error={errors.email}
          {...register('email') } 
        />

        <Input 
        name="passaword" 
        type="password" 
        label="Senha"
        error={errors.password}
        {...register('password')} 
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
