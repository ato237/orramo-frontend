import React, { useState } from "react";
import Axios from "axios";

function Postform() {
  const [data, setData] = useState([]);
  const [mtnValue, setMtnValue] = useState(0);
  const [orangeValue, setOrangeValue] = useState(0);
  const [status, setStatus] = useState("");

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(
      `http://localhost:8082/api/calculate/orange/${orangeValue}/${status}`,
      {}
    ).then((response) => {
      console.log(response);
      setData(response.data);
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Orange Value</label>
          <input
            type="text"
            name="orange"
            value={orangeValue}
            onChange={(e) => {
              setOrangeValue(e.target.value);
            }}
          />
        </div>

        {/*<div>
                  <label>Status Value</label>
                  <input
                      type="text"
                      name="status"
                      value={status}
                      onChange={(e) => {
                          setStatus(e.target.value);
                      }}
                  />
         
                    </div>*/}
        <div>
          <input
            type="radio"
            name="status"
            value="send"
            onChange={handleStatus}
          />{" "}
          Send
          <input
            type="radio"
            name="status"
            value="withdraw"
            onChange={handleStatus}
          />{" "}
          Withdraw
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        <div>
          {data.map((datum) => (
              <h1 key={5}>{datum.orangeCharge}</h1>
          ))}
                  {data.map((datum) => (
              <h1 key={5}>{datum.orangeTotal}</h1>
          ))}
        </div>
      </form>
    </div>
  );
}

export default Postform;
