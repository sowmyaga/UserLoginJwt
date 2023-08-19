const userRegistermodel=require("../data/RegisterModel");

exports.getregisterUserService=async function(query){
    const result=await userRegistermodel.find(query);
    return result;
}