export default function Experience() {
    return (
        <section className="w-3/4 p-8">
            <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
            <div className="mb-6">
                <h3 className="text-xl font-semibold">Job Title</h3>
                <p className="text-gray-600">Company Name | Start Date - End Date</p>
                <ul className="list-disc list-inside mt-2">
                    <li>Responsibility or achievement</li>
                    <li>Responsibility or achievement</li>
                    <li>Responsibility or achievement</li>
                </ul>
            </div>
            {/* Repeat for other job experiences */}
        </section>
    );
}