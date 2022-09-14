import {
  Alert,
  AlertIcon,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Heading,
  Stack,
  StackDivider,
  Input,
  Text,
} from '@chakra-ui/react';

export default function Index() {
  return (
    <Box maxWidth="container.md" mx="auto" py="10">
      <h1>Welcome to Remix</h1>
      <Input defaultValue="some text..." />
      <Stack gap="3" divider={<StackDivider />}>
        <div>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </div>
        <div>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </div>
      </Stack>
    </Box>
  );
}
