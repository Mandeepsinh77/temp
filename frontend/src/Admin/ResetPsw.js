import React, { useEffect, useState } from 'react'
import Logo from '../images/Agro.png';
import { Link, useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';


const ResetPsw = () => {

    const {id,token} = useParams();
    const [password,setPassword]=useState("");
    const [message,setMessage]=useState("");
    
    const userValid = async() =>{
        const res = await fetch(`http://localhost:4000/auth/forgotpassword/${id}/${token}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
            }
        });

        const data = await res.json();
        if(res.ok){
            console.log("User valid");
        }
       
    }

    useEffect(()=>{
        try {
           userValid();
        } catch (error) {
           window.alert(error); 
        }
    },[])

    const handleSubmit = (e) =>{
        try {
            e.preventDefault();
            sendPassword();
        } catch (error) {
            window.alert(error);
        }
    }
    const navigate = useNavigate();
    const setNewPassword = (e) =>{
        setPassword(e.target.value);
    }

    async function sendPassword (){
        
        const res = await fetch(`http://localhost:4000/auth/${id}/${token}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({password})
        });

        const data = await res.json();

        if(res.ok){
            console.log("User valid");
            setPassword("")
            swal({
                title: "Passoword Changed Successfully",
                icon: "success",
                button: false,
                timer: 3000
              })
            setMessage(true);
        }
       

    }

  return (
      <>
       <div className="  flex flex-row justify-between items-center mx-2">
  <div className="flex items-center">
    <img src={Logo} alt="" style={{ height: "50px", width: "60px" }} className='mix-blend-multiply' />
    <Link to="/"><h1 className="ml-2 text-3xl text-black font-bold font-[Arimo]">AgroBook</h1></Link>
  </div>
  <button onClick={()=>navigate('/forgot')} className="relative ml-auto text-center px-4 border-2 border-green-800 p-2 sm:rounded-sm lg:rounded-full md:rounded-md hover:bg-green-800 hover:text-white hover:duration-700 hover:shadow-lg"><ion-icon name="arrow-undo"></ion-icon> Back to Send Link</button>
</div>
<div className="bg-white rounded-lg p-6 shadow-lg sm:w-full md:w-96 lg:w-96  xl:w-96 mx-auto mt-32 drop-shadow-2xl ">
  <h2 className="font-bold font-[Poppins] text-3xl text-center tracking-wide underline"> Reset Password</h2>
  
  <form onSubmit={handleSubmit}>
    <div className="mb-4 mt-8">
      <label htmlFor="oldPassword" className="block text-black font-bold font-[Poppins] mb-1" >Enter New Password</label>
      <input
        type="password"
        id="oldPassword"
        onChange={setNewPassword}
        value={password}
        required
        placeholder='Enter New Password'
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 drop-shadow-lg"
      />
    </div>
   
   
    <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center pt-4 ">
      <button
        type="submit"
        className="sm:w-auto lg:w-[100%] bg-green-800 text-white py-2 px-4 rounded-lg mt-2 sm:mt-0 hover:bg-green-700 drop-shadow-lg focus:outline-none focus:ring focus:border-blue-300"
      >
        Reset
      </button>
    </div>
  </form>
</div>
    </>
  )
}

export default ResetPsw
