const UserService = require('./../../app/services/UserService')

describe("Test for UserService", ()=>{
    test("1. Create a new user using the UserService", ()=>{
        const user = UserService.create(1, "carlogilmar", "Carlo")
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

    test("2. Get all user data in a list", ()=>{
        const user = UserService.create(1, "carlogilmar", "Carlo")
        const userInfoList = UserService.getInfo(user)
        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe("carlogilmar")
        expect(userInfoList[2]).toBe("Carlo")
        expect(userInfoList[3]).toBe("Sin bio")
    })

})