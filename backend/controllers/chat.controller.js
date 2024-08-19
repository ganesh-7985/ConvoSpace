import Chat from '../models/chat.model.js'
import {emmitEvent} from '../utils/features.js'
import {ALERT,REFECTCH_CHATS} from '../constants/Events.js'
import ErrorHandler from '../utils/utility.js'
import {otherMembers} from '../lib/helper.js'


export const newGroupChat = async (req, res, next) => {
    const { name, members } = req.body
    if (members.length < 2) {
        return next(new ErrorHandler("Please add at least 3 members", 400))
    }
    const allMembers = [...members,req.user]
    await Chat.create({
        name,
        groupchat:true,
        members:allMembers,
        creator:req.user
    })
    emmitEvent(req,ALERT,allMembers,`welcome to ${name} group chat`)
    emmitEvent(req,REFECTCH_CHATS,members)

    return res.status(201).json({
        success:true,
        message:"Group  created successfully"
    })

}

export const getMyChats = async(req,res,next)=>{
        const chats = await Chat.find({members:req.user}).populate("members","username avatar")

        const transformedChats = chats.map(({_id,name,members,groupchat})=>{
            const otherMember = otherMembers(members,req.user._id)
            return {
                _id,
                groupchat,
                avatar:groupchat?members.slice(0,3).map(({avatar})=>avatar.url):[otherMember.avatar.url],
                name:groupchat?name:otherMember.name,
                members:members.reduce((prev,curr)=>{
                    
                    if(curr._id.toString()!==req.user.toString()){
                        prev.push(curr.name)
                    }
                    return prev;
                },[])

            }
        })
         return res.status(200).json({
        success:true,
        chats:transformedChats
    })
}

export const getMyGroups = async(req,res,next)=>{
    const chats = await Chat.find({members:req.user,groupchat:true,creator:req.user}).populate("members","username avatar")

    const groups = chats.map(({_id,name,members,groupchat})=>({
       _id,
       name,
       groupchat,
       avatar: members.slice(0,3).map(({avatar})=>avatar.url)
    }))

    return res.status(200).json({
        success:true,
        groups
    })
}

export const addMember = async(req,res,next)=>{
    const {chatId,member} = req.body
    const chat = await Chat.findById(chatId)
        if(!chat) return next(new ErrorHandler("Chat not found",404))
        if(!chat.groupchat) return next(new ErrorHandler("This is not a group chat",400))
        if(chat.creator.toString()!==req.user.toString()){
            return next(new ErrorHandler("Only creator can add member",400))
        }

      const allNewMembersPromise = member.map(({_id})=>User.findById(_id,'name'))  
      const allNewMembers = await Promise.all(allNewMembersPromise)
      chat.members.push(...allNewMembers.map(({_id})=>_id))

      if(chat.members.length>100){
        return next(new ErrorHandler("You can't add more than 100 members",400))
      }

      await chat.save()

      const allUsersNames = allNewMembers.map((id)=>id.name).join(", ") 
      emmitEvent(req,REFECTCH_CHATS,chat.members)
      emmitEvent(req,ALERT,chat.members,`${allUsersNames} added to ${chat.name} group chat`)

      return res.status(200).json({
        success:true,
        message:"Member added successfully"
      })
}