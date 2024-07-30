const {CreateNewUserInDBService} = require("./../service/User.service")

async function CreateNewUserController(request, response){
    try{

        const { name, email, phone, password} = request.body

        const result = await CreateNewUserInDBService(name, email, phone, password)

        if(!result.success){
            throw new Error("CreateNewUserInDBService failed to complete task")
        }

        response.status(201).json({
            success : true,
            data : result.data
        })

    }catch(error){
        console.log(error)
        response.status(500).json({
            success : false,
            message : "Something went wrong" 
        })
    }
}

module.exports = {
    CreateNewUserController
}