import { Flex, Heading, Stack, Textarea } from "@chakra-ui/react"

function App() {
  return (
    <Flex
      w={'100vw'}
      h={'100vh'}
      py={'20'}
      px={'36'}
      align={'center'}
      flexDir={'column'}
    >
      <Heading
        my={'5'}
      >
        Translate your Morse Code to text.
      </Heading>
      <Stack
        w={'full'}
        minH={'30vh'}
      >
        <Textarea
            w={'full'}
            h={'full'}
            fontSize={'2xl'}
        />
      </Stack>
    </Flex>
  )
}

export default App
