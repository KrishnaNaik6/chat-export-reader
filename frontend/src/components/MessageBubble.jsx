import { memo } from "react";

import Highlighter from "react-highlight-words";

function MessageBubble({
  message,
  isMe,
  isHighlighted,
  isCurrent,
  search,
}) {
  return (
    <div
      className={`flex mb-3 ${
        isMe
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-[75%]
          px-4
          py-3
          rounded-2xl
          text-white
          shadow-md
          whitespace-pre-wrap
          break-words
          transition-all
          duration-200
          ${
            isMe
              ? "bg-[#005c4b] rounded-br-sm"
              : "bg-[#202c33] rounded-bl-sm"
          }
          ${
            isHighlighted
              ? "ring-2 ring-yellow-400"
              : ""
          }
          ${
            isCurrent
              ? "scale-[1.02]"
              : ""
          }
        `}
      >
        {!isMe && (
          <p className="text-green-400 text-sm mb-1 font-semibold">
            {message.sender}
          </p>
        )}

        <p className="leading-relaxed">
          <Highlighter
            highlightClassName="bg-yellow-400 text-black px-1 rounded"
            searchWords={[search]}
            autoEscape={true}
            textToHighlight={message.message}
          />
        </p>

        <div className="text-right text-xs mt-2 opacity-70">
          {message.time}
        </div>
      </div>
    </div>
  );
}

export default memo(MessageBubble);