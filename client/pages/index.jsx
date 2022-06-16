import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import SingleItem from "../Components/SingleItem";
import AllItems from "../data/Data";
import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";
import { Slider } from "antd";
import Layout from "../Components/Layout";

export default function Home() {
  const [items, setItems] = useState(AllItems);
  const [minPrice, SetMinPrice] = useState(0);
  const [maxPrice, SetMaxPrice] = useState(100);
  const [inp, SetInp] = useState("");
  const handleChange = (e) => {
    SetInp(e.target.value.toUpperCase());
  };
  const handleRangeChange = (e) => {
    SetMinPrice(e[0]);
    SetMaxPrice(e[1]);
  };
  return (
    <>
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div>
              <div className="col-md-8 main-div">
                <div className="div-input d-flex flex-row">
                  <input
                    type="text"
                    className="Search_input"
                    value={inp}
                    placeholder="Enter name here..."
                    onChange={(e) => handleChange(e)}
                  />
                  <h6 className="item-text priceHeading">Price: </h6>
                  <Slider
                    range={{
                      draggableTrack: true,
                    }}
                    defaultValue={[20, 50]}
                    className="rangeSlider"
                    onChange={(e) => handleRangeChange(e)}
                  />
                </div>
                <div className="div-content">
                  <SingleItem
                    items={items}
                    query={inp}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
