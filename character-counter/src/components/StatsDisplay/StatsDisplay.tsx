import { type StatsDisplayProps } from "../../types";

import { type CharacterCounterProps } from "../../types";
// statsdisplay - sibling component to textInput  which updates based on text coming from (textInput)

export const StatsDisplay: React.FC<
  StatsDisplayProps & CharacterCounterProps
> = ({
  stats,
  showReadingTime = true,
  minWords,
  maxWords,
  targetReadingTime,
}) => {
  return (
    <div className="place-items-center">
      <div className="grid grid-rows-2 w-[40%] mt-10 h-40 p-4 border border-gray-300 rounded-lg">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col text-center">
            <div> Characters</div>
            <div className="mt-3 font-bold text-2xl">
              {" "}
              {stats.characterCount}
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div> Words </div>
            <div className="mt-3 text-red-500 font-bold text-2xl">
              {" "}
              {stats.wordCount}
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div> Reading Time</div>
            <div className="mt-3 font-bold text-2xl">
              {showReadingTime && <div> {stats.readingTime}</div>}
            </div>
          </div>
        </div>
        <div className="flex flex-row text-center place-content-center mt-5 text-sm text-gray-500">
          <div className=""> Min: {minWords} </div>
          <div> | Max: {maxWords} </div>
          <div> | TargetReadingTime: {targetReadingTime}</div>
        </div>
      </div>
    </div>
  );
};
