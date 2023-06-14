/// <reference types="vite/client" />
declare interface ImportMetaEnv {
  readonly VITE_API_BASEURL:string
  readonly VITE_app:number
  readonly VITE_AUTOLOAD_ROUTER:boolean
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv
}
