import { Icon, Link, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinksProps {
  icon: ElementType;
  children: string;
}

export function NavLinks({icon, children, ...rest}: NavLinksProps ){
  return(
    <Link display="flex" alignItems="center" {...rest}>
    <Icon as={icon} fontSize="20"/>
    <Text ml="4" fontWeight="medium">{children}</Text>
  </Link>
  )
}