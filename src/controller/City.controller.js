const {CreateNewCityInDBService} = require("./../service/City.Service")

async function CreateNewCityConytoller(request, response){
    try{

        const { name, description, image, cuisines} = request.body

        const result = await CreateNewCityInDBService(name, image, description, cuisines)

        if(!result.success){
            throw new Error("CreateNewCityInDBService failed to complete task")
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
    CreateNewCityConytoller
}