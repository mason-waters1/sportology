<script>
// This first script gets the program banner info
// retrieve the URL parameter "id" to determine which team's data to retrieve
const urlParams = new URLSearchParams(window.location.search);
const teamId = urlParams.get('id');

// retrieve the data from the Xano API endpoint
fetch(`https://xcrq-vvid-zxzg.n7c.xano.io/api:7q-Aa9wu/high_school_football_programs/${teamId}`)
  .then(response => response.json())
  .then(data => {
    // populate the programName field
    const programName = data.programName;
    document.querySelector('#programInfo h1').textContent = programName;

    // populate the city, state, and region fields
    const city = data.city;
    const state = data.state;
    const region = data.region;
    document.querySelector('#programCityStateRegion #city').textContent = city;
    document.querySelector('#programCityStateRegion #state').textContent = state;
    document.querySelector('#programCityStateRegion #region').textContent = region;

    const hudlLink = newRecruitCard.querySelector('#SAHUDLLink');
    hudlLink.href = `${recruit.hudlHandle}`;

    // populate the team banner image
    const teamBannerUrl = data.teamBanner;
    fetch(teamBannerUrl)
      .then(response => response.blob())
      .then(blob => {
        const objectUrl = URL.createObjectURL(blob);
        const img = document.createElement('img');
        img.src = objectUrl;
        document.querySelector('#teamBanner').replaceWith(img);
      })
      .catch(error => console.error(error));
  })
  .catch(error => console.error(error));
</script>
