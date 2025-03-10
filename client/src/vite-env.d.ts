/// <reference types="vite/client" />

declare interface ImportMetaEnv {
  readonly BASE_URL: string;
  // Add other environment variables here if needed
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
} 