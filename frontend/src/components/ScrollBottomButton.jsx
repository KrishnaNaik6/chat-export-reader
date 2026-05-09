import { FaArrowDown } from "react-icons/fa";

export default function ScrollBottomButton() {
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToBottom}
            className="
        fixed
        bottom-6
        right-6
        bg-green-500
        hover:bg-green-600
        text-white
        p-4
        rounded-full
        shadow-lg
        transition-all
      "
        >
            <FaArrowDown />
        </button>
    );
}