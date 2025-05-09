# Twitter Trending Topics Data Visualization

This project displays Twitter trending topics using Chart.js for data visualization. It features a responsive design with Bootstrap and social media links in the footer.

## Project Overview

The application fetches Twitter trending topics and visualizes them in both horizontal and vertical bar charts. The charts show the volume (number of tweets) for each trending topic, making it easy to compare their popularity in different visual formats.

## Features

- **Dual Chart Visualization**: Display trending topics in both horizontal and vertical bar charts
- **Responsive Design**: Charts and layout adapt to different screen sizes
- **Interactive Elements**: Hover effects for charts and UI components
- **Current Date Display**: Automatically shows today's date in the header
- **Social Media Integration**: Links to various social platforms in the footer

## Files in this Project

### index.html

The main HTML file that structures the web application. It includes:
- Meta tags for proper character encoding and responsive design
- Chart.js library for data visualization
- Bootstrap CSS framework for styling
- Custom CSS file link
- Page title and main content area
- Dual canvas elements for chart rendering (horizontal and vertical)
- Responsive grid layout for chart containers
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
- Configuration for both horizontal and vertical bar charts
- Visual styling for chart elements

### index.css

The CSS file that styles the web application:
- Typography settings for headings
- Chart container styling with hover effects
- Footer layout and styling
- Social media icon styling
- Responsive design adjustments
- Interactive elements and transitions

## How to Use

1. Open the index.html file in a web browser
2. The application will display the current date and trending topics in two chart formats:
   - Horizontal bar chart for easy comparison of values
   - Vertical bar chart for traditional data presentation
3. Social media links are available in the footer

## Dependencies

- [Chart.js](https://www.chartjs.org/) - For data visualization
- [Bootstrap 5.3.6](https://getbootstrap.com/) - For responsive layout and styling
- [Font Awesome](https://fontawesome.com/) - For social media icons

## API Integration

The application is set up to use the Twitter Trends API from RapidAPI. To use your own API key:
1. Obtain an API key from [RapidAPI](https://rapidapi.com/)
2. Replace the existing key in the index.js file

## Future Improvements

- Implement live data fetching from Twitter API
- Add user filtering options for trends by region
- Add theme switcher for dark/light mode
- Implement additional chart types (pie chart, line chart for trend evolution)
- Add data export functionality
- Create comparison view between different regions/countries
