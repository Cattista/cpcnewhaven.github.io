// JavaScript code to fetch and display podcast episodes and implement filtering.
const episodeList = document.getElementById("episodeList");
const podcastFilter = document.getElementById("podcastFilter");
const showFilter = document.getElementById("showFilter");
const hostFilter = document.getElementById("hostFilter");
const topicFilter = document.getElementById("topicFilter");
const dateFilter = document.getElementById("dateFilter");

// Function to fetch podcast episodes from JSON data or backend
function fetchPodcastEpisodes(jsonData) {
	// Fetches episodes from the JSON data and populates episodeList with the retrieved data.

	fetch(jsonData)
		.then(response => response.json())
		.then(data => {
			data.forEach(
				episode => {
					const episodeElement = document.createElement("div");
					episodeElement.classList.add("episode");
					episodeElement.setAttribute("data-podcast", episode.Podcast);
					episodeElement.setAttribute("data-show", episode.Show)
					episodeElement.setAttribute("data-series", episode.Series);
					episodeElement.setAttribute("data-episode", episode.Episode);
					episodeElement.setAttribute("data-name", episode.Title);
					episodeElement.setAttribute("data-speaker", episode.Speaker);
					episodeElement.setAttribute("data-scripture", episode.Scripture);
					episodeElement.setAttribute("data-description", episode.Description);
					episodeElement.setAttribute("data-youtube", episode.YouTube);
					episodeElement.setAttribute("data-audiofile", episode.AudioFile);
					episodeElement.setAttribute("data-spotify", episode.Spotify);
					episodeElement.setAttribute("data-bulletin", episode.Bulletin);
					episodeElement.setAttribute("data-artwork", episode.Artwork);
					

					episodeElement.innerHTML = `
						<tr class="episodeTR">
							<td><img class="podcastArtwork" src="${episode.Artwork}">${episode.Podcast}</td>
							<td><p class="textShow">${episode.Show}</p></td>
							<td>${episode.Series}</td>
							<td>${episode.Episode}</td>
							<td><p class="textEpName">${episode.Title}</p></td>
						</tr>
						<tr>
							<td>${episode.Scripture}</td>
							<td>${episode.Description}</td>
							
							<td><a href="${episode.Spotify}">[Spotify]</a></td>
							<td></td>
						</tr>
					`;

					episodeList.appendChild(episodeElement);
				}
			);                    
		})
		.catch(error => console.error("Error fetching data:", error));
}


// Function to apply filters to the episodes
function applyFilters() {
	const episodes = document.querySelectorAll(".episode");
	const podcastValue = podcastFilter.value.toLowerCase();
	const hostValue = hostFilter.value.toLowerCase();
	const showValue = showFilter.value.toLowerCase();


	episodes.forEach(function(episode) {
		const podcast = episode.getAttribute("data-podcast").toLowerCase();
		const host = episode.getAttribute("data-speaker").toLowerCase();
		const show = episode.getAttribute("data-show").toLowerCase();
		
		
		if (
			podcast.includes(podcastValue) && 
			host.includes(hostValue) &&
			show.includes(showValue)
		) 
		{
			episode.style.display = "block"; // Show episode
		} else {
			episode.style.display = "none"; // Hide episode
		}
	});
};
