import { client } from "./client";

export const morseConverter = async (inputText: string) => {
    const response = await client.post('/', {
        message: inputText
    })

    return response.data.plain_text_message;
}