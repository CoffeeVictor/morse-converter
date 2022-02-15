/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly SERVER_URL: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
