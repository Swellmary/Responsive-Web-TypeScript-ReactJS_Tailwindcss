import { useEffect, useState } from "react";

export default function Hero() {
    // gives a glow where your mouse is poiting
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0}); // default is zero

    useEffect(() => {
        function handleMouseMove(e: MouseEvent) {
            setMousePosition({x: e.clientX, y: e.clientY}); //measurement of where your mouse is pointing on console
        }

        window.addEventListener("mousemove", handleMouseMove); //EventListener in useEffect must be returned removed

        return () => window.removeEventListener("mousemove", handleMouseMove); // Removed so it won't cause memory leaks
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">  
            <div className="absolute inset-0 opacity-30" style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)` // added style for mouse pointer highlights the dark color, wherever the mouse goes.
            }}/>

            {/* 2 different glows permanently stuck from top and bottom - adjustable*/}
            <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />    {/* animate-pulse */}
            <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </section>
    );
}
