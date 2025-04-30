import LandingTemplate from "@/components/templates/LandingTemplate";

export default function WeebProjectDetails() {
    return (
        <LandingTemplate
            title="Weeb. Responsive landing page for a product based on a mock-up with Figma"
            description="This project aims to create a single-page website (landing page) to showcase a product or service. The site design will be based on a mockup created in Figma and will include responsive design to display correctly on various devices — from mobile phones to large PC screens."
            technologies={[
                "HTML5",
                "CSS3 with Flexbox and Grid to create responsive layouts.",
                "JavaScript for interactive elements",
                "Figma — for getting a design mockup.",
                "Media Queries — for responsive design that adjusts the interface to different screen sizes.",
            ]}
            goals={[
                "Meet all the requirements of responsive design.",
                "Implement designs created in Figma using modern web technologies.",
                "Have an intuitive interface and be user-friendly.",
                "Provide fast loading on all devices.",
            ]}
            links={[
                {
                    label: "GitHub Repository",
                    href: "https://github.com/Yevgen2022/responsive-site-figma-weeb",
                },
                {
                    label: "Live Demo",
                    href: "https://yevgen2022.github.io/responsive-site-figma-weeb/",
                },
            ]}
        />
    );
}
