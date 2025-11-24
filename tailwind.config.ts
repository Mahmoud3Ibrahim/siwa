import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                sand: {
                    50: "#fdfbf7",
                    100: "#f9f5ed",
                    200: "#f2e8d6",
                    300: "#e8d7b8",
                    400: "#dcc497",
                    500: "#c9a96e",
                    600: "#b38f5a",
                    700: "#96754a",
                    800: "#7a5f3f",
                    900: "#654f36",
                },
                desert: {
                    50: "#faf8f3",
                    100: "#f3ede0",
                    200: "#e6d9bf",
                    300: "#d4bc96",
                    400: "#c19d6b",
                    500: "#b3874f",
                    600: "#a57143",
                    700: "#895a39",
                    800: "#704a33",
                    900: "#5c3d2c",
                },
                salt: {
                    50: "#fafafa",
                    100: "#f5f5f5",
                    200: "#eeeeee",
                    300: "#e0e0e0",
                    400: "#bdbdbd",
                    500: "#9e9e9e",
                    600: "#757575",
                    700: "#616161",
                    800: "#424242",
                    900: "#212121",
                },
                palm: {
                    50: "#f0fdf4",
                    100: "#dcfce7",
                    200: "#bbf7d0",
                    300: "#86efac",
                    400: "#4ade80",
                    500: "#22c55e",
                    600: "#16a34a",
                    700: "#15803d",
                    800: "#166534",
                    900: "#14532d",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                display: ["var(--font-playfair)", "serif"],
                arabic: ["var(--font-cairo)", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;
