        tailwind.config = {
            theme: {
                extend: {
                    animation: {
                        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    },
                    colors: {
                        primary: '#3b82f6',
                        dark: '#1e293b',
                        light: '#f8fafc',
                    }
                }
            }
        }

        // Motivational quotes array
        const quotes = [
            {text: "The future depends on what you do today.", author: "Mahatma Gandhi"},
            {text: "Time is what we want most, but what we use worst.", author: "William Penn"},
            {text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs"},
            {text: "The key is in not spending time, but in investing it.", author: "Stephen R. Covey"},
            {text: "Lost time is never found again.", author: "Benjamin Franklin"},
            {text: "Time is the most valuable thing a man can spend.", author: "Theophrastus"},
            {text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson"},
            {text: "The way we spend our time defines who we are.", author: "Jonathan Estrin"}
        ];
        
        // DOM Elements
        const currentTimeElement = document.getElementById('current-time');
        const currentDateElement = document.getElementById('current-date');
        const monthsElement = document.getElementById('months');
        const weeksElement = document.getElementById('weeks');
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        const motivationQuoteElement = document.getElementById('motivation-quote');
        const quoteAuthorElement = document.getElementById('quote-author');
        
        // Update time function
        function updateTime() {
            const now = new Date();
            
            // Update current time and date
            currentTimeElement.textContent = now.toLocaleTimeString();
            currentDateElement.textContent = now.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
            
            // Calculate remaining time until end of year
            const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);
            const diff = endOfYear - now;
            
            // Convert milliseconds to various time units
            const totalSeconds = Math.floor(diff / 1000);
            const totalMinutes = Math.floor(totalSeconds / 60);
            const totalHours = Math.floor(totalMinutes / 60);
            const totalDays = Math.floor(totalHours / 24);
            
            // Calculate remaining time breakdown
            const seconds = totalSeconds % 60;
            const minutes = totalMinutes % 60;
            const hours = totalHours % 24;
            const days = totalDays;
            const weeks = Math.floor(totalDays / 7);
            const months = Math.floor(totalDays / 30.44); // Average month length
            
            // Update time breakdown elements
            monthsElement.textContent = months;
            weeksElement.textContent = weeks;
            daysElement.textContent = days;
            hoursElement.textContent = hours;
            minutesElement.textContent = minutes;
            secondsElement.textContent = seconds;
        }
        
        // Update quote function
        function updateQuote() {
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            motivationQuoteElement.textContent = `"${randomQuote.text}"`;
            quoteAuthorElement.textContent = `- ${randomQuote.author}`;
            
            // Add animation class
            motivationQuoteElement.classList.add('opacity-0');
            quoteAuthorElement.classList.add('opacity-0');
            
            setTimeout(() => {
                motivationQuoteElement.classList.remove('opacity-0');
                quoteAuthorElement.classList.remove('opacity-0');
            }, 100);
        }
        
        // Initial update
        updateTime();
        updateQuote();
        
        // Set intervals for updates
        setInterval(updateTime, 1000);
        setInterval(updateQuote, 10000); // Change quote every 10 seconds
        
        // Add hover effects to time units
        const timeUnits = document.querySelectorAll('.time-unit');
        timeUnits.forEach(unit => {
            unit.addEventListener('mouseenter', () => {
                unit.classList.add('bg-slate-700/60');
            });
            
            unit.addEventListener('mouseleave', () => {
                unit.classList.remove('bg-slate-700/60');
            });
        });
