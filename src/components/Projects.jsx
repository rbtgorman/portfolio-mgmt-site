// src/components/Projects.jsx

export default function Projects() {
    return (
        <section className="w-3/4 p-8">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <div className="mb-6">
                <h3 className="text-xl font-semibold">Project Name</h3>
                <p className="text-gray-600">Brief description of the project</p>
                <ul className="list-disc list-inside mt-2">
                    <li>Key feature or achievement</li>
                    <li>Key feature or achievement</li>
                    <li>Key feature or achievement</li>
                </ul>
            </div>
            {/* Repeat for other projects */}
        </section>
    );
}