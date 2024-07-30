const UserModel = require('./../model/Usermodel')

async function CreateNewUserInDBService(name, email, phone, password){
    try{

        const result = await UserModel.create({
            name, email, phone, password 
        })

        if(result){
            return {
                success : true,
                data : result
            }
        }

    }catch(error){
        console.log(error)
        return {
            success : false
        }
    }
}

module.exports = {
    CreateNewUserInDBService
}