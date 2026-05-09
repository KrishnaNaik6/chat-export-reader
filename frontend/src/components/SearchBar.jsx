export default function SearchBar({
  search,
  setSearch,
  goToNext,
  goToPrevious,
  currentMatch,
  totalMatches,
}) {
  return (
    <div className="p-3 bg-[#202c33] border-b border-gray-700">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search messages"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              w-full
              bg-[#111b21]
              text-white
              px-12
              py-3
              rounded-full
              outline-none
              placeholder-gray-400
            "
          />

          <div
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
            "
          >
            🔍
          </div>
        </div>

        {/* RESULT COUNT */}
        <div className="text-gray-300 text-sm">
          {totalMatches > 0
            ? `${currentMatch + 1}/${totalMatches}`
            : "0/0"}
        </div>

        {/* UP BUTTON */}
        <button
          onClick={goToPrevious}
          className="
            bg-[#111b21]
            text-white
            px-3
            py-2
            rounded-lg
          "
        >
          ↑
        </button>

        {/* DOWN BUTTON */}
        <button
          onClick={goToNext}
          className="
            bg-[#111b21]
            text-white
            px-3
            py-2
            rounded-lg
          "
        >
          ↓
        </button>
      </div>
    </div>
  );
}