import React, { useState } from 'react'
import {List} from 'phosphor-react'
import { useNavigate } from 'react-router-dom';


const HelpPage = (props) => {
    const [pass,setPass] = useState('');
    const [confirmPass,setConfirmPass] = useState('');
    const [openCancelHelp,setOpenCancelHelp] = useState(false);
    const [disabled,setDisabled] = useState(false)

    let count = 3




    const handleCancelHelp = () => {
        setOpenCancelHelp(!openCancelHelp)
    }

    const nav = useNavigate()
 

    const changeHelper = (index) => {
        const changeHelp = props.emergencyNumbers[index];
        changeHelp.status = !changeHelp.status
        props.setHelper(changeHelp)
        props.openMenu();
        console.log(props.emergencyNumbers);
    }



    const checkPass = () => {
        if(pass !== confirmPass) {
            count -= 1
            alert(`the password and confirm password does not match ,${count} more try's`);
        }else if(pass !== props.password) {
            count -= 1
            alert(`Wrong Password!${count} more try's`)
        }if (count === 0) {
            setDisabled(true)
            handleCancelHelp()
        }else if (pass === props.password || pass === confirmPass){
            nav(`/userPage/${props.fullName}`)
        }
    }


  return (
    <div className='mainUserPageDiv'>
        <div className="menu">
            <div className="titleUserPage">
                    <img src={props.helper.icon} />
                    <h2>{props.helper.number}</h2>
            </div>
            <div className="menuBtn">
            <button onClick={props.openMenu}><List size={24} color="black" weight="fill" /></button>
            </div>
        </div>
        <div className="openMenu">
        {
            props.menu && props.emergencyNumbers.map((val,index) => {
                return (
                    <div className="menuOptions" key={index}>
                        <button onClick={() => {changeHelper(index)}}><img src={val.icon} width='30px'/>{val.number}</button>
                    </div>
                )
            })
        }
        </div>
        <div className="helpDetails">
            <div className="squareDetails">
            <h2>{props.helper.number}-{props.helper.name}</h2>
            <img src={props.helper.icon} width='100px'/>
            <h3>{props.fullName}</h3>
            </div>
            <button onClick={handleCancelHelp}>Cancel Help</button>
            {openCancelHelp && 
            <div className="cancelInputs">
            <input type="password" placeholder='Enter your password:' onChange={(e) => {setPass(e.target.value)}}/><br />
            <input type="password" placeholder='Confirm Password:' onChange={(e) => {setConfirmPass(e.target.value)}}/><br />
            <button id='cancelBtn' disabled={disabled} onClick={checkPass}>Cancel</button>
            </div>
            }
        </div>
    </div>
  )
}

export default HelpPage