const SearchBar = () => {
  return (
    <div className="homeContent" id="ngulamammt">
      <input
        className="searchInput"
        type="text"
        placeholder="Cerca un prodotto.."
      />
      <i
        onClick={() => {
          alert("clicked");
        }}
        className="material-icons"
        style={{
          border: "2px solid",
          backgroundColor: "lightblue",
          borderRadius: "10px",
          marginLeft: "5px",
        }}
      >
        search
      </i>
    </div>
  );
};

export default SearchBar;
