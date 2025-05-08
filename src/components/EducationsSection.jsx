import EducationCard from "./EducationCard";
import {educations} from "../data/profileData"; // або інший файл, якщо ти зберігаєш окремо

export default function EducationsSection() {

    return (

        <section id="education" className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Education</h2>

            <div className="space-y-6">
                {educations.map((edu, index) => (
                    <EducationCard key={index} {...edu} />
                ))}
            </div>
        </section>


    );
}
