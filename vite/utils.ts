import _ from "lodash";

export const parseEnv = (env: Record<string, any>): ImportMetaEnv => {
  const cloneEnv:any = _.cloneDeep(env)
  Object.entries(cloneEnv).forEach(([key,value]) => {
    if(value === 'true' ||  value === 'false'){
      cloneEnv[key] = !!value
    }
    if(/^\d+$/.test(value as string)) {
      cloneEnv[key] = +value
    }
  })
  return cloneEnv
}


