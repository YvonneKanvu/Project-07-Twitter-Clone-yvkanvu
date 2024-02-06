import React from "react";
import ErrorMessage from "./Errors";
import axios from "axios";
import { useForm } from "react-hook-form";
import TweetEditorInput from "../Timeline/TweetEditorInput";
import TweetEditorButtons from "../Timeline/TweetEditorButtons";

function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function postData(url, data) {
    // axios
    //   .post(url, data)
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error.message));
    console.log('submited');
  }

  return (
    <form
      onSubmit={handleSubmit((data, event) => {
        postData("http://localhost:5173/", data);
        event.target.reset();
      })}
    >
      <div>
        <TweetEditorInput/>
        <input
          type="text"
          {...register("input", {
            required: "Ce champ est obligatoire",
            maxLength: {
              value: 180,
              message: "Votre nom doit avoir moins de 180 caracteres",
            },
          })}
          placeholder="What's happening?"
        />
        <ErrorMessage message={errors.input?.message} />
      </div>
      <div>
        
        <TweetEditorButtons type="submit"Tweet/>
      </div>
    </form>
  );
}

export default ReactHookForm;
