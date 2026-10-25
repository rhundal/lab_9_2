import { type StatsDisplayProps } from "../../types";

// statsdisplay - sibling component to textInput  which updates based on text coming from (textInput)

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true,
}) => {
  return (
    <div className="place-items-center">
      <div className="grid grid-cols-3 w-[40%] mt-10 h-40 p-4 border border-gray-300 rounded-lg place-content-center gap-4">
        <div className="flex flex-col text-center">
          <div> Characters</div>
          <div className="mt-3"> {stats.characterCount}</div>
        </div>
        <div className="flex flex-col text-center">
          <div> Words </div>
          <div className="mt-3"> {stats.wordCount}</div>
        </div>
        <div className="flex flex-col text-center">
          <div> Reading Time</div>
          <div className="mt-3">
            {showReadingTime && <div> {stats.readingTime}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};
