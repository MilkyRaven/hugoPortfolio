import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

export default function Typing() {
    const [text, count] = useTypewriter({
        words: ['I am a data designer', 'photographer person', 'Check out what I do'],
        loop: true,
        delaySpeed: 1500,
    })
    return (
            <div className='typing'>
                <span className='description'>{text}</span>
                <Cursor cursorColor='#F7AB0A'/>
            </div>
    )
}

