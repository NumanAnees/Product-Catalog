import Layout from "../../Components/Layout";
import { useRouter } from "next/router";
import axios from "axios";
import { getCookie, isAuth } from "../../helpers/auth";
import { useEffect, useState } from "react";
import { API } from "../../config";
import SingleItem from "../../Components/SingleItem";

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
      <Layout>
        {Arr.length > 0 ? (
          <SingleItem items={Arr} Home={false} />
        ) : (
          <h1 className="text-center title-text">
            Sorry, You do not have any Bookmarks
          </h1>
        )}
      </Layout>
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
