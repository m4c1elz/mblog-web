/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "#EDEDED",
                primary: "white",
                accent: "#3E8EDE",
            },
            fontFamily: {
                nunito: "Nunito Sans",
                inter: ["Inter", "system-ui"],
            },
        },
    },
    plugins: [],
}
