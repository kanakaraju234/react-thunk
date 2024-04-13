import "../core/Pagination.css"
export const Pagination = (props) => {
  
  const totalPageCount = Math.ceil(props.total / props.pageLimit);
  console.log(totalPageCount,"pageCount")
  const handlePageChange = (event) => {
    props.setSelectedPage(parseInt(event.target.value));
  };

  // Function to handle previous page
  const handlePreviousPage = () => {
    props.setSelectedPage(prevPage => Math.max(prevPage - 1, 1));
  };

  // Function to handle next page
  const handleNextPage = () => {
    props.setSelectedPage(prevPage => Math.min(prevPage + 1, totalPageCount));
  };

  
  const pageNumbers = [];
  for (let i = 1; i <= totalPageCount; i++) {
    pageNumbers.push(<option key={i} value={i}>{i}</option>);
  }
  console.log(pageNumbers,"PageNumbers")

  return (
    <div className="row mt-5 justify-content-center">
      <div className="col-auto previousBtn">
        <button onClick={handlePreviousPage}>Previous</button>
      </div>
      <div className="col-auto page-number">
      
      <label>Page No:</label>
      <select value={props.selectedPage} onChange={handlePageChange}>
        {pageNumbers}
      </select>

      </div>
      <div className="col-auto nextBtn">
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};
