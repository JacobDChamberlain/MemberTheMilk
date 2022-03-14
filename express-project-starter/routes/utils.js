const csrf = require('csurf');

const csrfProtection = csrf({ cookie: true });

const asyncHandler = (handler) => (req, res, next) => handler(res, res, next).catch(next);

module.exports = {
    csrfProtection,
    asyncHandler
};
