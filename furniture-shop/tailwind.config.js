/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: "#000000",
                    secondary: "#4A4A4A",
                    accent: "#8C7B6C",
                },
            },
            fontFamily: {
                sans: ["var(--font-public)"],
                serif: ["var(--font-playfair)"],
            }
        },
    },
    plugins: [],
};
