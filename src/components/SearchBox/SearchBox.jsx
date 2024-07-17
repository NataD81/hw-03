import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => (
  <div className={s.searchBox}>
    <label>Find contacts by name</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default SearchBox;
