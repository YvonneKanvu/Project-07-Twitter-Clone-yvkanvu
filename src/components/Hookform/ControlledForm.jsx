import React, { useState } from "react";
import ErrorMessage from "./Errors";

import TweetEditorButtons from "../Timeline/TweetEditorButtons";

function ControlledForm() {
  const [Input, setInput] = useState("");
  const [InputError, setInputError] = useState("");

  function onNameInputChange(event) {
    setInput(event.target.value);

    if (event.target.value.length < 3) {
      setInputError("Votre tweet doit avoir au moins 3 caractères ");
    } else if (event.target.value.length > 180) {
      setInputError("Votre nom doit avoir moins de 180 caractères ");
    } else {
      setInputError("");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Votre tweet  : ${Input}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          required
          maxLength={180}
          minLength={3}
          type="text"
          value={Input}
          onChange={onNameInputChange}
          placeholder="What's happening"
        />
        <ErrorMessage message={InputError} />
      </div>

      <div>
        <TweetEditorButtons type="submit"Tweet/>
      </div>
    </form>
  );
}

export default ControlledForm;
