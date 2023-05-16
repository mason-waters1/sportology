<script>
const urlParams = new URLSearchParams(window.location.search);
const teamId = urlParams.get('id');
fetch(`https://xcrq-vvid-zxzg.n7c.xano.io/api:7q-Aa9wu/high_school_football_programs/${teamId}`)
  .then(response => response.json())
  .then(data => {
    const programName = data.programName;
    document.querySelector('#programInfo h1').textContent = programName;
    const city = data.city;
    const state = data.state;
    const region = data.region;
    document.querySelector('#programCityStateRegion #city').textContent = city;
    document.querySelector('#programCityStateRegion #state').textContent = state;
    document.querySelector('#programCityStateRegion #region').textContent = region;

    const hudlLink = newRecruitCard.querySelector('#SAHUDLLink');
    hudlLink.href = `${recruit.hudlHandle}`;

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
