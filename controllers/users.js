import {v4 as uuid} from 'uuid';

let users =[];

export const getUsers = (req,res)=>{
    res.send(users)

}

export const createUser = (req,res)=>{
const user =  req.body;
console.log(user)
users.push({...user,id:uuid()});
res.send('user added succesfully')
}

export const getUser=(req,res)=>{
const singleUser = users.filter((user)=> user.id === req.params.id);
res.send(singleUser)
}

export const deleteUser =(req,res)=>{
   users = users.filter((user)=> user.id != req.params.id);
   res.send('user deelted ' )
}

export const updateUser =(req,res)=>{
    const user = users.find((user)=> user.id === req.params.id);
    user.name = req.body.name;
    user.email = req.body.email;
    user.contact = req.bod.contact;

    res.send('user updated successfully')
}