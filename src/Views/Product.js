import React, { useState, useEffect } from 'react'
import axios from 'axios'

/* Component */

function Product(){
    const url = 'https://www.albion-online-data.com/api/v2/stats/Prices/T4_RUNE?locations=Martlock'
    const [product, setProduct] = useState(null)

    let content = null

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setProduct(response.data)
            })
    }, [url])

    if(product != null){
        content =
        <div>
            <h1 className="text-2xl font-bold mb-3">
                {product.item_id}
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
