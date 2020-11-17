import * as React from "react";
import { render } from "react-dom";

const AppShell: React.FC = () => {
  return <div>Hello, module federation!</div>;
};

render(<AppShell />, document.getElementById("app"));
