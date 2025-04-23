export class ErrorResponse extends Error {
  constructor(message, statusCode, errors) {
    super(message);
    this.statusCode = statusCode;
    this.error = errors;
    Object.setPrototypeOf(this, ErrorResponse.prototype);
  }
}