const AdvDetailsModel = require('./../model/Adventuremodel')

async function CreateNewAdvDetailsInDBService(adventureId, subtitle, descrption, slots){
    try{


        const result = await AdvDetailsModel.create({
            adventureId, subtitle, descrption, slots
        })


        if(result){
            return {
                success : true,
                data : result
            }
        }else{
            throw new Error("CreateNewAdvDetailsInDBService unable to create  ")
        }


    }catch(error){
        console.log(error)
        return {
            success : false
        }
    }
}

module.exports = {
    CreateNewAdvDetailsInDBService
}