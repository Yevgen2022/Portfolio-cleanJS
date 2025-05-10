import CoursesSection from "../components/CoursesSection";
import EducationsSection from "../components/EducationsSection";

export default function Education() {
    return (
        <div className="max-w-6xl mx-auto py-20">
            <section>
                {/* ...basic education */}
                <EducationsSection />

                {/* new course section */}
                <CoursesSection />
            </section>
        </div>
    );
}
