const db = require('../config');
const config = require('../config/secret.config');
const User = db.user;
const UserToken = db.userToken;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.signup = (req, res) => {
	// Save User to Database
	console.log("Processing func -> SignUp");
	
	console.log(req.body)
	User.create({
		name: req.body.name,
		username: req.body.username,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 8)
	}).then(user => {
		res.status(200).send("User registered successfully!");
	}).catch(err => {
		res.status(500).send("Fail! Error -> " + err);
	})
}

exports.signin = (req, res) => {
	console.log("Sign-In");
	
	User.findOne({
		where: {
			email: req.body.email
		}
	}).then(user => {
		if (!user) {
			return res.status(404).send('User Not Found.')
		}

		var passwordIsValid = bcrypt.compareSync(req.body.password, user.password)
		if (!passwordIsValid) {
			return res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" })
		}
		
		var token = jwt.sign({ id: user.id }, config.secret, {
		  expiresIn: 86400 // expires in 24 hours
		});

		
		UserToken.create({
				email: req.body.email,
				token: token
			}).then(user => {
				res.status(200).send({ auth: true, accessToken: token })
			}).catch(err => {
				res.status(500).send("Fail! Error -> " + err)
			})
		
		
		
	}).catch(err => {
		console.log(req.body.email)
		res.status(500).send('Error -> ' + err)
	});
}

exports.signout = (req, res) => {
	console.log("Sign-Out")

	const authHeader = req.headers["authorization"]

		UserToken.destroy({
			where: {
				token: authHeader
			}
		}).then(user => {
			jwt.sign(authHeader, config.secret, { expiresIn: '1s' } , (logout, err) => {
				if (logout) {
					res.status(200).send({msg : 'You have been Logged Out' })
				} else {
					res.status(500).send({msg:'Error'})
				}
				
			})
		}).catch(err => {
			res.status(500).send("Fail! Error -> " + err)
		})
   	
}

