class ApiError extends Error {
    constructor(
        statusCode = 500,
        name = "Api Error",
        errorMessage = "Resource not found!",
        errors = []
    ) {
        super(errorMessage);
        this.name = name;
        this.statusCode = statusCode;
        this.errors = errors;
    }
}

module.exports = ApiError;
