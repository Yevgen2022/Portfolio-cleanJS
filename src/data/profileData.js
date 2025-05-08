import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaBootstrap, FaLaravel, FaDatabase
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

export const skills = [
    { Icon: FaHtml5, label: "HTML5", color: "text-orange-500" },
    { Icon: FaCss3Alt, label: "CSS3", color: "text-blue-500" },
    { Icon: FaJs, label: "JavaScript", color: "text-yellow-500" },
    { Icon: FaReact, label: "React", color: "text-blue-400" },
    { Icon: FaGitAlt, label: "Git", color: "text-red-500" },
    { Icon: FaBootstrap, label: "Bootstrap", color: "text-purple-500" },
    { Icon: SiTailwindcss, label: "Tailwind", color: "text-sky-400" },
    { Icon: FaLaravel, label: "Laravel", color: "text-red-600" },
    { Icon: FaDatabase, label: "SQL", color: "text-red-600" },
    { Icon: SiTypescript, label: "TypeScript", color: "text-blue-600" },
];


export const educations = [
    {
        title: "Bachelor’s degree | Applied mathematics",
        place: "Ivan Franko National University of Lviv",
        date: "09/1996 - 07/2002",
    },
    {
        title: "Master’s degree | Information system and technologies",
        place: "National Environmental University of Lviv",
        date: "09/2022 - 04/2024",
    },
];

export const certificates = [
    {
        title: "Frontend Developer",
        issuer: "Ciklum, Prometheus",
        date: "Completed March 2023",
        link: "/certificates",
    },
    {
        title: "Full-stack developer",
        issuer: "CBS, ITVDN",
        date: "Completed December 2024",
        link: "/certificates",
    },
];