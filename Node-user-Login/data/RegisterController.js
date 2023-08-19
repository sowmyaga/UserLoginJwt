const RegisterService=require("../data/RegisterService")

exports.getRegisterUser=async function(req,res){
    const result=await RegisterService.getregisterUserService({});
    res.status(200).json(result);
}