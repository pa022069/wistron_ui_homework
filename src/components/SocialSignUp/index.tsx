import './_index.scss';
import { buttonList } from './utils';

interface Props {
  type: string;
}

const SocialSignUp = ({ type }: Props): JSX.Element => {
  return (
    <a className="flex__bc font__normal buttonStyle__social">
      {
        buttonList[type].icon({
          className: "buttonStyle__social--icon"
        })
      }
      <p className="buttonStyle__social--text">{buttonList[type].text}</p>
    </a>
  );
};

export default SocialSignUp;
