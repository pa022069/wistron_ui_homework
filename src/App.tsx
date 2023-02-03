import { useState } from "react";
import SocialSignUp from "./components/SocialSignUp";

const App = (): JSX.Element => {
  return (
    <div className="fullWrapper flex__center">
      <div>
        <SocialSignUp />
      </div>
    </div>
  );
};

export default App;
