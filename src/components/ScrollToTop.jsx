
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // When the path changes — scroll up
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return null; // This component does not render anything.
}
