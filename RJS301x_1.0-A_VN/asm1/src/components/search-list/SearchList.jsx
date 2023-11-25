import searchs from "./search.json";
import "./SearchList.css";
import SearchListItem from "./SearchListItem";

const SearchList = () => {
  return (
    <div className="search-list">
      {searchs.map((search) => (
        <SearchListItem item={search} key={search.name} />
      ))}
    </div>
  );
};

export default SearchList;
