/*

Implement each component according to its interface requirements.
Use useState to manage text input and statistics.
Implement event handlers for text changes.
Calculate statistics in real-time.

*/

/*

export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
}

export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

// types/index.ts

  */

import React, { useState } from "react";
import { type TextInputProps } from "../../types";

export const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = "Start typing your content here...",
  initialValue = "",
}) => {
  return (
    <div className="w-full">
      <textarea
        className="w-[40%] p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={(e) => onTextChange(e.target.value)}
        rows={6}
      />
    </div>
  );
};
