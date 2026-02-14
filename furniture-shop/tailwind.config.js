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
                    primary: "#0A0A0A", // Deep Black
                    secondary: "#F5F5F0", // Off-white
                    accent: "#FF3B30", // Gundam Red
                },
            },
            fontFamily: {
                sans: ["var(--font-public)"],
                space: ["var(--font-space)"],
                chakra: ["var(--font-chakra)"],
            }
        },
    },
    plugins: [],
};
