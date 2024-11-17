import { Center, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { LuHeartPulse } from "react-icons/lu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Grid
      gridTemplateColumns={{
        base: "1fr",
        md: "1fr 2fr",
        lg: "2fr 3fr",
        xl: "1fr 1fr",
      }}
    >
      <GridItem bg="orange.100">
        <Center h={"90vh"} hideBelow={"md"}>
          <LuHeartPulse
            size={150}
            strokeWidth={1}
            color="orange"
            strokeOpacity={0.8}
          />
        </Center>
      </GridItem>
      <GridItem>{children}</GridItem>
    </Grid>
  );
}
