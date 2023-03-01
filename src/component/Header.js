import React,{useState,useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import './Header.css';



const Header = () => {
    const [activeTab, setactiveTab] = useState('Home');

    const location = useLocation();

    useEffect(()=>{
        if(location.pathname=== '/'){
            setactiveTab('Home');
        }
        else if(location.pathname === '/add'){
            setactiveTab('AddUser')
        }
        else if(location.pathname==='about'){
            setactiveTab('About')
        }
    })



  return (
    <div className='Header navbar d-flex justify-content-between'>
        <p className='logo'>User Management System</p>
        <div className='header-right '>
            <Link to='/'>
                <p 
                onClick={()=>setactiveTab('Home')}
                className={`${activeTab === 'Home'? 'active' : ''}`}>Home</p>
            </Link>
            <Link to='/add'>
                <p
                 onClick={()=>setactiveTab('AddUser')}
                className={`${activeTab === 'AddUser'? 'active' : ''}`}>Add User</p>
            </Link>
            <Link to='/about'>
                <p 
                 onClick={()=>setactiveTab('About')}
                className={`${activeTab === 'About'? 'active' : ''}`}>About</p>
            </Link>
          

        </div>
    </div>
  )
}

export default Header