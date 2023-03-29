type OptionSortProps = {
  handleClickOption: (arg0: React.MouseEvent<HTMLLIElement>) => void;
  optionClassName: string;
  option: string;
}

function OptionSort({handleClickOption, optionClassName, option}: OptionSortProps) {
  return(
    <li className={`places__option ${option === optionClassName ? 'places__option--active' : ''}`} tabIndex={0} onClick={(evt) => handleClickOption(evt)}>{option}</li>
  );
}

export default OptionSort;
