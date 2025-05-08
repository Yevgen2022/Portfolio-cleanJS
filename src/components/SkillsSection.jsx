import SkillCard from "./SkillCard";
import {skills} from "../data/profileData"; // або "../data/skillsData"

export default function SkillsSection() {

    return (

        <>
            <h2 className="text-2xl font-bold mb-6">Skills</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                    <SkillCard key={index} {...skill} />
                ))}
            </div>
        </>

    );
}
