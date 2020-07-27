import React from 'react'

/* Component */
import HelloWorld from '../Components/HelloWorld'

function Home(){
    return(
        <div>
            <h1 className="font-bold text-2xl mb-3">This is the Homepage</h1>
            <HelloWorld name = "Aron Owen"/>
        </div>
    )
}

export default Home
