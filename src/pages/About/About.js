import React from 'react'

import './About.css'

export default function About() {
    return (
        <div className="about-container">
            <h1 className="about-heading">About</h1>
            <div className="about-main">
                <p className="about-content">
                Welcome to our yoga website, where we provide online training and resources for those looking to improve their yoga practice. We have a team of experienced yoga instructors and contributors who are passionate about sharing their knowledge and helping others achieve their wellness goals.<br/><br/>
                Meet our Contributors:<br/>
                Kaushik Pal<br/>
                Supriyo Dam<br/>
                Amit Kumar Mondal<br/><br/>
                Our team of contributors bring diverse backgrounds and experiences to our website, allowing us to offer a wide range of yoga styles and practices. Whether you are a beginner looking to get started with yoga or an experienced practitioner seeking to deepen your practice, our instructors can provide the guidance and support you need.<br/><br/>
                Thank you for visiting our website, and we look forward to helping you on your yoga journey.
                </p>
                {/* <div className="developer-info">
                    <h4>About Developer</h4>
                    <p className="about-content">I am Harsh, I am Full Stack Developer, AI Enthusiastic, Content Creator, Tutor,
                        I love to work with technology and love to share on my youtube channel, 
                        I hope this project will help you. 
                    </p>
                    <h4>Contact</h4>
                    <a href="https://www.instagram.com/codedharsh75/"><p className="about-content">Instagram</p></a>
                    <a href="https://www.youtube.com/channel/UCiD7kslR7lKSaPGSQ-heOWg"><p  className="about-content">Youtube</p></a>
                    <a href="https://github.com/harshbhatt7585"><p  className="about-content">GitHub</p></a>
                </div> */}
            </div>
        </div>
    )
}
