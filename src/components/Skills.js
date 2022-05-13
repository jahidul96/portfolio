import React from 'react'
import './skills.css'
import { motion } from "framer-motion"


export default function Skills(props) {
    const { title, skill1, skill2, skill3 } = props
    return (
        <div className='skillsSection'>
            <div className='skillTextWrapper'>
                <h2>{title}</h2>
                <hr />
            </div>
            <div className='mainSkillDiv'>
                <motion.div whileHover={{ scale: 1.2 }} className='skillitem'>
                    <p>{skill1}</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, }} className='skillitem'>
                    <p>{skill2}</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, }} className='skillitem'>
                    <p>{skill3}</p>
                </motion.div>
            </div>
        </div>
    )
}
