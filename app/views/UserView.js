const UserService = require('./../services/UserService')

class UserView{
    static createUser(payload){
        let result = {}
        if(payload == null){
            result.error = "payload no existe"
        }

        return result;
    }
}

module.exports = UserView