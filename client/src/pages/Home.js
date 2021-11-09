import React from 'react'
import ReactPlayer from 'react-player/youtube'

const Home = () => {
    return (
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player'
                url='https://youtu.be/SiP2oozH2p0'
                width='100%'
                height='100%'
            />
        </div>
    )
}

export default Home