import { courses } from "../data/profileData";
import EducationCard from "./EducationCard";

export default function CoursesSection() {
    return (
        <section id="courses" className="mt-12">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-gray-300 dark:border-gray-700">
                Courses
            </h2>

            <div className="space-y-6">
                {courses.map((course, index) => (
                    <EducationCard key={index} {...course} />
                ))}
            </div>
        </section>
    );
}
