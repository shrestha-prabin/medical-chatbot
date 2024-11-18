import { Message } from "@/types";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import React from "react";

type MessageQnAProps = {
  data: Message;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

const MessageQnA = React.forwardRef<HTMLDivElement, MessageQnAProps>(
  ({ data, ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        <Box>
          <Heading my={4} fontWeight={"bold"}>
            {data.user_prompt}
          </Heading>

          <Text bg="white" rounded={"md"} py={4} px={6}>
            {data.model_response ? data.model_response : <Spinner />}
          </Text>
        </Box>
      </div>
    );
  }
);

MessageQnA.displayName = "MessageQnA";

export { MessageQnA };
