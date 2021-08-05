const db = require('../config');
const profile = db.user
const device = db.device

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

exports.setdeviceinfo = (req, res) => {
	console.log("Processing func -> Set Device Info");
	
	console.log(req.idd)
	device.create({
		deviceid: req.body.deviceid,
        petname: req.body.petname,
        MSISDN: req.body.MSISDN,
        geofence: req.body.geofence
	}).then((result) => {
		res.status(200).send({"msg" : "Data Added Successfully"})
	}).catch((err) => {
		res.status(500).send("Fail! Error -> " + err)
	})
}

exports.getdeviceinfo = (req, res) => {
	console.log("Processing func -> Get Device Info");
	
	console.log(req.idd)
	device.findOne({
		where: {
			deviceid: req.body.deviceid
		}
	}).then((result) => {
		res.status(200).send({"deviceid": result.deviceid,
							"petname": result.petname,
							"MSISDN": result.MSISDN,
							"geofence": result.geofence})
	}).catch((err) => {
		res.status(500).send("Fail! Error -> " + err)
	})
}

