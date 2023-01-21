import styles from './Filter.module.scss';

const Filter = ({ value, changeFilter }) => {
  return (
    <label>
      Find contacts by name
      <input onChange={changeFilter} type="text" value={value}></input>
    </label>
  );
};
export default Filter;
