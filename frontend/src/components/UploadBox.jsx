export default function UploadBox({ onFileRead }) {
  const handleFile = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      onFileRead(event.target.result);
    };

    reader.readAsText(file);
  };

  return (
    <div className="p-4 bg-[#111b21] border-b border-gray-700">
      <label
        className="
  flex
  items-center
  justify-center
  gap-2
  sm:gap-3
  bg-[#202c33]
  hover:bg-[#2a3942]
  text-white
  py-3
  sm:py-4
  rounded-2xl
  cursor-pointer
  transition-all
  duration-300
  border
  border-dashed
  border-green-500
  text-sm
  sm:text-base
"
      >
        <span className="text-2xl">📂</span>

        <span className="font-medium">
          Import WhatsApp Chat
        </span>

        <input
          type="file"
          accept=".txt"
          onChange={handleFile}
          hidden
        />
      </label>
    </div>
  );
}