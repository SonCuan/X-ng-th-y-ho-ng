import React from "react";
import { Link } from "react-router-dom";

const LayoutsAdmin = ({ children }) => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/admin"> Trang chủ</Link>
          </li>
          <li>
            <Link to="report">Thong ke </Link>
          </li>
          <li>
            <Link to="users">User</Link>
          </li>
        </ul>
      </header>
      <main className="container">
        <div className="row">
            <div className="col-3">
                <div className="sidebar">
                    <h1>Hello, Admin </h1>
                        <ul>
                            <li>
                                <Link>Trang chu </Link>
                            </li>
                            <li>
                                <Link>Trang chu </Link>
                            </li>
                            <li>
                                <Link>Trang chu </Link>
                            </li>
                            <li>
                                <Link>Trang chu </Link>
                            </li>
                            <li>
                                <Link>Trang chu </Link>
                            </li>
                        </ul>
                 </div>
            </div>
            <div className="col-6"> {children}</div>
        </div>
      </main>
      {children}
    </div>
  );
};

export default LayoutsAdmin;
