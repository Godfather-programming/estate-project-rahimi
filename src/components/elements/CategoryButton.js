import { centerStyle } from "@/constants/styles";

function CategoryButton({type, category, changeHandler }) {
  return (
    <div style={centerStyle}>
      <label htmlFor={type}> {type} </label>
      <input
        type="radio"
        id={type}
        name="category"
        value={type}
        checked={category === type}
        // onChange={(e) => changeHandler(e)} equals with line 14
        onChange={changeHandler}
      />
    </div>
  );
}

export default CategoryButton;
