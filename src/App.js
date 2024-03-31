// import React from 'react';
import './App.css'; 
import React, { useState , useEffect} from 'react';
// import './script.js'; // Import your script file here

function App() {
  // AUDIO STARTS HERE
  const [audio] = useState(new Audio('/media/sound/okstate_fight_song_mp3ver.mp3')); // Change the path to your MP3 file
  const [isPlaying, setIsPlaying] = useState(false); // Set initial state to false

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]); // Update the effect when isPlaying changes

  const toggleAudio = () => {
    setIsPlaying(!isPlaying); // Toggle between play and pause
  };

  // AUDIO ENDS HERE

  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      <div className="banner">
        <div className="navbar">

        <div>

          <button type = "button" onClick={toggleAudio}><span></span>{isPlaying ? 'Pause' : 'Hear Our Fight Song!'}</button>

        </div>
          
          <img className="TechTroopers logo" src="media/gif/TechTroopers.gif" alt="logo" />

          <ul>
            <hr/>
            <li><a href="index.html">Home</a></li>
            <li><a href="contact_us.html">Contact us</a></li>
            <li><a href="game.html">Play a game!</a></li>
            <li><a href="https://go.okstate.edu/undergraduate-academics/majors/">OSU(MAJORS)</a></li>
            <hr />
          </ul>
        </div>

        <hr />
      </div>

      <div className="content">
        <img src="media/gif/pokes.gif" alt="pokes" width="550" height="300" />
        <h1>
          Welcome to Oklahoma Space University!
        </h1>

        <h2>
          This is an OSU website that displays data sets on academic majors and the amount of students who join and change majors.
        </h2>
      </div>

      <div className="spacer"></div>
      <div className="center">
        <h2>
          Here are the top 3 most chosen majors showing how students perform at Oklahoma Space University:
        </h2>

        <div className="center">
          <h2>Click on each major to view more information.</h2>
        </div>
        <div style={{ clear: 'both' }}></div>

        <div className="all_majors">
          <a href="major1.html">
            <div className="major">
              <img src="media/pictures/majorPics_fantasy/AlienStudies.jpg" alt="Xenobiology and Alien Studies" />
              <h6>Xenobiology and Alien Studies</h6>
            </div>
          </a>

          <a href="major2.html">
            <div className="major">
              <img src="media/pictures/majorPics_fantasy/alchemy.jpg" alt="Elemental Alchemy and Transmutation:" />
              <h6>Elemental Alchemy and Transmutation:</h6>
            </div>
          </a>

          <a href="major3.html">
            <div className="major">
              <img src="media/pictures/majorPics_fantasy/timeTravel.jpg" alt="Temporal Mechanics and Time Travel Theory" />
              <h6>Temporal Mechanics and Time Travel Theory</h6>
            </div>
          </a>
        </div>
      </div>

      <script src="script.js"></script>
      
      <footer>
        <h1>THANKS TO OUR SPONSORS:</h1>
        <p>PAYCOM</p>
        <h2>WEBSITE DEVELOPED AND STYLED BY:</h2>
        <p>JUSTIN MOUA</p>
        <p>ASHTON CECIL</p>
        <p>DAMILOLA AGBEBIYI</p>
      </footer>
    </div>
  );
}

export default App;
