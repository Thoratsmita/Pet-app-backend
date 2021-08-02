const verifySignUp = require('./verifySignUp');
const verifyToken = require('./verifyJwtToken');

module.exports = function(app) {

    const controller = require('../controller/controller.js');
	const customercontroller = require('../controller/customercontroller');
 
	app.post('/api/auth/signup', verifySignUp, controller.signup)
	
	app.post('/api/auth/signin', controller.signin)

	app.post('/api/auth/signout', verifyToken, controller.signout)

	app.get('/api/getprofile', verifyToken, customercontroller.getprofile)

	app.post('/api/updateprofile', verifyToken, customercontroller.updateprofile)

}