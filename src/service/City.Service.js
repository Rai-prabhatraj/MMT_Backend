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
async function GetallcityService(){
    try {

        const result = await CityModel.find()
        if(result){
            return {
                success : true,
                data : result
                }
        }else{
            throw new Error("Error")
        }
        
    } catch (error) {
        console.log(error)
        return{
            success : false
        }
        
    }

}
async function UpdatecityService(cityId,data) {
    try {
       const {name,description,cuisines,image} = data
       const cityDocument = await CityModel.findById(cityId)

        if (name) {
            cityDocument.name = name
        }
        if (description) {
            cityDocument.description = description
        }
        if (cuisines){
            cityDocument.cuisines = cuisines
        }
        if (image) {
            cityDocument.image = image
        }

       const result = await cityDocument.save()

       if(result){
        return{
            success : true,
            data : result
        }
       
        } else {
            throw new Error(`unable to update city by id : ${cityId}`);
        }
       
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "error"
        };
    }
    
    
}

async function DeleteCityService(cityId) {
    try {
        const result = await CityModel.findByIdAndDelete(cityId);
        if (result) {
            return {
                success: true,
                message: "City deleted successfully"
            };
        } else {
            throw new Error(`City with id ${cityId} not found`);
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Error deleting city"
        };
    }
}

module.exports = {
    CreateNewCityInDBService,GetallcityService,UpdatecityService,DeleteCityService
}