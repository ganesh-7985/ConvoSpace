//creating fake data for the users and saving it to the database
import User from '../models/user.model.js'
import {faker} from '@faker-js/faker'

export const createUsers = async(numUsers)=>{
    try{
        const userPromises = []
        for(let i=0;i<numUsers;i++){
            const tempUser = {
                name:faker.person.fullName(),
                username:faker.internet.userName(),
                bio:faker.lorem.sentence(),
                password:"password",
                avatar:{
                    public_id:faker.system.fileName(),
                    url:faker.image.avatar()
                }
            }
            userPromises.push(User.create(tempUser))
            
        }
        await Promise.all(userPromises)

    }
    catch(error){
        console.log(error)
        process.exit(1)
    }

}