import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
  showProfileData?: boolean; 
}

export function Profile({showProfileData= true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
       <Box mr="4" textAlign="right">
        <Text>Victor da Mata</Text>
        <Text color="gray.300" fontSize="small">
          victorgenario@gmail.com 
        </Text>
       </Box>
      )}

        <Avatar size="md" name="Victor da Mata" ></Avatar>
    </Flex>
  )
}