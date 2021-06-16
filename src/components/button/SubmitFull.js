export default function SubmitFull({ text }) {
  return (
    <button
      type="submit"
      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
    >
      {text}
    </button>
  );
}
