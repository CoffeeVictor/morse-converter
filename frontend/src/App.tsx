import { Button, Flex, Heading, useToast } from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import { TextInput } from "./components/TextInput";
import { morseConverter } from "./services/converter";

function App() {

  const [plainText, setPlainText] = useState('')
  const [morseText, setMorseText] = useState('')
  const [isValidMorse, setIsValidMorse] = useState(false)
  const toast = useToast()

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    setMorseText(text)
  }

  useEffect(() => {
    const morseValidCharacters = [' ', '.', '-']
    const isValid = morseText.split('').every(char => morseValidCharacters.includes(char))
    setIsValidMorse(isValid)
  }, [morseText])

  const submitMorse = async () => {
    try {
      const plainText = await morseConverter(morseText)
      setPlainText(plainText)
    } catch(e) {
      console.error(e)
      toast({
        title: 'Invalid Morse Code',
        description: 'Type a valid Morse Code before you submit.',
        duration: 5000,
        position: 'top-right',
        status: 'error',
        isClosable: true
      })
    }
  }

  return (
    <Flex
      w={'100vw'} h={'100vh'} minH={'xl'} py={'14'} px={['5', '36']}
      align={'center'} flexDir={'column'} justifyContent={'space-between'}
      as={'form'}
      onSubmit={e => {
        e.preventDefault()
        console.log('Teste')
      }}
    >
      <Heading h={'10%'} textAlign={'center'} >
        Translate your Morse Code to text.
      </Heading>
      <TextInput
        mt={'10'}
        value={morseText}
        placeholder={'Type your Morse Code here. Only ".", "-" and " ".'}
        onChange={handleInputChange}
        isInvalid={!isValidMorse}
      />
      <Button
        colorScheme={'blue'}
        size={'lg'}
        onClick={submitMorse}
      >
        Convert
      </Button>
      <TextInput 
        mb={'10'}
        value={plainText}
        placeholder={'The plain text will show up here.'}
        isDisabled={true}
      />
    </Flex>
  )
}

export default App
