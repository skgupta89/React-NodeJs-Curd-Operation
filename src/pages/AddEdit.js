import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddEdit = () => {
  const initialState = {
    "name":'',
    "email":"",
    "contact":''
  }

const [state, setState] = useState(initialState);

const {name,email,contact} = initialState;

const handleInputChange=(e)=>{
let {name,value} = e.target;
setState({...state,[name]:value})
}



const addUser=async(data)=>{
  await axios.post('http://localhost:5000/user',data)
.then((res)=>{
    console.log(res);
    toast.success(res.data);
    
}).catch((err)=>{
    console.log(err)
})
}
const updateUser=async(data)=>{
  await axios.post(`http://localhost:5000/user/${id}`,data)
.then((res)=>{
    if(res.status === 200){
      toast.success('updated data');
      console.log(res);
    toast.success(res.data);
    }
    
}).catch((err)=>{
    console.log(err)
})
}

const handleSubmit =(e)=>{
  e.preventDefault();
  if(!id){

    addUser(state)
  }else{
    updateUser(id)
  }

}

const {id} = useParams();

useEffect(()=>{
  if(id){
    getSingleUser(id)
  }
})


const getSingleUser =async(id)=>{
  await axios.get(`http://localhost:5000/user/${id}`)
  .then((res)=>{
      console.log(res);
   if(res.status === 200){
    setState({...res.data[0] })
   }
      
  }).catch((err)=>{
      console.log(err)
  })
}



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input className='name' name='name' placeholder='name' onChange={handleInputChange} value={name}></input> <br />
        <label>email</label>
        <input className='email' name='email' placeholder='email' onChange={handleInputChange} value={email} ></input><br />
        <label>contact</label>
        <input className='contact' name='contact' placeholder='contact' onChange={handleInputChange} value={contact} ></input>
        <input type='submit' className='btn btn-success' value={id? 'Update':'Add'} />
       
      </form>
       
    </div>
  )
}

export default AddEdit;