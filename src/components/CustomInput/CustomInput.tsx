import React, { useState } from "react";

import { X } from "react-feather";
import { Button, Form, Input } from "./styles";

interface CustomInputProps {
  text: string;
  onSubmit: (value: string) => void;
  editClass?: string;
  placeholder?: string;
  defaultValue?: string;
  buttonText?: string;
}
function CustomInput(props: CustomInputProps) {
  const {
    text,
    onSubmit,
    editClass,
    placeholder,
    defaultValue,
    buttonText,
  } = props;
  const [isCustomInput, setIsCustomInput] = useState(false);
  const [inputText, setInputText] = useState(defaultValue || "");

  const submission = (e: any) => {
    e.preventDefault();
    if (inputText && onSubmit) {
      setInputText("");
      onSubmit(inputText);
    }
    setIsCustomInput(false);
  };

  return (
    <div className="custom-input">
      {isCustomInput ? (
        <Form
          onSubmit={submission}
        >
          <Input
            type="text"
            onChange={(event) => setInputText(event.target.value)}
            autoFocus
          />
          <Button className="custom-input-edit-footer">
            <button className="btn" type="submit">{buttonText || "Enviar"}</button>
            <X onClick={() => setIsCustomInput(false)} className="closeIcon" />
          </Button>
        </Form>
      ) : (
        <p
          onClick={() => setIsCustomInput(true)}
        >
          {text}
        </p>
      )}
    </div>
  );
}

export default CustomInput;
