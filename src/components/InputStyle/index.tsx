import { useEffect, useRef, useState } from 'react';
import './_index.scss';
import { BsEye } from "react-icons/bs";

interface DefaultProps {
  type: 'password' | 'text' | 'email';
  name: string;
  id: string;
  title: string;
}

const Default = (props: DefaultProps): JSX.Element => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isShowValue, setIsShowValue] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null!);

  const handleClick = () => {
    setIsFocus(true);
    inputRef.current.focus();
  };

  return (
    <div className='inputStyle__container'>
      <div className={`inputStyle__default ${(isFocus) ? 'inputStyle__default--focus' : ''}`}>
        <label className='font__normal' onClick={handleClick} htmlFor={props.name}>{props.title}</label>
        <input onBlur={() => {
          const isHasValue = inputRef.current.value !== '';
          setIsFocus(isHasValue)
        }} ref={inputRef} type={props.type !== 'password' ? props.type : isShowValue ? 'text' : 'password'} name={props.name} id={props.id} />
      </div>
      {
        props.type === 'password' && <BsEye onClick={() => setIsShowValue((prev: boolean) => !prev)} className={`inputStyle__icon ${isShowValue ? 'inputStyle__icon--show' : ''}`} />
      }
    </div>
  )
};

Default.defaultProps = {
  type: 'text',
};

export default {
  Default
};
