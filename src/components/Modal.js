export default function Modal({ handleGameChange }) {
  return (
    <div className="w-full p-4 overflow-y-auto md:inset-0 h-modal md:h-full">
      <div className="relative w-full h-full max-w-2xl md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900">Nice one!</h3>
          </div>
          <div className="flex p-6 space-x-2 border-t border-gray-200 rounded-b">
            <button
              onClick={(e) => handleGameChange(1, e)}
              value={1}
              type="button"
              className="text-white bg-emerald-800 hover:bg-emerald-900 focus:ring-4 focus:outline-none focus:ring-emerald-300-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
