'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || global.DATABASE_URL || 'mongodb://demo:demo1234@ds231723.mlab.com:31723/smoking-cessation';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://demo:demo1234@ds231723.mlab.com:31723/smoking-cessation';
exports.PORT = process.env.PORT || 8080;

function toggle(x) {
    x.classList.toggle("change");
}
