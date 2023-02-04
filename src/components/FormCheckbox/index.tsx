import './_index.scss';

interface Props {
  checked: boolean;
  text: string | JSX.Element;
}

const FormCheckbox = (props: Props): JSX.Element => {
  return (
    <div className="formCheckbox">
      <div>
        <label htmlFor="form-checkbox" />
        <input type="checkbox" readOnly name="form-checkbox" id="form-checkbox" checked={props.checked} />
      </div>
      <p className="formCheckbox__text">{props.text}</p>
    </div>
  );
};

export default FormCheckbox;