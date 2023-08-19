const lifeGroupCards = document.getElementById("lifeGroupCards");

function fetchLifeGroups(jsonData) {
    fetch(jsonData)
        .then(response => response.json())
        .then(data => {
            data.forEach(
                lifegroup => {
                    const lifegroupElement = document.createElement("div");
                    lifegroupElement.classList.add("card");
                    lifegroupElement.setAttribute("group-name",lifegroup.Group);
                    lifegroupElement.setAttribute("group-contact",lifegroup.Contact);
                    lifegroupElement.setAttribute("group-email",lifegroup.Email);
                    lifegroupElement.setAttribute("group-schedule",lifegroup.Schedule);

                    lifegroupElement.innerHTML = `
                        <h2>${lifegroup.Group}</h2>
                        <p>Contact: ${lifegroup.Contact}</p>
                        <p>Email: <a href="mailto:${lifegroup.Email}">${lifegroup.Email}</a></p>
                        <p>Meeting Schedule: ${lifegroup.Schedule}</p>
                    `;

                    lifeGroupCards.appendChild(lifegroupElement);
                }
            );
        })
        .catch(error => console.error("Error fetching data:", error));
}