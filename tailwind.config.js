/** @type {import('tailwindcss').Config} */
module.exports = {
content: ['./*.html'],

            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "primary-fixed-dim": "#95d3ba",
                        "on-surface": "#191c1c",
                        "secondary-fixed-dim": "#e9c349",
                        "on-tertiary": "#ffffff",
                        "on-secondary-fixed": "#241a00",
                        "tertiary": "#1d2f40",
                        "surface-container-low": "#f2f4f3",
                        "on-error-container": "#93000a",
                        "surface-container-highest": "#e1e3e2",
                        "outline-variant": "#bfc9c4",
                        "on-tertiary-container": "#a1b2c8",
                        "surface": "#f8faf9",
                        "background": "#f8faf9",
                        "on-secondary-container": "#745c00",
                        "surface-variant": "#e1e3e2",
                        "secondary-container": "#fed65b",
                        "primary-container": "#054d3a",
                        "tertiary-fixed": "#d2e4fb",
                        "primary-fixed": "#b0f0d6",
                        "on-secondary-fixed-variant": "#574500",
                        "inverse-on-surface": "#eff1f0",
                        "primary": "#003526",
                        "on-error": "#ffffff",
                        "on-background": "#191c1c",
                        "surface-dim": "#d8dada",
                        "surface-tint": "#2b6954",
                        "on-tertiary-fixed": "#0a1d2d",
                        "surface-container": "#eceeed",
                        "outline": "#707975",
                        "tertiary-fixed-dim": "#b6c8df",
                        "on-primary-fixed": "#002117",
                        "secondary-fixed": "#ffe088",
                        "on-primary-fixed-variant": "#0b513d",
                        "error": "#ba1a1a",
                        "surface-container-high": "#e6e9e8",
                        "surface-bright": "#f8faf9",
                        "inverse-primary": "#95d3ba",
                        "error-container": "#ffdad6",
                        "inverse-surface": "#2e3131",
                        "on-primary": "#ffffff",
                        "on-tertiary-fixed-variant": "#37485b",
                        "surface-container-lowest": "#ffffff",
                        "on-primary-container": "#7fbda5",
                        "secondary": "#735c00",
                        "on-surface-variant": "#3f4945",
                        "on-secondary": "#ffffff"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "fontFamily": {
                        "headline": ["Noto Serif"],
                        "body": ["Manrope"],
                        "label": ["Manrope"]
                    }
                },
            },
        }
