import React, { useState } from 'react'
import {List} from 'phosphor-react'
import '../style/userPage.css'

import { useNavigate } from 'react-router-dom'


const UserPage = (props) => {



    const nav = useNavigate()




    const navToHelpPage = () => {
        nav('/HelpPage/')
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
                        <button onClick={() => {props.chooseHelp(index)}}><img src={val.icon} width='30px'/>{val.number}</button>
                    </div>
                )
            })
        }
        </div>
        <div className="helpSquare">
            <button className='help' onClick={navToHelpPage}>
                <h1>Help!</h1>
            </button>
        </div>
        
    </div>
  )
}

export default UserPage