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
                    primary: "#1A1A1A",
                    secondary: "#707070",
                    accent: "#D4C5B9",
                },
                bg: {
                    warm: "#F9F7F5",
                }
            },
            fontFamily: {
                body: ["var(--font-inter)"],
                heading: ["var(--font-jakarta)"],
            }
        },
    },
    plugins: [],
};
