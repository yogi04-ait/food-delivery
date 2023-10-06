const Shimmer = () => {
  return (
    <>
      {" "}
      <div className="search-container">
        <input type="text" placeholder="Search" />
        <button
          className="search-btn"
          onClick={() => {
            // Need to filter data
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="resturant-list">
        {Array(10)
          .fill("")
          .map((_e, index) => (
            <div key={index} className="shimmer-card">
              <div className="image-unit" key={index + 100}></div>
              <div className="name-unit" key={index + 200}></div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
