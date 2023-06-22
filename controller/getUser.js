exports.getUser = (req,res) =>{
   console.log(req.params.userID)
   res.send("user")
}