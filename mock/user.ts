import Mock from 'mockjs'
import type { MockjsMock } from 'mockjs'
import type { MockMethod } from 'vite-plugin-mock'

const data:MockjsMock = Mock.mock({
  "user|10": [{
    name: "@cname",
    "age|1-100": 1,
    color: Mock.Random.color()
  }]
})

export default [
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 200,
        message: '请求成功',
        data: {
          name: '张三',
          age: 25
        }
      }
    },
  },
  {
    url: '/api/login',
    method: 'post',
    response: ({ query }) => {
      return {
        code: 200,
        message: '请求成功',
        data: {
          token: Mock.Random.string(20)
        }
      }
    },
  },
] as MockMethod[]