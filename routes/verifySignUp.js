const db = require('../config');
const User = db.user;

checkDuplicateUserNameOrEmail = (req, res, next) => {
	
    // -> Check Email is already in use
    User.findOne({ 
        where: {
            email: req.body.email
        } 
    }).then(user => {
        if(user){
            res.status(400).send("Fail -> Email is already in use!");
            return;
        }
        next()
    }).catch(err => {
    })

}



module.exports = checkDuplicateUserNameOrEmail;