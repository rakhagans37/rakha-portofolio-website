/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins"],
            },
            colors: {
                navbarBackground: "#030E21",
                background: "#030E21",
                backgroundSecondary: "#091427",
                primaryText: "#FFFFF",
                secondaryText: "#E5E5E5",
                thirdText: "#868490",
                addtional: "#F8E7A1",
                card: "#101B2E",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
