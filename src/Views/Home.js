import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

/* Component */
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Home(){
    const url = `https://www.albion-online-data.com/api/v2/stats/Prices/T4_ARTEFACT_2H_HAMMER_UNDEAD,T4_ARTEFACT_2H_REPEATINGCROSSBOW_UNDEAD,T4_ARTEFACT_MAIN_SCIMITAR_MORGANA,T4_ARTEFACT_2H_HALBERD_MORGANA,T4_ARTEFACT_ARMOR_PLATE_UNDEAD,T4_ARTEFACT_HEAD_PLATE_UNDEAD,T4_ARTEFACT_SHOES_PLATE_UNDEAD,T4_ARTEFACT_OFF_TOWERSHIELD_UNDEAD,T4_ARTEFACT_MAIN_ROCKMACE_KEEPER?locations=Martlock`

    let products = useAxiosGet(url)

    let content = null

    if(products.error)
    {
        content = <p>There was an error</p>
    }

    if(products.loading)
    {
        content = <Loader />
    }

    if(products.data){
        content =
        products.data.map((product, key) =>
            <div key={key}>
                <ProductCard
                    product={product}
                />
            </div>
        )
    }

    return(
        <div>
            <h1 className="font-bold text-2xl mb-3">Item List</h1>
            {content}
        </div>
    )
}

export default Home
