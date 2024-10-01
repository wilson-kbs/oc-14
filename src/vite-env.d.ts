/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PREFIX_PATH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
