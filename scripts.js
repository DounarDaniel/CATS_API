    const loadButton = document.getElementById('button_1');
    const catImage = document.getElementById('image');
    const loader = document.getElementById('loader');

    loadButton.addEventListener('click', async () => {
      loader.style.cssText = `display: flex`;
      catImage.style.cssText = `display: none`;
      try {
        const response = await fetch(
          'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg,png&format=json&has_breeds=true&order=RANDOM&page=0&limit=1',
          {
            method: 'GET',
            headers: {
              'x-api-key': 'live_OU0t28kSj2PsO2ma1X5LiW927Q7MpHzJgIv5RNTsTOMCR8A0VYd192XaCJWv6TkP'
            }
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data && data.length > 0) {
          catImage.src = data[0].url;
          catImage.style.cssText = 'display: block;';
        } else {
          throw new Error('No image found in the API response.');
        }

      } catch (error) {
        console.error('Error loading cat image:', error);
        alert('Failed to load cat image. See console for details.');
      } finally {
        loader.style.display = 'none';
      }
    });

