import { Textarea, TextareaProps } from "@chakra-ui/react"

export const TextInput: React.FC<TextareaProps> = ({value, ...rest}) => {
    return (
        <Textarea
        w={'full'} maxW={'4xl'} minH={'20%'} fontSize={'2xl'}
        resize={'none'}
        value={value}
        {...rest}
      />
    )
}