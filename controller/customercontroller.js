const db = require('../config');
const profile = db.user

exports.updateprofile = (req, res) => {
	console.log("Processing func -> Update Profile");
	
	console.log(req.body)
	console.log(req.idd)
	profile.update(
		{name: req.body.name,
		doorNo: req.body.doorNo,
	    streetName: req.body.streetName,
		city: req.body.city,
		phone: req.body.phone},
		{where: {email: req.idd}}
	).then((result) => {
		res.status(200).send({msg: 'Profile Updated Successfully.'})
	}).catch((err) => {
		res.status(500).send("Fail! Error -> " + err)
	})
}

exports.getprofile = (req, res) => {
	console.log("Processing func -> Get Profile");
	
	console.log(req.idd)
	profile.findOne({
		where: {
			email: req.idd
		}
	}).then((result) => {
		res.status(200).send({
			"name": result.name,
			"username": result.username,
			"email": result.email,
			"doorNo": result.doorNo,
			"streetName": result.streetName,
			"city": result.city,
			"phone": result.phone
		})
	}).catch((err) => {
		res.status(500).send("Fail! Error -> " + err)
	})
}

