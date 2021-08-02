"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Custom ErrorResponse extended from Error Interface
class ErrorResponse extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.statusCode = statusCode;
    }
}
exports.default = ErrorResponse;
//# sourceMappingURL=errorResponse.js.map