import { FormControl, FormErrorMessage, FormLabel, Input as ChakraIput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { FieldError } from 'react-hook-form'
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
 } 

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> =({name, error, label, ...rest}, ref) => {
  return(
    <FormControl isInvalid={!!error}>
     {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>} 
  
     <ChakraIput 
       name={name} 
       id={name} 
       focusBorderColor='pink.500' 
       bgColor="gray.900"  
       variant="filled"
       _hover={{
         bgColor: 'gray.900',
       }}
       size="lg"
       ref={ref}
       {...rest}
      />

       {!!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
       )}

    </FormControl>
  );
}

export const Input = forwardRef(InputBase);