interface ViteTypeOptions {
  // strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
  readonly CLIENT_BASE_URL: string
  readonly CLIENT_SERVER_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
