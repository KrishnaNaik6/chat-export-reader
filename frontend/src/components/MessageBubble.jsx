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
      className={`flex mb-3 ${isMe
        ? "justify-end"
        : "justify-start"
        }`}
    >
      <div
        className={`
    max-w-[85%]
    sm:max-w-[75%]
    px-3
    sm:px-4
    py-2.5
    sm:py-3
    rounded-2xl
    shadow-md
    whitespace-pre-wrap
    break-words
    transition-all
    duration-200
    ${isMe
            ? "bg-[#005c4b] rounded-br-sm"
            : "bg-[#202c33] rounded-bl-sm"
          }
    ${isHighlighted
            ? "ring-2 ring-yellow-400"
            : ""
          }
    ${isCurrent
            ? "scale-[1.02]"
            : ""
          }
  `}
      >
        {/* SENDER NAME */}
        {!isMe && (
          <p
            className="
        text-green-400
        text-xs
        sm:text-sm
        mb-1
        font-semibold
      "
          >
            {message.sender}
          </p>
        )}


        <p
          className="
      text-gray-100
      text-sm
      sm:text-base
      leading-relaxed
    "
        >
          <Highlighter
            highlightClassName="bg-yellow-400 text-black px-1 rounded"
            searchWords={[search]}
            autoEscape={true}
            textToHighlight={message.message}
          />
        </p>

        <div
          className="
      text-right
      text-[10px]
      sm:text-xs
      mt-2
      text-gray-300
    "
        >
          {message.time}
        </div>
      </div>
    </div>
  );
}

export default memo(MessageBubble);