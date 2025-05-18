Project Overview: Developer Portfolio (React + Tailwind + Zustand)

1. Project Purpose:
A personal web portfolio for Yevhen Oshkukov showcasing frontend/backend projects, resume, certificates, education, and contact form. It is recruiter-focused with responsive layout, accessible design, and dynamic routing.

2. Tech Stack:

Frontend Framework: React (Vite)

State Management: Zustand

Styling: Tailwind CSS

Routing: React Router DOM

Icons: react-icons

Form Handling: Custom fetch + Formspree

Data Sources: Static JSON (projectsData.json, profileData.js)

3. Folder Structure Highlights:

public/ — static assets (e.g., favicon, fallback images)

src/assets/img/ — categorized images (Certificates, ProjectsFoto, MyPhoto)

src/components/ — reusable components (cards, layout, skills, etc.)

src/pages/templates/ — route pages (Home, Contact, Resume, etc.)

src/pages/projectsDetails/ — dynamic project detail view

src/data/ — local data sources

src/hooks/ — custom hooks (e.g. filtering projects)

src/routes/ — route definitions

src/store/ — Zustand global state logic

4. Functionality Summary:

Filterable and template-based project display

Featured projects section on homepage

Reusable form component with success modal

Certificates and education cards

Sticky header and footer

Scroll restoration

Dark mode support

5. Naming Conventions:

*Card.jsx — atomic components

*Section.jsx — grouped sections

*Page.jsx / inside pages/templates/ — routing views

6. Form Handling:

Contact form sends POST request to Formspree via fetch

Honeypot field to prevent spam

Spinner while sending

Modal appears after successful submission

7. Project Data:

projectsData.json: project definitions for filtering, rendering, and routing

profileData.js: developer info used globally (skills, links, etc.)

8. Future Plans (ideas for expansion):

Add blog section

Add language switcher (i18n)

Project screenshots with carousel/lightbox

Project sorting by date/complexity