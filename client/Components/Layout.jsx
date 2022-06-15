import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {MenuOutlined } from "@ant-design/icons";




const Layout = ({ children }) => {
    const head = () => (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
            <link rel="stylesheet" href="/static/styles/style.css" />
        </>
    );
const nav = ()=>{
    return <nav class="navbar navbar-expand-lg navbar-light bg-light navb">
     <Link href="/">
                <div>
                        <img src="/images/shuffle.png" alt="logo" height="50px" width="50px" className='logo pointer'/> 
                        <label className='logo-label text-center'><span className='text-center ms-2 text-xl logo-text'>Catalog App</span></label>   
                </div>
     </Link>

  <button class="navbar-toggler MenuOutline" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <MenuOutlined className='MenuOutlined'/>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
         <li className="nav-item p-1">
                <Link href="/">
                  <a className="nav-link text-dark font-italic text-center text-top home-btn"> <span className='text-span4'>Home</span></a>
                </Link>
            </li>

                    <li className="nav-item p-1">
                        <Link href="/login">
                            <a className="nav-link text-dark  text-center text-top"><span className='text-span4'>Login</span></a>
                        </Link>
                    </li>
                    <li className="nav-item p-1">
                        <Link href="/register">
                            <a className="nav-link text-dark  text-center text-top"><span className='text-span4'>Register</span></a>
                        </Link>
                    </li>
            </ul>
        </div>
    </nav>     
     }
    return (
        <>
                {head()}
                 {nav()} 
                 <div className='bg-col'>{children}</div>
                 <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
        </>
    );
};

export default Layout;