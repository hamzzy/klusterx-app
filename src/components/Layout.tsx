import { Box, VStack } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import Header  from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FunctionComponent<LayoutProps> = ({
  children,
}: LayoutProps) => {
  return (
    <Box
    >
       <Header />
        {children}
    </Box>
  );
};