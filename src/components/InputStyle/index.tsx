import { useRef, useState, useCallback } from 'react';
import './_index.scss';
import { BsEye, BsCheckCircleFill } from "react-icons/bs";

interface DefaultProps {
  type: 'password' | 'text' | 'email';
  name: string;
  id: string;
  title: string;
}

const Default = (props: DefaultProps): JSX.Element => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null!);

  const handleClick = useCallback(() => {
    setIsFocus(true);
  }, []);

  return (
    <div className='inputStyle__container'>
      <div className={`inputStyle__default ${(isFocus) ? 'inputStyle__default--focus' : ''}`}>
        <label className='font__normal fontSize__sm' onClick={handleClick} htmlFor={props.name}>{props.title}</label>
        <input onBlur={() => {
          const isHasValue = inputRef.current.value !== '';
          setIsFocus(isHasValue)
        }} ref={inputRef} type={props.type} name={props.name} id={props.id} />
      </div>
    </div>
  )
};

const Password = (props: DefaultProps): JSX.Element => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string | undefined>(undefined);
  const [isShowValue, setIsShowValue] = useState<boolean>(false);
  const [isMatchLength, setIsMatchLength] = useState<boolean>(false);
  const [isMatchNumber, setIsMatchNumber] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    setIsFocus(true);
  }, []);

  const checkPasswordFormat = useCallback((_value: string) => {
    const regex8digits = new RegExp("^(?=.{8,})");
    const regexNumber = new RegExp("^(?=.*[0-9])");
    setIsMatchLength(regex8digits.test(_value));
    setIsMatchNumber(regexNumber.test(_value))
    setInputValue(_value.trim());
  }, []);

  return (
    <>
      <div className='inputStyle__container'>
        <div className={`inputStyle__default ${(isFocus) ? 'inputStyle__default--focus' : ''}`}>
          <label className='font__normal' onClick={handleClick} htmlFor={props.name}>{props.title}</label>
          <input onBlur={() => {
            const isHasValue = inputValue !== '';
            setIsFocus(isHasValue)
          }} type={isShowValue ? 'text' : 'password'} value={inputValue} name={props.name} id={props.id} onChange={(element) => checkPasswordFormat(element.target.value)} />
        </div>
        <BsEye onClick={() => setIsShowValue((prev: boolean) => !prev)} className={`inputStyle__icon ${isShowValue ? 'inputStyle__icon--show' : ''}`} />
      </div>
      {
        inputValue && (
          <div className='inputStyle__validated'>
            <div className={`${isMatchLength ? 'inputStyle__validated--check' : ''}`}><BsCheckCircleFill className='inputStyle__validated--icon' /><p className='inputStyle__validated--text'>8 Characters min.</p></div>
            <div className={`${isMatchNumber ? 'inputStyle__validated--check' : ''}`}><BsCheckCircleFill className='inputStyle__validated--icon' /><p className='inputStyle__validated--text'>One number</p></div>
          </div>
        )
      }
    </>
  )
}

Default.defaultProps = {
  type: 'text',
};

export default {
  Default,
  Password
};
