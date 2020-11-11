const { override, babelInclude, getBabelLoader } = require('customize-cra');
const path = require('path');

module.exports = override(
	babelInclude([path.resolve('../utils'), path.resolve('src')]),
);
