import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Home = () => {
  const {state, dispatch} = useContext(ProductContext);
  return (
    <div>
      <section className="product">
        <div className="container">
          <div className="row">
            {state.products.map((item, index) => (
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 product-item" key={index}>
                <div className="card" style={{width: "18rem"}}>
                  <img src={item.thumbnail} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      {item.description}
                    </p>
                    <a href="#" className="btn btn-info">
                      Xem chi tiet
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
