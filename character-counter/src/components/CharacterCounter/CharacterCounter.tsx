import { useState } from "react";

import { StatsDisplay } from "../StatsDisplay/StatsDisplay";
import { TextInput } from "../TextInput/TextInput";
import { type TextStats } from "../../types";

// character counter - Parent Component which combines the 2 components and manages state - intermediator between the textInput and StatsDisplay Component

export default function CharacterCounter() {
  const [words, setWords] = useState("");

  // build stats object and pass it to StatsDisplay Component
  // characterCount: number;
  // wordCount: number;
  // readingTime: number; // in minutes

  let stats: TextStats = {
    characterCount: 0,
    wordCount: 0,
    readingTime: 0,
  };

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

    stats = {
      characterCount: countCharacters(textFromUser),
      wordCount: countWords(words),
      readingTime: Date.now(),
    };
    console.log("counted characters: " + stats.characterCount);
  }

  return (
    <>
      <div className="mt-10 w-full">
        <h1 className="font-bold text-2xl flex justify-center">
          Character Counter
        </h1>
        <TextInput onTextChange={handleTextChange} />
        <StatsDisplay showReadingTime={true} stats={stats} />
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
