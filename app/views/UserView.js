const UserService = require('./../services/UserService')

class UserView{
    static createUser(payload){
        let result = {}
        if(payload == null){
            result.error = "payload no existe"
        }else{
            if(typeof(payload.username) != "string" || typeof(payload.name) != "string" || typeof(payload.id) != "number"){
                result.error = "necesitan tener un valor válido"
            }
            
        }

        return result;
    }
}

module.exports = UserView