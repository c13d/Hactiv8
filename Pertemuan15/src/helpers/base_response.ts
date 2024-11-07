export class BaseResponse<T,R> {
    status: number
    message: string
    data: T
    errors?: R
    constructor(status: number, message: string, data: T, errors: R) {
        this.status = status;
        this.message = message;
        this.data = data;
        this.errors = errors
    }
}

let baseResponse = new BaseResponse<string, string>(200, "success", "hello world", "he")