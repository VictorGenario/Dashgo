import { Box, Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLinks } from "./NavLinks";
import { NavSection } from "./NavSection";

export function Sidebar(){
  return(
    <Box as="aside" w="64" mr="8" >
      <Stack spacing="12" align="flex-start">
        <NavSection title="Geral">
          <NavLinks icon={RiDashboardLine}>Dashboard</NavLinks>
          <NavLinks icon={RiContactsLine}>Usuários</NavLinks>
        </NavSection>
        <NavSection title="Automação">
          <NavLinks icon={RiInputMethodLine}>Formularios</NavLinks>
          <NavLinks icon={RiGitMergeLine}>Automação</NavLinks>
        </NavSection>
      </Stack>
    </Box>
  );
}