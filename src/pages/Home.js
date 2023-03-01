import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        getUsers();
    })

    const getUsers =async()=>{
await axios.get('http://localhost:5000/users')
.then((res)=>{
    console.log(res);
    setData(res.data)
}).catch((err)=>{
    console.log(err)
})

}
console.log(data)


const onDeleteUser =async(id)=>{
    await axios.delete(`http://localhost:5000/user/${id}`)
    .then((res)=>{
      setData(res.data);
      getUsers();
    }).catch((err)=>{
       toast.error(err);
    })
    
}


  return (
    <div>
       <table>
        <thead>
            <th>No.</th>
            <th>Name</th>
            <th>email</th>
            <th>contact</th>
            <th>Action</th>
        </thead>
        <tbody>
            {
                data && data.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.contact}</td>
                            <td>
                                <Link to ={`/update/${item.id}`}>
                                    <button className='btn btn-success'>update</button>
                                </Link>
                                <button className='btn btn-danger' onClick={()=>onDeleteUser(item.id)}>Delete</button>

                                <Link to ={`/view/${item.id}`}>
                                    <button className='btn btn-info'>Edit</button>
                                </Link>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
       </table>
    </div>
  )
}

export default Home