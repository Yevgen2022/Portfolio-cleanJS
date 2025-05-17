/**
 formData — stores field values (controlled form).
 setFormData — updates name, email, message.
 showModal — controls the display of the modal window.
 setShowModal(true) — show gratitude.
 **/


import {useState} from "react";
import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";

export default function ContactComponent() {

    const [formData, setFormData] = useState({name: "", email: "", message: ""});
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // state for a spinner


    const handleChange = (e) => {
        setFormData((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);     //we show the spinner

        try {
            const res = await fetch("https://formspree.io/f/xqaqaqbr", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setShowModal(true);
                setFormData({name: "", email: "", message: ""});    // clear form
            } else {
                alert("Error submitting form.");
            }
        } catch {
            alert("Network error.");
        } finally {
            setIsLoading(false);         // hide spiner
        }
    };

    return (
        <section id="contact" className="mb-16 relative">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

            <div className="dark-bg-tx p-6 rounded-xl shadow-md">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left */}
                    <div>
                        <p className="mb-8">
                            I'm always open to new opportunities and collaborations. Feel free to reach out!
                        </p>
                        <div className="space-y-6">
                            <ContactItem icon={<FaEnvelope/>} label="Email" text="sy.yevhen.lc@gmail.com"
                                         href="mailto:sy.yevhen.lc@gmail.com"/>
                            <ContactItem icon={<FaGithub/>} label="GitHub" text="Yevhen-Github"
                                         href="https://github.com/Yevgen2022"/>
                            <ContactItem icon={<FaLinkedin/>} label="LinkedIn" text="Yevhen-LinkedIn"
                                         href="https://www.linkedin.com/in/yevhen-oshkukov-436973254/"/>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <InputField id="name" label="Name" value={formData.name} onChange={handleChange}/>
                        <InputField id="email" label="Email" type="email" value={formData.email}
                                    onChange={handleChange}/>
                        <TextAreaField id="message" label="Message" value={formData.message} onChange={handleChange}/>
                        <button type="submit"
                                className={`btn-style ${isLoading ? 'cursor-not-allowed opacity-70' : ''}`}
                                disabled={isLoading}>
                            {isLoading ? (
                                // <span className="spinner-border spinner-border-sm" role="status"></span>
                                <span className="flex items-center gap-2">
                                        <Spinner/> Sending...
                                        </span>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                        <input type="text" name="_gotcha" style={{display: "none"}} tabIndex="-1" autoComplete="off"/>
                    </form>
                </div>
            </div>

            {/* Thank You Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl text-center max-w-md mx-4">
                        <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
                        <p className="mb-6">
                            Your message has been successfully sent. I will get back to you as soon as possible.
                        </p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="btn-style"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

function ContactItem({icon, label, text, href}) {
    return (
        <div className="flex items-center gap-3">
            <div className="text-blue-600 text-xl">{icon}</div>
            <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
                <a href={href} target="_blank" rel="noopener noreferrer"
                   className="text-blue-600 hover:underline">{text}</a>
            </div>
        </div>
    );
}

function InputField({id, label, value, onChange, type = "text"}) {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium mb-1">{label}</label>
            <input
                id={id}
                name={id}
                type={type}
                value={value}
                onChange={onChange}
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-700"
            />
        </div>
    );
}

function TextAreaField({id, label, value, onChange}) {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium mb-1">{label}</label>
            <textarea
                id={id}
                name={id}
                rows="4"
                value={value}
                onChange={onChange}
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-700"
            />
        </div>
    );
}

function Spinner() {
    return (
        <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            ></circle>
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
        </svg>
    );
}

