const User = require('./../models/User')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }

    static getInfo(user){
        return [user.id, user.username, user.name, user.bio]
    }

    static updateUserUsername(user, newUser){
        return user.username = newUser
    }

    static getAllUsernames(users){
        const usernames = [];
        users.forEach((user)=>{
            usernames.push(user.username)
        })
        return usernames;
    }
}

module.exports = UserService