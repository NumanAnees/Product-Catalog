import Layout from "../../components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { getCookie, isAuth } from "../../helpers/auth";
import { useEffect, useState } from "react";
import { API } from "../../config";
import SingleItem from "../../Components/SingleItem";
import withUser from "../withUser";

// import withUser from "../withUser";

const User = ({ data, products }) => {
  const Arr = [];
  const router = useRouter();
  useEffect(() => {
    !isAuth() && router.push("/login");
  });
  console.log(products);
  console.log(data);
  for (var i = 0; i < data.length; i++) {
    products.forEach((element) => {
      if (element.id == data[i].product_id) {
        return Arr.push(element);
      }
    });
  }

  return (
    <>
      <Layout>{isAuth() && <SingleItem items={Arr} Home={false} />}</Layout>
    </>
  );
};
export async function getServerSideProps({ req }) {
  const token = getCookie("token", req);

  const response = await axios.get(`${API}/userBookMarks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const newResponse = await axios.get(`${API}/products`);
  return {
    props: {
      data: response.data,
      products: newResponse.data,
    },
  };
}

export default User;
