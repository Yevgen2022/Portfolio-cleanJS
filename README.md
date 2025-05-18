# Developer Portfolio — Yevhen Oshkukov

A modern, responsive web portfolio to present my frontend and backend projects, resume, certificates, and contact information.

##  Live Demo

[View it here](https://yevgen2022.github.io/Portfolio-React/)

---

##  Features

1. Clean UI with Tailwind CSS  
2. Dynamic routing via React Router  
3. Filterable project templates (Landing, Frontend-App, Backend)  
4. Certificate and education sections  
5. Contact form with success modal and Formspree integration  
6. Dark mode support  

---

##  Tech Stack

- **React + Vite**
- Zustand for state management
- Tailwind CSS for styling
- React Router DOM
- react-icons
- Formspree (via fetch)

---

##  Folder Structure (simplified)

```text
src/
├── assets/img/           # Project, certificates, and profile images
├── components/           # Reusable UI components (Card, Footer, etc.)
├── pages/templates/      # Main route views (Home, Contact, Resume, etc.)
├── pages/projectsDetails # Dynamic project detail views
├── data/                 # JSON/JS project and profile data
├── store/                # Zustand global state logic
├── routes/               # App routing configuration
