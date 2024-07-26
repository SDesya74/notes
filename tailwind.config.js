/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                accent: 'var(--accent)',
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ]
};
