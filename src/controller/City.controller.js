const e = require("express")
const {CreateNewCityInDBService, GetallcityService, UpdatecityService, DeleteCityService} = require("./../service/City.Service")

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
async function GetallcityController(req,res){
    try {

        const result = await GetallcityService()

if(result.success) {
    const DATA = result.data.map((element) => {
        const { _id, name, description, cuisines, image } = element

        return {
            id: _id,
            name,
            description,
            cuisines,
            image
        }   
    })

    res.status(200).json({
        success : true,
        data : DATA
    })

    }else{
        throw new Error("Error")

} 

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success : false,
            message : "Something went wrong"
            })
    }

}

async function UpdatecityContoller(req,res) {
    try {
        const {id : cityId} = req.query
    const {name, description, image, cuisines} = req.body
const DATA = {}
if (name) {
    DATA.name = name
}
if (description) {
    DATA.description = description
}
if (cuisines){
    DATA.cuisines = cuisines
}
if (image) {
    DATA.image = image
}


   const result = await UpdatecityService(cityId, DATA)
   if(result.success) {
    res.status(200).json({
        success : true,
        message : "City updated successfully"
        })

    
    }else{
        throw new Error("Error")
    
   }

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success : false,
            message : "Something went wrong"
            })
        
    }
    
}

async function DeletecityController(req, res) {
    try {
        const { id: cityId } = req.query;

        const result = await DeleteCityService(cityId);
        if (result.success) {
            res.status(200).json({
                success: true,
                message: "City deleted successfully"
            });
        } else {
            throw new Error("DeleteCityService failed to complete task");
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
}

module.exports = {
    CreateNewCityConytoller,GetallcityController,UpdatecityContoller,DeletecityController
}