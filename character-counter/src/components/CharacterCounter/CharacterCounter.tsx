import { useState } from "react";

import { StatsDisplay } from "../StatsDisplay/StatsDisplay";
import { TextInput } from "../TextInput/TextInput";
import { type TextStats } from "../../types";

// character counter - Parent Component which combines the 2 components and manages state - intermediator between the textInput and StatsDisplay Component

export default function CharacterCounter() {
  let stats: TextStats = {
    characterCount: 0,
    wordCount: 0,
    readingTime: 0,
  };

  const [words, setWords] = useState("");
  const [currentStats, setCurrentStats] = useState(stats);

  function countCharacters(userTxt: string): number {
    let charactersExtracted: string[] = userTxt.split(" ");
    let numberOfCharacters = 0;

    charactersExtracted.forEach((word) => {
      numberOfCharacters += word.length;
    });
    return numberOfCharacters;
  }

  function countWords(words: string): number {
    let wordsExtracted: string[] = words.split(" ");
    return wordsExtracted.length;
  }

  function handleTextChange(textFromUser: string) {
    setWords(textFromUser);

    setCurrentStats({
      characterCount: countCharacters(textFromUser),
      wordCount: countCharacters(textFromUser) > 0 ? countWords(words) : 0,
      readingTime: countCharacters(textFromUser) > 0 ? Date.now() : 0,
    });
  }

  return (
    <>
      <div className="mt-10 w-full">
        <h1 className="font-bold text-2xl flex justify-center">
          Character Counter
        </h1>
        <TextInput onTextChange={handleTextChange} />
        <StatsDisplay stats={currentStats} showReadingTime={true} />
      </div>
    </>
  );
}

/*
Architectural Description / Component Data Flow

statsdisplay - sibling component to textInput  which updates based on text coming from (textInput)
textinput - handles (userinput) and communicates changes to parent (characterCounter component)
character counter - combines the 2 components and manages state - intermediator between the textInput and StatsDisplay Component

*/
