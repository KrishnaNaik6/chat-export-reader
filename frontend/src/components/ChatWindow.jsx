import {
  useEffect,
  useRef,
} from "react";

import MessageBubble from "./MessageBubble";

export default function ChatWindow({
  messages,
  myName,
  matchedIndexes,
  matchedSet,
  currentMatch,
  search,
}) {
  const refs = useRef({});

  // AUTO SCROLL
  useEffect(() => {
    const currentIndex =
      matchedIndexes[currentMatch];

    if (
      currentIndex !== undefined &&
      refs.current[currentIndex]
    ) {
      refs.current[
        currentIndex
      ].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentMatch, matchedIndexes]);

  return (
    <div
      className="
        flex-1
        overflow-y-auto
        p-4
        scroll-smooth
      "
    >
      {messages.map((msg, index) => (
        <div
          key={msg.id || index}
          ref={(el) =>
            (refs.current[index] = el)
          }
        >
          <MessageBubble
            message={msg}
            isMe={msg.sender === myName}
            isHighlighted={matchedSet.has(
              index
            )}
            isCurrent={
              matchedIndexes[currentMatch] ===
              index
            }
            search={search}
          />
        </div>
      ))}
    </div>
  );
}