import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaBootstrap, FaLaravel, FaDatabase
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

import htmlCert from "../assets/img/Certificates/htmlcss.png";
import ciklumCert from "../assets/img/Certificates/Ciklum.png";
import testEngineerCert from "../assets/img/Certificates/TestEngineer.png";
import greenForestB2Cert from "../assets/img/Certificates/Green Forest Certificate(B2).png";
import greenForestB1Cert from "../assets/img/Certificates/Green Forest Certificate(B1).PNG";

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

export const courses = [
    {
        title: "English course B2 level",
        place: "Green Forest 2025",
        description:
            "Practiced advanced grammar, technical vocabulary, and real-life communication scenarios for the IT industry.",
    },
    {
        title: "Full-Stack Web Development",
        place: "CBS, ITVDN 2024",
        description:
            "Covered React, Node.js, Laravel, HTML, CSS, Typescript, Tailwind, SQL and project deployment.",
    },
    {
        title: "English course B1 level",
        place: "Green Forest 2024",
        description:
            "Covered grammar, reading, and speaking practice with emphasis on understanding and discussing technical topics in English.",
    },
    {
        title: "Frontend Development",
        place: "Ciklum, Prometheus 2023",
        description:
            "Covered HTML, CSS, JS, React, Bootstrap.",
    },
    {
        title: "QA/QC Engineer",
        place: "Dotli-online university, 2022",
        description:
            "Covered software testing methodologies, test case creation, test levels, defect tracking, and basics of databases.",
    },
];

export const visualCertificates = [
    { img: htmlCert, title: "HTML, CSS Development", desc: "CBS, ITVDN 2024" },
    { img: ciklumCert, title: "Frontend Developer", desc: "Ciklum, Prometheus 2023" },
    { img: testEngineerCert, title: "QA/QC Engineer", desc: "Dotli-online university, 2022" },
    { img: greenForestB2Cert, title: "English course B2 level", desc: "Green Forest, 2025" },
    { img: greenForestB1Cert, title: "English course B1 level", desc: "Green Forest, 2024" },
];
