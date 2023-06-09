<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

<script>
  const urlParams = new URLSearchParams(window.location.search);
  const programID = urlParams.get('id');

  const apiEndpoint1 = `https://xcrq-vvid-zxzg.n7c.xano.io/api:7q-Aa9wu/high_school_football_programs?programID=${programID}`;
  const apiEndpoint2 = `https://xcrq-vvid-zxzg.n7c.xano.io/api:7q-Aa9wu/highschoolfootballrecruits?programID=${programID}`;
  const apiEndpoint3 = `https://xcrq-vvid-zxzg.n7c.xano.io/api:7q-Aa9wu/high_school_football_coaches?programID=${programID}`;
  const apiEndpoint4 = `https://xcrq-vvid-zxzg.n7c.xano.io/api:7q-Aa9wu/hsfbalumni?programID=${programID}`;
  const apiEndpoint5 = `https://xcrq-vvid-zxzg.n7c.xano.io/api:7q-Aa9wu/games?homeTeam=${programID}&awayTeam=${programID}`;

  const requests = [
    axios.get(apiEndpoint1),
    axios.get(apiEndpoint2),
    axios.get(apiEndpoint3),
    axios.get(apiEndpoint4),
    axios.get(apiEndpoint5)
  ];

  Promise.all(requests)
    .then(responses => {
      const [response1, response2, response3, response4, response5] = responses;

      // Extract relevant data from responses
      const programName = response1.data[0]?.programName || 'No data found';
      const programCity = response1.data[0]?.city || 'No data found';
      const programState = response1.data[0]?.state || 'No data found';
      const programRegion = response1.data[0]?.region || 'No data found';
      const teamHUDLLink = response1.data[0]?.HUDLLink || '#';
      const heightAttribute = response2.data[0]?.height || 'No data found';
      const coachData = response3.data; // Array of coach objects
      const collegeLink = response4.data[0]?.collegeLink || 'No data found';
      const gameDateAttribute = response5.data[0]?.date || 'No game scheduled';
      const programTwitterLink = response1.data[0]?.twitterLink || '#';
      const teamBannerURL = response1.data[0]?.teamBannerURL || 'No data found';
      const coachPhotoURL = response3.data[0]?.coachPhotoURL || 'No data found';
      const SAfirstName = response2.data[0]?.firstName || 'No data found';
      const SAlastName = response2.data[0]?.lastName || 'No data found';
      const position = response2.data[0]?.position || 'No data found';
      const height = response2.data[0]?.height || 'No data found';
      const weight = response2.data[0]?.weight || 'No data found';
      const GPA = response2.data[0]?.GPA || 'No data found';
      const SAT = response2.data[0]?.SAT || 'No data found';
      const ACT = response2.data[0]?.ACT || 'No data found';
      const offers = response2.data[0]?.offers || 'No data found';
      const recommendedLevel = response2.data[0]?.suggestedLevel || 'No data found';
      const benchPress = response2.data[0]?.benchPress || 'No data found';
      const powerClean = response2.data[0]?.powerClean || 'No data found';
      const squat = response2.data[0]?.squat || 'No data found';
      const f40time = response2.data[0]?.f40time || 'No data found';
      const stats2022 = response2.data[0]?.stats2022 || 'No data found';   
      const SAHudlLink = response2.data[0]?.hudlHandle || 'No data found';   
      const SAtwitterHandle = response2.data[0]?.twitterHandle || 'No data found';   
      const SAInstagramHandle = response2.data[0]?.instagramHandle || 'No data found';   
      const SAYouTube = response2.data[0]?.youtube || 'No data found';   

      // Populate program-related data in HTML elements
      document.getElementById('programName').textContent = programName;
      document.getElementById('city').textContent = programCity;
      document.getElementById('state').textContent = programState;
      document.getElementById('region').textContent = programRegion;
      document.getElementById('HUDLLink').href = teamHUDLLink;
      document.getElementById('twitterLink').href = programTwitterLink;
      document.getElementById('height').textContent = heightAttribute;
      document.getElementById('collegeLink').href = collegeLink;
      document.getElementById('date').textContent = gameDateAttribute;
      document.getElementById('teamBanner').src = teamBannerURL;
      document.getElementById('coachPhoto').src = coachPhotoURL;
      document.getElementById('SAfirstName').textContent = SAfirstName;
      document.getElementById('SAlastName').textContent = SAlastName;
      document.getElementById('position').textContent = position;
      document.getElementById('weight').textContent = weight;
      document.getElementById('recommendedLevel').textContent = recommendedLevel;
      document.getElementById('GPA').textContent = GPA;
      document.getElementById('SAT').textContent = SAT;
      document.getElementById('ACT').textContent = ACT;
      document.getElementById('squat').textContent = squat;
      document.getElementById('powerClean').textContent = powerClean;
      document.getElementById('benchPress').textContent = benchPress;
      document.getElementById('f40time').textContent = f40time;
      document.getElementById('offers').textContent = offers;
      document.getElementById('SAHUDLLink').href = "https://" + SAHudlLink;
      document.getElementById('SATwitterLink').href = "https://twitter.com/" + SAtwitterHandle;
      document.getElementById('SAInstagramLink').href = "https://instagram.com/" + SAInstagramHandle;
      document.getElementById('SAYouTubeLink').href = "https://" + SAYouTube;

      // Function to generate the coach HTML block
      const generateCoachHTML = (coach) => {
        return `
          <div class="prepcoachblock">
            <div class="div-block-495">
              <img class="coachphoto" loading="lazy" src="${coach.coachPhotoURL || 'https://uploads-ssl.webflow.com/63a329effbb2db3f82d3a9a0/6426070e9db77e6b8fc9156e_People.png'}" alt="Coach Photo">
              <div class="div-block-496">
                <div class="div-block-594">
                  <p class="paragraph-202">${coach.firstName || 'First'}</p>
                  <p class="paragraph-202">${coach.lastName || 'Last'}</p>
                </div>
                <p class="paragraph-203">${coach.coachPosition || 'Head Coach'}</p>
                <div class="div-block-607">
                  <p class="paragraph-270">Contact Info</p>
                  <a href="${coach.email || '#'}" class="link-436">${coach.email || 'No email found'}</a>
                  <a href="${coach.phone || '#'}" class="link-437">${coach.phone || 'No phone found'}</a>
                </div>
              </div>
              <div class="div-block-497">
                <div id="coachNote" class="coachNotesHead">
                  <h1 class="coachnotesheader">Coach Notes</h1>
                  <p id="coachNotes" class="coachnotesstyle">${coach.coachNotes || 'No notes found'}</p>
                </div>
              </div>
            </div>
          </div>
        `;
      };

      const coachesContainer = document.getElementById('coachesContainer');

      // Generate and populate coach HTML blocks
      coachData.forEach(coach => {
        const coachHTML = generateCoachHTML(coach);
        coachesContainer.insertAdjacentHTML('beforeend', coachHTML);
      });

      // Hide the original prepCoachBlock
      const originalPrepCoachBlock = document.getElementById('prepCoachBlock');
      originalPrepCoachBlock.style.display = 'none';

      // Function to generate the recruitCard HTML block
      const generateRecruitCardHTML = (recruit) => {
        return `
          <div class="recruitCard">
            <img class="recruitPhoto" src="${recruit.photoURL || 'https://example.com/default-photo.jpg'}" alt="Recruit Photo">
            <div class="recruitDetails">
              <h3 class="recruitName">${recruit.firstName || 'First Name'} ${recruit.lastName || 'Last Name'}</h3>
              <p class="recruitPosition">${recruit.position || 'Position'}</p>
              <p class="recruitHeight">${recruit.height || 'Height'}</p>
              <p class="recruitWeight">${recruit.weight || 'Weight'}</p>
              <a href="mailto:${recruit.email || '#'}" class="recruitEmail">${recruit.email || 'No email found'}</a>
            </div>
          </div>
        `;
      };

      const recruitsContainer = document.getElementById('recruitsContainer');

      // Generate and populate recruitCard HTML blocks
      response2.data.forEach(recruit => {
        const recruitCardHTML = generateRecruitCardHTML(recruit);
        recruitsContainer.insertAdjacentHTML('beforeend', recruitCardHTML);
      });
      
            // Hide the original prepCoachBlock
      const originalrecruitCard = document.getElementById('recruitCard');
      originalPrepCoachBlock.style.display = 'none';
    })
    .catch(error => {
      console.error('Error:', error);
      // Display error messages or fallback content in HTML elements
    });
</script>
