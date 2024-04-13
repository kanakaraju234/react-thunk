
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
    <div className="row mt-5">
      <div className="col-md-6">
        <button onClick={handlePreviousPage}>Previous</button>
      </div>
      <div className="col-md">
      
      <label>Page number:</label>
      <select value={props.selectedPage} onChange={handlePageChange}>
        {pageNumbers}
      </select>

      </div>
      <div className="col-md">
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};
