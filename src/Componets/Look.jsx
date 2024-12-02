import  { useRef, useState } from 'react'
import look from '../assets/look.gif'
import { useNavigate } from 'react-router-dom';

export default function Look() {
    const [password , setPassword] = useState(false)
    const [passValue , setPassValue ] = useState('')

    const pass = useRef();
    const navigate = useNavigate()
    console.log( pass.current)
    const HandelLogin = ()=>{
        if ( pass.current.value == 12345){
            navigate('/balnce')
            alert('password is succes')
        }else{
            alert('password is wrong')

        }
    }
    const HandelBtn = ()=>{
        password ?  setPassword(false) :  setPassword (true)


    }
  return (
    <div className='container'>
      <div className={ `bg-info justify-content-center align-items-center ` } style={{width:'1000px' , height:'200px',display:'grid'}}>
        <h1>balance</h1>
      </div>
 

      <div className={` ${ password ? 'd-flex' : 'd-none'}  my-2`}>
      <input ref={pass} type="text"   className=' py-3 form-control w-75  ' placeholder='please enter your password'/>
<button onClick={HandelLogin} className='w-50 btn btn-success'>login</button>
      </div>
      <div onClick={HandelBtn} className="  p-2 bg-danger justify-content-center align-items-center" style={{width:'1000px' , height:'200px', display:''}}>
      
        <img src={look} alt=""  className='' style={{width:'100px' , textAlign:'center'}}/>
     
      <h1>balance</h1>

      </div>

    </div>
  )
}
