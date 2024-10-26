import React, { useState } from 'react'
import './Form.css'

const Form= () => {
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [city,setcity]=useState('')
  const [gender,setgender]=useState('')


const handleClick =(e)=>{
  e.preventDefault();
  const obj={
    name:name,
    email:email,
    password:password,
    city:city,
    gender:gender
  }
  localStorage.setItem('employee',JSON.stringify(obj))
  console.log(obj);
  setname('');
  setemail('');
  setpassword('');
  setcity('');
  setgender('');


}






  return (
    <div className='main' style={{ width:'25%',height:'500px',margin:'auto', }}>
    <h1>
      Form
    </h1>
    <form action="" onSubmit={handleClick} style={{margin:'20px'}}>
   <span>  Name: &nbsp;&nbsp;&nbsp;&nbsp;</span>  <input type="text" placeholder='enter your name ' value={name} onChange={(e)=>setname(e.target.value)}/><br />
     <span>Email:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="email" placeholder='enter your email' value={email} onChange={(e)=>setemail(e.target.value)}/><br />
   <span>   Password:</span><input type="password" placeholder='enter your password' value={password} onChange={(e)=>setpassword(e.target.value)}/><br />
    <span> City:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> <select name="" id=""  onChange={(e)=>setcity(e.target.value)}>
        <option value="">city</option>
        <option value="delhi">delhi</option>
        <option value="surat">surat</option>
        <option value="mumbai">mumbai</option>
      </select><br />
    <span> Gender:&nbsp;&nbsp;&nbsp; male</span> <input type="radio" value={"male"} name="gender"   onChange={(e)=>{setgender(e.target.value)}}/>
   <span>   female</span> <input type="radio" value={"female"} name="gender"  onChange={(e)=>{setgender(e.target.value)}} /> <br />
 

      <input type="submit" value="submit" style={{padding:'10px 20px',backgroundColor:'', marginLeft:'30%'}}/>


    </form>



    </div>




  )



}

export default Form