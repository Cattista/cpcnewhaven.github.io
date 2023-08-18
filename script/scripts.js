// Modified Date in Title
function modifiedTitle(pageName = document.title) {
    lastUpdate = new Date (document.lastModified);
    updateMonth = (lastUpdate.getMonth() + 1).toString();
    updateDay = lastUpdate.getDate().toString();
    updateYear = lastUpdate.getYear().toString().substr(-2);

    if (pageName){
        pageName += " | "
    }

    document.title = pageName + "CPC NEW HAVEN | as of " + updateMonth + "." + updateDay + "." + updateYear;
}
modifiedTitle();

// Header Construction
const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<header>
    <img src="assets/CPC LOGO.png" alt="Logo" class="home-logo">
</header>
`;

document.body.appendChild(headerTemplate.content);


// Footer Construction
const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<footer class="full-footer">
    <!-- Bottom Footer Controls -->
    <div id="footer-controls" class="buttons">
    <a href="live.html" class="button">Live Stream</a>
    <a href="latest-podcast.html" class="button">Latest Podcast</a>
    <a href="weekly.html" class="button">Weekly Announcements</a>
    <a href="lifegroups.html" class="button">Lifegroups</a>
    <a href="archives.html" class="button">CPC Archives</a>
    <a href="yearbook.html" class="button">Yearbook</a>
    </div>
    <div class="footer-inner-wrap">
    <p>
        <a href="tel:2037776960">203.777.6960</a> | admin@cpcnewhaven.org | 135 Whitney Ave. New Haven CT 06510
        <br>
        &copy; 2023 Christ Presbyterian Church.
    </p>
    </div>
</footer>
`;

document.body.appendChild(footerTemplate.content);