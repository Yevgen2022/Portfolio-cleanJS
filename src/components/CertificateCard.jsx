// components/CertificateCard.jsx
import { FaCertificate } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CertificateCard({ title, issuer, date, link }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-800">
            <div className="flex items-start gap-4">
                <div className="text-3xl text-blue-600">
                    <FaCertificate className="text-blue-600 text-2xl" />
                </div>
                <div>
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{issuer}</p>
                    <p className="mt-2 text-sm">{date}</p>
                    <Link
                        to={link}
                        className="text-blue-600 text-sm inline-block mt-2 hover:underline"
                    >
                        View Certificates
                    </Link>
                </div>
            </div>
        </div>
    );
}
