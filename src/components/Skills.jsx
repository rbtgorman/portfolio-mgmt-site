export default function Skills() {
    const skills = ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5'];

    return (
        <section className="w-3/4 p-8">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <ul className="grid grid-cols-2 gap-2">
                {skills.map((skill, index) => (
                    <li key={index} className="bg-gray-200 p-2 rounded">{skill}</li>
                ))}
            </ul>
        </section>
    );
}