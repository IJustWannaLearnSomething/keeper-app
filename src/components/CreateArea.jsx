import React, { useState } from "react";

function CreateArea(props) {
  const [form, setForm] = useState({ title: "", content: "" });

  function changeHandler(event) {
    const value = event.target.value;
    const name = event.target.name;

    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }

  return (
    <div className="note">
      <input
        onChange={changeHandler}
        name="title"
        placeholder="Title"
        value={form.title}
      />
      <textarea
        onChange={changeHandler}
        name="content"
        placeholder="Take a note..."
        rows="3"
        value={form.content}
      />
      <button
        onClick={() => {
          setForm({
            title: "",
            content: "",
          });
          return props.addItems(form);
        }}
      >
        ADD
      </button>
    </div>
  );
}

export default CreateArea;
