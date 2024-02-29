const asyncHandler = (func) => {
    return (req, res, next) => {
        func(req, res, next).catch((error) => {
            res.status(error.statusCode ? error.statusCode : 500).json({
                error: error.name,
                message: error.message,
                errors: error.errors,
            });
        });
    };
};

module.exports = { asyncHandler };
