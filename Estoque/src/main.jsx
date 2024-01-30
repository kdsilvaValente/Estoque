import ReactDOM from "react-dom/client";

import Routepath from "./routes";
import { Route } from "react-router-dom";
import Theme from "./Styles/Theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <Theme>
      <Routepath />
    </Theme>
  </div>
);
