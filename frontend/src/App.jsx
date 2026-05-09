import { useState, useEffect, useMemo } from "react";

import { useDebounce } from "use-debounce";

import Header from "./components/Header";
import UploadBox from "./components/UploadBox";
import SearchBar from "./components/SearchBar";
import ChatWindow from "./components/ChatWindow";

import parseChat from "./utils/parseChat";

import ScrollBottomButton from "./components/ScrollBottomButton";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [senders, setSenders] = useState([]);
  const [myName, setMyName] = useState("");

  const [search, setSearch] = useState("");

  // DEBOUNCE SEARCH
  const [debouncedSearch] =
    useDebounce(search, 250);

  const [matchedIndexes, setMatchedIndexes] =
    useState([]);

  const [currentMatch, setCurrentMatch] =
    useState(0);

  const handleFileRead = (text) => {
    const parsed = parseChat(text);

    setMessages(parsed.messages);
    setSenders(parsed.senders);
  };

  // SEARCH
  useEffect(() => {
    if (!debouncedSearch.trim()) {
      setMatchedIndexes([]);
      return;
    }

    const matches = [];

    const lowerSearch =
      debouncedSearch.toLowerCase();

    messages.forEach((msg, index) => {
      if (
        msg.message
          .toLowerCase()
          .includes(lowerSearch) ||
        msg.sender
          .toLowerCase()
          .includes(lowerSearch)
      ) {
        matches.push(index);
      }
    });

    setMatchedIndexes(matches);
    setCurrentMatch(0);
  }, [debouncedSearch, messages]);

  // FAST LOOKUP
  const matchedSet = useMemo(() => {
    return new Set(matchedIndexes);
  }, [matchedIndexes]);

  // NEXT
  const goToNext = () => {
    if (!matchedIndexes.length) return;

    setCurrentMatch((prev) =>
      prev === matchedIndexes.length - 1
        ? 0
        : prev + 1
    );
  };

  // PREVIOUS
  const goToPrevious = () => {
    if (!matchedIndexes.length) return;

    setCurrentMatch((prev) =>
      prev === 0
        ? matchedIndexes.length - 1
        : prev - 1
    );
  };

  return (
    <div className="h-screen flex flex-col bg-[#0b141a] overflow-hidden">
      <Header />

      <UploadBox onFileRead={handleFileRead} />

      {/* SELECT USER */}
      {senders.length > 0 && (
        <div className="p-3 bg-[#111b21] border-b border-gray-700">
          <select
            value={myName}
            onChange={(e) =>
              setMyName(e.target.value)
            }
            className="
              w-full
              bg-[#202c33]
              text-white
              p-3
              rounded-xl
              outline-none
            "
          >
            <option value="">
              Select Yourself
            </option>

            {senders.map((sender) => (
              <option
                key={sender}
                value={sender}
              >
                {sender}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* SEARCH */}
      <SearchBar
        search={search}
        setSearch={setSearch}
        goToNext={goToNext}
        goToPrevious={goToPrevious}
        currentMatch={currentMatch}
        totalMatches={matchedIndexes.length}
      />

      {/* CHAT */}
      <ChatWindow
        messages={messages}
        myName={myName}
        matchedIndexes={matchedIndexes}
        matchedSet={matchedSet}
        currentMatch={currentMatch}
        search={search}
      />
      <ScrollBottomButton />
    </div>

  );
}