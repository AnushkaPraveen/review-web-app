import React from "react";
import Price from "./priceList";
import './home.css'
import { Link } from "react-router-dom";

const Home=()=>{
return (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Canteen Matters</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/canteen">
              <button type="button" class="btn btn-primary">
                Price List
              </button></Link>
              <Link to="/canteen">
              <button type="button" class="btn btn-primary">
                Compliant
              </button></Link>
              <Link to="/canteen">
              <button type="button" class="btn btn-primary">
                Review
              </button></Link>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
     
      </div>
    </div>

  </div>
);
}

export default Home;