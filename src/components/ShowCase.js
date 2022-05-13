import React, { useState } from 'react'
import SocialNav from './SocialNav'
import './style.css'
import { motion } from "framer-motion"
import profileimg from '../assets/my.png'

export default function ShowCase() {
    const [show, setShow] = useState(false)
    return (
        <div className='showcase'>


            <motion.div whileHover={{ scale: 1.1, }} className='showCaseTextContainer'>
                <div className='profileimgWrapper'>

                    <img className='profileImg' src={profileimg} alt="prfile img" />
                </div>
                <h3>I am <span className='nameStyle'>Jahidul</span> Islam.</h3>
                <div className='detailsText'>
                    I am professional Web designer, React Js and React Native developer. I have worked in many Local project's and now Working on online market place. I have more than 1 years experience in frontend development also have mid level knowledge in development.
                    <p>For your anykind of project you can contact me.</p>
                    <p>You can also Email me : Jahidul96@yahoo.com</p>
                    <SocialNav />
                    <p>Thanks.</p>
                </div>
            </motion.div>


        </div>
    )
}
