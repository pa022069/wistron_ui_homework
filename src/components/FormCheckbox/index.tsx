import "./_index.scss";

interface Props {
  text: string | JSX.Element;
}

const FormCheckbox = (props: Props): JSX.Element => {
  return (
    <div className="formCheckbox">
      <div className="formCheckbox__label">
        <input type="checkbox" name="checkbox" id="checkbox" />
        <label htmlFor="checkbox" />
      </div>
      <p className="formCheckbox__text font__normal">{props.text}</p>
    </div>
  );
};

export default FormCheckbox;
