import axios from "axios";
import Router from "next/router";
import { API } from "../config";
import { getCookie } from "../helpers/auth";

const withUser = (Page) => {
  const WithAuthUser = (props) => <Page {...props} />;
  WithAuthUser.getInitialProps = async (context) => {
    const token = getCookie("token", context.req);
    let user = null;

    if (token) {
      try {
        const response = await axios.get(`${API}/user`, {
          headers: {
            authorization: `Bearer ${token}`,
            contentType: "application/json",
          },
        });
        console.log("response in withUser", response);
        user = response.data.user;
      } catch (error) {
        if (error.response.status === 401) {
          user = null;
        }
      }
    }

    if (user === null) {
      //   if (context.res) {
      //     // server
      //     return context.res.writeHead(302, {
      //       Location: "/",
      //     });
      //   } else {
      //     // client
      //     return Router.push("/");
      //   }
      // redirect
      context.res.writeHead(302, {
        Location: "/",
      });
      context.res.end();
    } else {
      return {
        ...(Page.getInitialProps ? await Page.getInitialProps(context) : {}),
        user,
      };
    }
  };

  return WithAuthUser;
};

export default withUser;
