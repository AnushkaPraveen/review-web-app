import React, { useState, useEffect } from "react";
import axios from "axios";
import "./pricelist.css"

const Price = () => {
  const [value, setValue] = useState("Sheet1");
  const [allSeriesData, setAllSeriesData] = useState([]);

  useEffect(() => {
    DataAPI();
  }, [value]);

  const DataAPI = async () => {
    const SHEET_ID = "1sqvThauV2Dd8RbX3FcWg2PTw0nTk1Cv4G9_g2hQcM74";
    const SHEET_NAME = value;
    const API_KEY = "AIzaSyAhJtZdImbIMRtDzHWRFBXx3cVEjg4qzME";
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?valueRenderOption=FORMATTED_VALUE&key=${API_KEY}`;
    axios
      .get(url)
      .then(function (response) {
        // handle success
        formatResponse(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        //onError(error);
      })
      .finally(function () {
        // always executed
        console.log("ALL DONE LOADING DATA");
      });
  };
  function formatResponse(response) {
    const keys = response.values[0];
    const data = response.values.slice(1);
    const obj = data.map((arr) =>
      Object.assign({}, ...keys.map((k, i) => ({ [k]: arr[i] })))
    );
    setAllSeriesData(obj);
    console.log(obj);
  }

  const changeVale = (e) => {
    setValue(e);
    console.log(e);
  };
  return (
    <div>
      <h1 className="canteen-title mt-5 mb-5">Canteen Price List</h1>
      <img src={require("../images/canteen1.jpg")} className="img-fluid mb-5" alt="..."></img>
      <div>
      <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" value="Goda" onChange={(value) => {
            changeVale(value.target.value);
          }}/>
<label class="btn btn-outline-warning btn-lg m-2" for="option1">Goda</label>

<input type="radio" class="btn-check" name="options" id="option2" value="GodaUda" autocomplete="off" onChange={(value) => {
            changeVale(value.target.value);
          }}/>
<label class="btn btn-outline-warning btn-lg m-2" for="option2">Goda Uda</label>

<input type="radio" class="btn-check" name="options" id="option3" value="Wala" autocomplete="off" onChange={(value) => {
            changeVale(value.target.value);
          }}/>
<label class="btn btn-outline-warning btn-lg m-2" for="option3">Wala</label>

<input type="radio" class="btn-check" name="options" id="option4" value="L" autocomplete="off" onChange={(value) => {
            changeVale(value.target.value);
          }}/>
<label class="btn btn-outline-warning btn-lg m-2" for="option4">L</label>
        {/* <select
          className="form-select"
          aria-label="Default select example"
          onChange={(value) => {
            changeVale(value.target.value);
          }}
        >
          <option selected>Select the Canteen</option>
          <option value="Goda">Goda </option>
          <option value="GodaUda">Goda Uda </option>
          <option value="Wala">Wala </option>
          <option value="L">L </option>
          <option value="Staff">Staff </option>
          <option value="Wala">Civil </option>
        </select> */}
      </div>

      <div className="container">
      {
            (() => {
                switch(true) {
                        
                    case(value==='Goda'): {
                            return (
                                <p className="canteen-title">Goda Canteen Price List</p>
                            )
                        }
                    break;
                        
                    case(value==='GodaUda'): {
                        return (
                            <p className="canteen-title">Goda Uda Canteen Price List</p>
                        )
                    }
                    break;
                    
                    case(value==='Wala'): {
                        return (
                            <p className="canteen-title">Wala Canteen Price List</p>
                        )
                    }
                    break;

                    case(value==='L'): {
                        return (
                            <p className="canteen-title">L Canteen Price List</p>
                        )
                    }
                    break;
                    case(value==='Staff'): {
                        return (
                            <p className="canteen-title">Staff Canteen Price List</p>
                        )
                    }
                    break;
                    }
            })()  
        }  
        <table className="table table-bordered mt-5">
        <thead className="table-dark">
   {allSeriesData!=''?( <tr>
      <th scope="col">Item Name</th>
      <th scope="col">Item Price</th>
    </tr>):null}
  </thead>
  <tbody>
        {allSeriesData.map((item) => (
          <tr key={item.id}>
          <td>{item.Name}</td>
          <td>{item.Price}</td>
          
      </tr>
        ))}
        </tbody>
        </table>
      </div>
    </div>
  );
};

export default Price;
