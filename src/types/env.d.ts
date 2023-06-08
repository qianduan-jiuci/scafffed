/// <reference types="vite/client" />
declare interface ImportMetaEnv {
  readonly VITE_API_BASEURL:string
  readonly VITE_app:number
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv
}