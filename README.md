### How to Run Project

- cd character-counter
- npm install
- npm run dev

### Reflections

- How did you handle state updates when the text changed?
  - I used statevariable to track changes of the text in the textArea by updating it via the onTextChange function which was supplied on the TextInputProps interface.
- What considerations did you make when calculating reading time?
  - This was a confusing so I had to take some help from google. Initially I understood that the TargetReadingTime is simply differnet from the ReadingTime displayed on the component in the sense that it is that exact same number as the TargetReadingTime, but formatted as a digital clock string or number. And TargetReadingTime is the raw time in number used for calculations purposes. I then learned that I should compare targetReadingTime with currentReadingTime and update the UI words count color apporpriately based on that comparison. I basically used the formula
    `const words_per_minute = 100;` which then lets me calculate `currentReadingTime` that I convert to minutes and seconds and display in the StatsDisplay component. I then compare this time against the targetReadingTime passed into the CharacterCounter Component and update the ui words count color appropraitely.
- How did you ensure the UI remained responsive during rapid text input?
  - Code wise, I made use of stateVariables and onTextChange function supplied on the TextInput component to which I pass the handleTextChange function which makes sure all the components are responsive and tied together in the CharacterCounter component. I made use of tailwind to make sure the ui remains responsive design wise on mobile layout as well.
- What challenges did you face when implementing the statistics calculations?
  - Initially understanding the exact role of targettime and then coming up with the formula was a bit unclear to me, I used google to gain some clarity on this functionality.
