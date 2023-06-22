exports.removeUser = (req,res) =>{
    console.log(req.params.userID)
    res.send("delete user")
 }