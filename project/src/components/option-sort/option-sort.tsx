import { memo } from 'react';

type OptionSortProps = {
  onClickOption: (arg0: React.MouseEvent<HTMLLIElement>) => void;
  optionClassName: string;
  option: string;
}

function OptionSort({onClickOption, optionClassName, option}: OptionSortProps) {

  return(
    <li className={`places__option ${option === optionClassName ? 'places__option--active' : ''}`} tabIndex={0} onClick={(evt) => onClickOption(evt)}>{option}</li>
  );
}

export default memo(OptionSort);
