import ReactDOM from "react-dom/client";

import Routepath from "./routes";
import { Route } from "react-router-dom";
import Theme from "./Styles/Theme";
import { GlobalStyles } from "./Styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <Theme>
      <GlobalStyles />
      <Routepath />
    </Theme>
  </div>
);
