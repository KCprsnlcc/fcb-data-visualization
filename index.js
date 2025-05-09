// Log a test message to confirm JavaScript is running
console.log("Hello World!");

// Get a reference to the HTML element with id 'date'
const dateElement = document.getElementById('date');

// Log the date element to verify it was found
console.log(dateElement); 

// Create a new Date object with the current date and time
let currentDate = new Date();

// Log the current date object to the console
console.log(currentDate);

// Set the innerHTML of the date element to the current date (initial attempt)
dateElement.innerHTML = currentDate;

// Options object for formatting the date display
let dateOptions = {year:'numeric', month:'long', day:'numeric'};

// Format the date with options and set the innerHTML of the date element
dateElement.innerHTML = currentDate.toLocaleDateString('en-US',dateOptions);

// Twitter API endpoint URL
const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
// Configuration options for the API request
const options = {
    method: 'POST', // HTTP method to use
    headers: {
        'x-rapidapi-key': 'd460191d79msh9ca319191cf343dp1d3e73jsn01aad6b78f58', // API key for authentication
        'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com', // API host domain
        'Content-Type': 'application/x-www-form-urlencoded' // Content type for the request
    },
    body: new URLSearchParams({woeid: '23424977'}) // Request body with WOEID parameter (Where On Earth ID)
};

// Sample data object representing a trending topic
let myPost = {
	name: "Lee Sung Kyung", // Name of the trending topic
	queryUrl: "search?q=%22Lee+Sung+Kyung%22", // URL query parameter for searching this topic
	volume: 31799, // Number of tweets/mentions
	followers: 3895734 // Number of followers
}

// Log the entire post object
console.log(myPost);
// Log individual properties of the post object
console.log(myPost.name);
console.log(myPost.queryUrl);
console.log(myPost.volume);
console.log(myPost.followers);

// Array of objects containing data for graph visualization
let graphData = [
	{ name: "#PorDeeReunion", queryUrl: "search?q=%23PorDeeReunion", volume: 67000}, // First trending topic
	{ name: "#BGYO3rdAnniversary", queryUrl: "search?q=%23BGYO3rdAnniversary", volume: 27400} // Second trending topic
];

// Log the entire graph data array
console.log(graphData);
// Log the second item in the array
console.log(graphData[1]);
// Log the name property of the second item
console.log(graphData[1].name);

// Add the myPost object to the graphData array
graphData.push(myPost);
// Log the updated array to show the new item
console.log(graphData);

// Log the length of the array (number of items)
console.log(graphData.length);

// Loop through the first two items in graphData
for(let i=0; i < 2; i++){
	// Log the current object
	console.log(graphData[i]);
	// Log individual properties of the current object
	console.log(graphData[i].name);
	console.log(graphData[i].queryUrl);
	console.log(graphData[i].volume);
}

// Create a new array containing only the names from graphData using map
let topics = graphData.map(object=>{
	// Log each object being processed
	console.log(object);
	// Log the name property
	console.log(object.name);
	// Return the name to be added to the topics array
	return object.name;
})

// Log the resulting topics array
console.log(topics);

// Create a new array containing only the volumes from graphData using map
let volumes = graphData.map(object=>{
	// Return the volume to be added to the volumes array
	return object.volume;
})

// Log the resulting volumes array
console.log(volumes);

// Get a reference to the HTML canvas element with id 'myChart'
const myChart = document.getElementById('myChart');

// Create a new bar chart using Chart.js
let barChart = new Chart(myChart, {
    type: 'bar', // Specify the chart type
    data: {
	  labels: topics, // Use the topics array for x-axis labels
	  datasets: [{
	    label: '# of tweets/xeets', // Chart label
	    data: volumes, // Use the volumes array for data values
	    borderWidth: 2, // Width of the bar borders
	    backgroundColor: [ // Background colors for the bars (with transparency)
	        'rgba(255, 99, 132, 0.2)',
	        'rgba(255, 159, 64, 0.2)',
	        'rgba(255, 205, 86, 0.2)',
	        'rgba(75, 192, 192, 0.2)',
	        'rgba(54, 162, 235, 0.2)',
	        'rgba(153, 102, 255, 0.2)',
	        'rgba(201, 203, 207, 0.2)'
	    ],
	    borderColor: [ // Border colors for the bars
	        'rgb(255, 99, 132)',
	        'rgb(255, 159, 64)',
	        'rgb(255, 205, 86)',
	        'rgb(75, 192, 192)',
	        'rgb(54, 162, 235)',
	        'rgb(153, 102, 255)',
	        'rgb(201, 203, 207)'
	    ],
	    hoverBackgroundColor: [ // Background colors when hovering
	        'rgb(255, 99, 132)',
	        'rgb(255, 159, 64)',
	        'rgb(255, 205, 86)',
	        'rgb(75, 192, 192)',
	        'rgb(54, 162, 235)',
	        'rgb(153, 102, 255)',
	        'rgb(201, 203, 207)'
	    ]
	  }]
	},
    options: {
    indexAxis:'y', // Use horizontal bar chart (y-axis for categories)
      scales: {
        y: {
          beginAtZero: true // Start the y-axis at zero
        }
      }
    }
  });