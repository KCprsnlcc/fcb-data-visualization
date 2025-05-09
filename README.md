# Twitter Trending Topics Data Visualization

This project displays Twitter trending topics using Chart.js for data visualization. It features a responsive design with Bootstrap and social media links in the footer.

## Project Overview

The application fetches Twitter trending topics and visualizes them in a horizontal bar chart. The chart shows the volume (number of tweets) for each trending topic, making it easy to compare their popularity.

## Files in this Project

### index.html

The main HTML file that structures the web application. It includes:
- Meta tags for proper character encoding and responsive design
- Chart.js library for data visualization
- Bootstrap CSS framework for styling
- Custom CSS file link
- Page title and main content area
- Canvas element for chart rendering
- Footer with social media links
- Font Awesome for icons
- Bootstrap JS bundle for interactive components
- Custom JavaScript file link

### index.js

The JavaScript file containing the application logic:
- Date formatting and display
- Twitter API configuration (API key and endpoint)
- Sample trending topics data
- Data manipulation using JavaScript array methods
- Chart initialization and configuration using Chart.js
- Visual styling for chart elements

### index.css

The CSS file that styles the web application:
- Typography settings for headings
- Footer layout and styling
- Social media icon styling
- Hover effects for interactive elements

## How to Use

1. Open the index.html file in a web browser
2. The application will display the current date and trending topics chart
3. Social media links are available in the footer

## Dependencies

- [Chart.js](https://www.chartjs.org/) - For data visualization
- [Bootstrap 5.3.6](https://getbootstrap.com/) - For responsive layout and styling
- [Font Awesome](https://fontawesome.com/) - For social media icons

## API Integration

The application is set up to use the Twitter Trends API from RapidAPI. To use your own API key:
1. Obtain an API key from [RapidAPI](https://rapidapi.com/)
2. Replace the existing key in the index.js file
