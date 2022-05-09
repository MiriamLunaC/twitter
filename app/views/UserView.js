const UserService = require('./../services/UserService')

class UserView{
    static createUser(payload){
        let result = {}
        if(payload == null){
            result.error = "payload no existe"
        }else{
            if( payload.username == undefined || payload.name == undefined ||
                payload.id == undefined ||
                typeof(payload.username) != "string" || 
                typeof(payload.name) != "string" || 
                typeof(payload.id) != "number"){
                result.error = "necesitan tener un valor válido"
            }else{
                result = UserService.create(payload.id, payload.username, payload.name)
            }
            
        }

        return result;
    }
}

module.exports = UserView