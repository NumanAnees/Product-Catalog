import Layout from "../../components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { getCookie, isAuth } from "../../helpers/auth";
import { useEffect } from "react";
// import withUser from "../withUser";

const User = ({ user }) => {
  const router = useRouter();

  useEffect(() => {
    !isAuth() && router.push("/login");
  });

  return (
    <>
      <Layout>
        {isAuth() && (
          <h1 className="text-center title-text">
            {isAuth().firstName} 's Dashboard
          </h1>
        )}
      </Layout>
    </>
  );
};

export default User;
