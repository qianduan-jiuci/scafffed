import yup from "./yup";
import * as validate from 'vee-validate'
import rules from '@vee-validate/rules'
import { localize } from "@vee-validate/i18n";
import zh_ch from '@vee-validate/i18n/dist/locale/zh_CN.json'

validate.configure({
  generateMessage: localize('zhCn', zh_ch)
})

Reflect.ownKeys(rules).forEach((key) => {
  validate.defineRule(key as string, Reflect.get(rules, key))
})


export default {yup, ...validate}