import "./App.css";
import React from "react";
import StyledButton, {
  FancyButton,
  SubmitButton,
} from "./components/Button/Button";
function App() {
  return (
    <div className="App">
      <StyledButton>Button</StyledButton>
      <StyledButton variant="outline">Button</StyledButton>
      <FancyButton as="a">Fancy Button</FancyButton>
      <SubmitButton>Submit Button</SubmitButton>
    </div>
  );
}

export default App;
