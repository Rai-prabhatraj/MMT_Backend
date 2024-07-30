const CityModel = require('./../model/City.Model')

async function CreateNewCityInDBService(name, image, description, cuisines){
    try{

        const result = await CityModel.create({
            name,
            image,
            description,
            cuisines  
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
    CreateNewCityInDBService
}