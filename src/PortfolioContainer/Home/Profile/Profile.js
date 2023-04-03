import React from 'react'
import Typical from 'react-typical'
import './Profile.css'
const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href=''>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href=''>
                                <i className='fa fa-google-plus-square'></i>
                            </a>
                            <a href=''>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href=''>
                                <i className='fa fa-youtube-square'></i>
                            </a>
                            <a href=''>
                                <i className='fa fa-twitter-square'></i>
                            </a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'M <span className='highlighted-text'> Vrushabh</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    wrapper='p'
                                    steps={[
                                        'Enthusiastic Dev',
                                        2000,
                                        'FullStack Dev',
                                        2000,
                                        'React JS Dev',
                                        2000,
                                        'MEARN Stack Dev',
                                        2000,
                                        'Cross Platform V',
                                        2000,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building applications with frontend operations.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        {" "}
                        <button className='btn primary-btn'>
                            Hire Me..!
                        </button>
                        {" "}
                        <a href='/SanjayResume.pdf' download>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile