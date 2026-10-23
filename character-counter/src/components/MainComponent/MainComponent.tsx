import { useState } from "react";

import { TextInput } from "../TextInput/TextInput";

export default function MainComponent() {
  const [textInput, setTextInput] = useState("");

  // function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setTextInput(e.target.value);
  // }

  function handleTextChange(changingText: string) {
    setTextInput(changingText);
  }
  return (
    <div className="mt-30 ml-30">
      <TextInput onTextChange={handleTextChange} />
    </div>
  );
}
