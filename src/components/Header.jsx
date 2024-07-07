import { Link } from "react-router-dom";
import * as React from "react";
import "../index.scss";


export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Home 
          </a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link a-hover" href="/Login">
                Login
              </a>
              <a className="nav-link a-hover" href="/shop">
                Shop
              </a>
              
              <a className="nav-link a-hover" href="/Register">
                Register
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

