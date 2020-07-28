import React from 'react'
import {Link} from 'react-router-dom'

function ProductCard(props)
{
    return(
        <div className="border mb-4 rounded overflow-hidden">
            <Link to={`/product/${props.product.item_id}`}>
                <div>
                    {props.product.item_id}
                </div>
            </Link>
        </div>
    )
}

export default ProductCard
