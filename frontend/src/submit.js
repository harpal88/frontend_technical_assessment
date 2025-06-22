// submit.js
import React from "react";

export const SubmitButton = ({ nodes, edges }) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/pipelines/parse", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nodes, edges }),
            });
            const data = await response.json();
            alert(
                `Number of nodes: ${data.num_nodes}\n` +
                `Number of edges: ${data.num_edges}\n` +
                `Is DAG: ${data.is_dag ? "Yes" : "No"}`
            );
        } catch (error) {
            alert("Failed to submit pipeline: " + error.message);
        }
    };

    return (
        <div className="flex items-center justify-center bg-white py-4">
            <button
                type="button"
                className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors text-sm"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
}
