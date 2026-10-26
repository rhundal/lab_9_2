import { useState } from "react";

import { StatsDisplay } from "../StatsDisplay/StatsDisplay";
import { TextInput } from "../TextInput/TextInput";
import { type TextStats } from "../../types";
import { type CharacterCounterProps } from "../../types";

// character counter - Parent Component which combines the 2 components and manages state - intermediator between the textInput and StatsDisplay Component

export default function CharacterCounter(props: CharacterCounterProps) {
  let stats: TextStats = {
    characterCount: 0,
    wordCount: 0,
    readingTime: "00:00",
  };

  const [words, setWords] = useState("");
  const [currentStats, setCurrentStats] = useState(stats);

  const [minWords, setMinWords] = useState(25);
  const [maxWords, setMaxWords] = useState(100);
  const [targetReadingTime, setTargetReadingTime] = useState<string | number>(
    0,
  );

  function countCharacters(userTxt: string): number {
    let charactersExtracted: string[] = userTxt.split("");
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
    let minutes: string | number = "00";
    let seconds: string | number = "00";

    if (textFromUser.length > 0) {
      const words_per_minute = 200;
      const countedWords = textFromUser.length > 0 ? countWords(words) : 0;

      const totalTargetSeconds = (countedWords / words_per_minute) * 60;

      setTargetReadingTime(totalTargetSeconds);

      minutes = Math.floor(totalTargetSeconds / 60);
      seconds = Math.floor(totalTargetSeconds % 60);

      minutes = String(minutes).padStart(2, "0");
      seconds = String(seconds).padStart(2, "0");
    }

    setCurrentStats({
      characterCount: countCharacters(textFromUser),
      wordCount: countCharacters(textFromUser) > 0 ? countWords(words) : 0,
      readingTime:
        countCharacters(textFromUser) > 0
          ? `${Number(minutes)}:${Number(seconds)}`
          : "00:00",
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
