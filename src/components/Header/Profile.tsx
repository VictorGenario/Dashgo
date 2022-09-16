import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
        <Box mr="4" textAlign="right">
          <Text>Victor da Mata</Text>
          <Text color="gray.300" fontSize="small">
            victorgenario@gmail.com 
          </Text>
        </Box>

        <Avatar size="md" name="Victor da Mata" ></Avatar>
    </Flex>
  )
}