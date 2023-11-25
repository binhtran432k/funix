import { SearchList, SearchPopup } from "../../components";
import { Default } from "../../layouts";
import "./Search.css";

const Search = () => {
  return (
    <Default>
      <div className="search">
        <div className="search__body container">
          <SearchPopup />
          <SearchList />
        </div>
      </div>
    </Default>
  );
};

export default Search;
