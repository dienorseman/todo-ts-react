const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,js,jsx,ts,tsx}',
        './index.html',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            xs: "320px",
        },
        darkMode: "class",
        plugins: [nextui()],
    },
};
