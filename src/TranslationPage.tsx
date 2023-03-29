import React, { useState } from "react";
import axios from "axios";

const TranslationPage = () => {
  const [text, setText] = useState("");
  const [translation, setTranslation] = useState("");

  const handleTranslate = async () => {
    const response = await axios.post(
      "https://translation.googleapis.com/language/translate/v2",
      {
        q: text,
        target: "pt",
        key: process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY,
      }
    );

    setTranslation(response.data.data.translations[0].translatedText);
  };

  return (
    <div>
      <h1>Translation Page</h1>
      <form>
        <label>
          Enter text in English:
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </label>
        <button type="button" onClick={handleTranslate}>
          Translate
        </button>
      </form>
      {translation && (
        <div>
          <h2>Translation in Portuguese:</h2>
          <p>{translation}</p>
        </div>
      )}
    </div>
  );
};

export default TranslationPage;
