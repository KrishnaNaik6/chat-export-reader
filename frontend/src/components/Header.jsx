export default function Header() {
  return (
    <div
      className="
        bg-[#202c33]
        px-5
        py-4
        flex
        items-center
        justify-between
        shadow-md
        border-b
        border-gray-700
      "
    >
      <div className="flex items-center gap-3">
        <div
          className="
            w-10
            h-10
            rounded-full
            bg-green-500
            flex
            items-center
            justify-center
            text-xl
          "
        >
          💬
        </div>

        <div>
          <h1 className="text-white font-bold text-lg">
            WhatsApp Chat Reader
          </h1>

          <p className="text-gray-400 text-sm">
            Import & Read Chats
          </p>
        </div>
      </div>
    </div>
  );
}