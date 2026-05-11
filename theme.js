
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        apple: {
                            bg: '#F5F5F7',       // Background
                            text: '#1D1D1F',     // Teks utama 
                            muted: '#414147',    // Teks sekunder
                            blue: '#85058a',     // Primary Button 
                            blueHover: '#5ceb09' // Hover Button
                        }
                    },
                    boxShadow: {
                        'ios': '0 4px 24px rgba(0, 0, 0, 0.04)', // Shadow 
                    }
                }
            }
        }