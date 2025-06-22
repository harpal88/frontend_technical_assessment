// submit.js

export const SubmitButton = () => {

    return (
        <div className="flex items-center justify-center bg-white py-4">
            <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors text-sm"
            >
                Submit
            </button>
        </div>
    );
}
