# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Developer Portfolio — Yevhen Oshkukov

A modern, responsive web portfolio to present my frontend and backend projects, resume, certificates, and contact information.

Live Demo

https://yevhen2022.github.io/Portfolio

Features

 1.Clean UI with Tailwind CSS

 2.Dynamic routing via React Router

 3.Filterable project templates (Landing, Frontend-App, Backend)

 4.Certificate and education sections

 5.Contact form with success modal and Formspree integration

 6.Dark mode support

Tech Stack

React + Vite

Zustand for state management

Tailwind CSS for styling

React Router DOM

react-icons

Formspree (via fetch)

Folder Structure (simplified)
***
src/
├── assets/img/...        # images
├── components/           # UI components (Card, Footer, etc.)
├── pages/templates/      # Main route views (Home, Contact, etc.)
├── pages/projectsDetails # Single project view
├── data/                 # JSON/JS profile & projects data
├── store/                # Zustand global state
├── routes/               # Routing logic

***
