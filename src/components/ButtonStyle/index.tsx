import './_index.scss';
import { buttonList } from './utils';

interface DefaultProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

interface SignUpProps {
  icon: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Default = (props: DefaultProps): JSX.Element => {
  return (
    <button type={props.type} className="flex__cc font__normal buttonStyle__default" onSubmit={props.onClick} onClick={props.onClick}>
      {props.text}
    </button>
  )
};

const SocialSignUp = (props: SignUpProps): JSX.Element => {
  return (
    <button type={props.type} className="flex__bc font__normal buttonStyle__social" onClick={props.onClick}>
      {
        buttonList[props.icon].icon({
          className: "buttonStyle__social--icon"
        })
      }
      <p className="buttonStyle__social--text">{buttonList[props.icon].text}</p>
    </button>
  );
};

export default {
  Default,
  SocialSignUp
};
