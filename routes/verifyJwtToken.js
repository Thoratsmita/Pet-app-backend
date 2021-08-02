const db = require('../config');
const UserToken = db.userToken;
const jwt = require('jsonwebtoken');
const config = require('../config/secret.config');
verifyToken = (req, res, next) => {
	let token = req.headers['authorization'];
  
	if (!token){
		return res.status(403).send({ 
			auth: false, message: 'No token provided.' 
		});
	}

	UserToken.findOne({
		where: {
			token: token
		}
	}).then(user => {
		if(!user) {
			return res.status(404).send({msg : 'Token Not Found.'})
		}
		jwt.verify(token, config.secret, (err, decoded) => {
			if (err){
				return res.status(500).send({ 
						auth: false, 
						message: 'Fail to Authentication. Error -> ' + err 
					});
			}
			req.userId = decoded.id;
			req.idd = user.email;
			console.log("user idddddd", req.userId)
			console.log("user email", user.email)
			next();
		});
	}).catch(err => {

	})

	
}


module.exports = verifyToken;