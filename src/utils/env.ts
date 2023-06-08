import _ from 'lodash'

class EnvHeper{
  public env = {} as ImportMetaEnv
  constructor() {
    this.env = this.getEnv()
  }

  getEnv() {
    const cloneEnv = _.cloneDeep(import.meta.env)
    Object.entries(cloneEnv).forEach(([key,value]) => {
      if(value === 'true' ||  value === 'false'){
        cloneEnv[key] = !!value
      }
      else if(/^\d+$/.test(value)) {
        cloneEnv[key] = +value
      }else if(value === 'null') {
        cloneEnv[key] = null
      }else if(value === 'undefined') {
        cloneEnv[key] = undefined
      }else {
        cloneEnv[key] = value
      }
    })
    return cloneEnv
  }
}

const { env } = new EnvHeper()

export {env}