import CertificateCard from "./CertificateCard";
import {certificates} from "../data/profileData"; // або ../data/certificatesData

export default function CertificatesSection() {

    return (

        <section id="certificates" className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Certificates</h2>

            <div className="grid md:grid-cols-2 gap-6">
                {certificates.map((cert, index) => (
                    <CertificateCard key={index} {...cert} />
                ))}
            </div>
        </section>

    );
}
