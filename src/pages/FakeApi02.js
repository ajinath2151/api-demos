import React, { useEffect, useState } from "react";

function FakeApi02() {
    
  const [data, setData] = useState([]);

  const styleObject = {
    title: {
      color:"green",
    }
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
      result.json().then((response) => {
        setData(response);
      });
    });
  }, []);
  console.log(data);
  return (
    <>
          <div className="container">
        <div className="row">
      {data.map((item, index) => (
        <div key={index} className="col-md-4">
          <div className="card">
            <div className="card-body">
              <span className="card-title">UserId : {item.userId}</span> &nbsp;
              <span className="card-title">Id : {item.id}</span>
              {/* substring use for limit the character with start and end index */}
              <h3 className="card-title" id="title" style={styleObject.title}>{item.title.substring(0, 36)}</h3>
              <p className="card-text">
                {item.body.substring(0, 130)}
                {/* we can use syntax like below if data not available in api/not provided by api */}
                {item.masaj ? item.masaj : "masag not available"}
                <br />
                <button type="button" className="btn btn-danger mt-3 mx-3">Danger</button>
                <button type="button" className="btn btn-success mt-3 mx-3">Success</button>
              </p>
            </div>
          </div>
        </div>
      ))}
      </div>
      </div>
    </>
  );
}

export default FakeApi02;
