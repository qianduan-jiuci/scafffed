declare interface ResponseResult<T> {
    code: number
    message: 'success' | 'error'
    data: T
}