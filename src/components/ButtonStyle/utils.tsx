import { FaFacebookF, FaGoogle } from "react-icons/fa";

export const buttonList: {
  [props: string]: {
    icon: (_props: any) => JSX.Element;
    text: string;
  }
} = {
  google: {
    icon: (_props: any) => <FaGoogle {..._props} />,
    text: 'Sign up with Google'
  },
  facebook: {
    icon: (_props: any) => <FaFacebookF {..._props} />,
    text: 'Sign up with Facebook'
  }
};