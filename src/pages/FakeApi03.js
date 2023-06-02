import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
function FakeApi03() {
  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  //for filter
  const [recoreds, setRecoreds] = useState(items);

  let pageLimit = 20;

  const colorObject = {
    titileColor: {
      color: "darkOrange",
    },
    emailColor: {
      color: "green",
    },
    bodyColor: {
      color: "MediumVioletRed",
    },
  };
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/comments?_page=1&_limit=20").then((result) => {
  //     result.json().then((response) => {
  //       setData(response);
  //     });
  //   });
  // }, []);
  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${pageLimit}`
      ); 
      const data = await res.json();
      const totalNoOfPages = res.headers.get("x-total-count");
      // console.log(totalNoOfPages);
      setPageCount(Math.ceil(totalNoOfPages / 20)); //20 is limit for show no. of recored in one page
      // console.log(totalNoOfPages/20);
      setItems(data);
      setRecoreds(data);
    };
    getComments();
  }, []);
  // console.log(items);

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${pageLimit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    // console.log("clicked...")
    // console.log(data) show selected page number
    // console.log(data.selected); //give us page number as integer value
    let currentPage = data.selected + 1;
    const commentFromServer = await fetchComments(currentPage);
    setItems(commentFromServer);
  };
  const filterFunciton = (event) => {
    setRecoreds(
      items.filter((f) => f.name.toLowerCase().includes(event.target.value))
    );
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <label htmlFor="searchRecoreds" style={{ fontSize: "30" }}>
            <h2> Search Recoreds Here </h2>
          </label>
          <input
            type="text"
            name="searchRecor  eds"
            id="searchRecoreds"
            className="form-control"
            onChange={filterFunciton}
            placeholder="Search by name..."
          />
          {/* {items.map((item,index) => ( */}
          {recoreds.map((item, index) => (
            <div className="col col-md-3" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.id}</h5>
                  <h6
                    className="card-subtitle mb-2"
                    id="titileColor"
                    style={colorObject.titileColor}
                  >
                    {item.name}
                  </h6>
                  <h6
                    className="card-subtitle mb-2 "
                    id="emailColor"
                    style={colorObject.emailColor}
                  >
                    {item.email}
                  </h6>
                  <p className="card-text" style={colorObject.bodyColor}>
                    {item.body}
                  </p>
                  <button type="button" className="btn btn-info m-3">
                    Button 1
                  </button>
                  <button type="button" className="btn btn-warning m-3">
                    Button 2{" "}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* next and previous is default value of pagination and we can add some ohher attribute in ReactPagination as below*/}
      <ReactPaginate
        previousLabel={"Previous"} //default value
        nextLabel={"Next"} //default value
        breakLabel={"..."} //default value
        pageCount={pageCount} //show total number of pages (suggested dynamic)
        marginPagesDisplayed={3} // how many pages at start and end will be show
        pageRangeDisplayed={3} // on click of breakLabel i.e. (...) three dots show hidden pages of break label
        onPageChange={handlePageClick} // call this mehtod when user click on page
        containerClassName={"pagination justify-content-center"} // css class for unordered list
        pageClassName={"page-item"} //classname for each pages
        pageLinkClassName={"page-link"} //classname of a href tag
        previousClassName={"page-item"} // add same style for previous button as other because use same bootstrap class
        previousLinkClassName={"page-link"} //add same style for previous className for a href tag because use same class name as other
        nextClassName={"page-item"} // add same style for next button as other because use same bootstrap class
        nextLinkClassName={"page-link"} //add same style for next className for a href tag because use same class name as other
        breakClassName={"page-item"} // add same style for breakLabel button as other because use same bootstrap class
        breakLinkClassName={"page-link"} //add same style for breakLabel className for a href tag because use same class name as other
        activeClassName={"active"} // to show which page is currently is displayed
      />
    </>
  );
}

export default FakeApi03;
