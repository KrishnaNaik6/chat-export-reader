import {
  useEffect,
  useRef,
  forwardRef,
} from "react";

import MessageBubble from "./MessageBubble";

const ChatWindow = forwardRef(
  (
    {
      messages,
      myName,
      matchedIndexes,
      matchedSet,
      currentMatch,
      search,
    },
    ref
  ) => {
    const refs = useRef({});

    // AUTO SCROLL TO SEARCH RESULT
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
        ref={ref}
        className="
          flex-1
          overflow-y-auto
          p-2
          sm:p-4
          scroll-smooth
          bg-[#0b141a]
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
);

export default ChatWindow;