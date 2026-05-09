import { FaArrowDown } from "react-icons/fa";

export default function ScrollBottomButton({
  chatRef,
}) {
  const scrollToBottom = () => {
    if (chatRef?.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      onClick={scrollToBottom}
      className="
        fixed
        bottom-5
        right-5
        bg-green-500
        hover:bg-green-600
        text-white
        p-3
        sm:p-4
        rounded-full
        shadow-lg
        transition-all
        duration-300
        z-50
      "
    >
      <FaArrowDown />
    </button>
  );
}