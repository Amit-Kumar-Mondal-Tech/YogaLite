import React, { useState } from 'react'

import { poseInstructions } from '../../utils/data'

import { poseImages } from '../../utils/pose_images'

import './Instructions.css'

export default function Instructions({ currentPose }) {
    // return(
    //     <div>{currentPose}</div>
    //   )

    const [instructions, setInsntructions] = useState(poseInstructions)

    return (
        <div className="instructions-container">
            <ul className="instructions-list">
                {instructions[currentPose].map((i) => {
                    return(
                        <li className="instruction">{i}</li>
                    )
                    
                })}
            </ul>
            <img 
                className="pose-demo-img"
                src={poseImages[currentPose]}
            />
        </div>
    )
}