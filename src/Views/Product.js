import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

/* Component */
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Product(){
    const { id } = useParams()
    const url = `https://www.albion-online-data.com/api/v2/stats/Prices/${id}?locations=Martlock`

    let product = useAxiosGet(url)

    let content = null

    if(product.error)
    {
        content = <p>There was an error</p>
    }

    if(product.loading)
    {
        content = <Loader />
    }

    if(product.data){
        content =
        <div>
            <h1 className="text-2xl font-bold mb-3">
                The product id is: {product.data[0].item_id}
                <hr />
                <p>Min Sell: {product.data[0].sell_price_min}</p>
                <p>Max Sell: {product.data[0].sell_price_max}</p>
                <hr />
                <p>Min Buy: {product.data[0].buy_price_min}</p>
                <p>Max Buy: {product.data[0].buy_price_max}</p>
                <hr />
            </h1>
        </div>
    }

    return(
        <div>
            {content}
        </div>
    )
}

export default Product
