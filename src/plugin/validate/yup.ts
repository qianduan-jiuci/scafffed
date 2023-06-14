import * as yup from 'yup'

yup.setLocale({
  mixed: {
    required: '${label}是必须的'
  },
  string: {
    email: '邮箱格式有误'
  }
})

export default  yup