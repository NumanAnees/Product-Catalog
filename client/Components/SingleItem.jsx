import React from 'react'
import Link from "next/link";


const SingleItem = ({items,query,minPrice,maxPrice}) => {
  return (
    <>
     <div className="section-center">
        {items.filter((item) => item.name.toUpperCase().includes(query)).filter((item)=> item.price>minPrice&&item.price<maxPrice).map((item)=>{
            const {id, price, name, img, desc,designer,url} = item;
            return(
                <Link href={url} key={id}>
                <article  className="menu-item pointer" >
                    <img src="/images/img.jpeg"  alt="img" className='photo' />
                    <div className="item-info">
                        <header>
                        <h4>{name}</h4>
                        </header>
                        <p className="item-text">{desc.substr(0,40)}</p>
                        <p className="item-text">Designer: {designer}</p>
                        <p className="item-text">Price: ${price}</p>

                    </div>
                </article>
             </Link>
            )
        })}
     </div>
    </>
    )
}

export default SingleItem