import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
function FakeApi03() {
  const [data, setData] = useState([]);

  const colorObject = {
    titileColor:{
        color:"darkOrange",
    },
    emailColor:{
      color:"green"
    },
    bodyColor:{
      color:'MediumVioletRed',
    }
  }
  // useEffect(() => {     
  //   fetch("https://jsonplaceholder.typicode.com/comments?_page=1&_limit=20").then((result) => {
  //     result.json().then((response) => {
  //       setData(response);
  //     });
  //   });
  // }, []);
  useEffect(() => {     
    fetch("https://jsonplaceholder.typicode.com/comments?_page=1&_limit=20").then((result) => {
      result.json().then((response) => {
        setData(response);
      });
    });
  }, []);
  console.log(data);

  const handlePageClick=((data)=> {
    // console.log("clicked...")
    // console.log(data) show selected page number
    console.log(data.selected) //give us page number as integer value
  })
  return (
    <>

    {/* next and previous is default value of pagination and we can add some ohher attribute in ReactPagination as below*/}
    <ReactPaginate 
        previousLabel={"Previous"} //default value
        nextLabel={"Next"} //default value
        breakLabel={"..."} //default value
        pageCount={20} //show total number of pages (suggested dynamic)
        marginPagesDisplayed={2} // how many pages at start and end will be show
        pageRangeDisplayed={3} // on click of breakLabel i.e. (...) three dots show hidden pages of break label 
        onPageChange={handlePageClick} // call this mehtod when user click on page
        containerClassName={'pagination justify-content-center'} // css class for unordered list
        pageClassName={'page-item'} //classname for each pages
        pageLinkClassName={'page-link'} //classname of a href tag
        previousClassName={'page-item'} // add same style for previous button as other because use same bootstrap class
        previousLinkClassName={'page-link'} //add same style for previous className for a href tag because use same class name as other
        nextClassName={'page-item'} // add same style for next button as other because use same bootstrap class
        nextLinkClassName={'page-link'} //add same style for next className for a href tag because use same class name as other
        breakClassName={'page-item'} // add same style for breakLabel button as other because use same bootstrap class
        breakLinkClassName={'page-link'} //add same style for breakLabel className for a href tag because use same class name as other
        activeClassName={"active"} // to show which page is currently is displayed        
      />


      {/* <div className="container">
        <div className="row">
          {data.map((item,index) => (
            <div className="col col-md-3" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.id}</h5>
                  <h6 className="card-subtitle mb-2" id="titileColor" style={colorObject.titileColor}>
                    {item.name}
                  </h6>
                  <h6 className="card-subtitle mb-2 " id="emailColor" style={colorObject.emailColor}>
                    {item.email}
                  </h6>
                  <p className="card-text" style={colorObject.bodyColor}>                    
                   {item.body}
                  </p>
                  <button type="button" class="btn btn-info m-3">Button 1</button>
                  <button type="button" class="btn btn-warning m-3">Button 2 </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
}

export default FakeApi03;
