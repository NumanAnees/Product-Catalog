import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { isAuth } from "../helpers/auth";

const SingleItem = ({
  items,
  query,
  minPrice,
  maxPrice,
  BookmarkButton,
  Home,
}) => {
  const router = useRouter();
  const handleBookmark = async (e, id) => {
    e.preventDefault();
    if (isAuth()) {
    } else {
      alert("Please Login First");
      router.push("/login");
    }
  };
  return (
    <>
      {Home ? (
        <div className="section-center">
          {items
            .filter((item) => item.name.toUpperCase().includes(query))
            .filter((item) => item.price > minPrice && item.price < maxPrice)
            .map((item) => {
              const { id, price, name, img, desc, designer, url } = item;
              return (
                <article className="menu-item">
                  {/* <img src="/images/img.jpeg"  alt="img" className='photo' /> */}
                  <Link href={url} key={id}>
                    <Image
                      src={img}
                      height={150}
                      width={150}
                      className="pointer"
                    />
                  </Link>
                  <div className="item-info">
                    <header>
                      <h4>{name}</h4>
                    </header>
                    <p className="item-text">{desc.substr(0, 40)}</p>
                    <p className="item-text">Designer: {designer}</p>
                    <p className="item-text">Price: ${price}</p>
                    <button
                      className="btn btn-info btn-sm mt-2"
                      onClick={(e) => handleBookmark(e, id)}
                    >
                      Bookmark
                    </button>
                  </div>
                </article>
              );
            })}
        </div>
      ) : (
        <div className="section-center mt-2">
          {items.map((item) => {
            const { id, price, name, img, desc, designer, url } = item;
            return (
              <article className="menu-item">
                {/* <img src="/images/img.jpeg"  alt="img" className='photo' /> */}
                <Link href={url} key={id}>
                  <Image
                    src={img}
                    height={150}
                    width={150}
                    className="pointer"
                  />
                </Link>
                <div className="item-info">
                  <header>
                    <h4>{name}</h4>
                  </header>
                  <p className="item-text">{desc.substr(0, 40)}</p>
                  <p className="item-text">Designer: {designer}</p>
                  <p className="item-text">Price: ${price}</p>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SingleItem;
