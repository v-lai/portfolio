import React from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './Projects.css';
import tradecraft from './static/tradecraft-patterns.png'
import coursereport from './static/coursereport-cities.png'
import calendar from './static/calendar-mood.png'
import music from './static/popular-music.png'
import codepen from './static/codepen.png'

const Projects = () => (
  <div className="innerBody">
    <h2>Projects</h2>
    <h3>Team/Company Projects</h3>
    <p></p>
    <div className="card">
      <Card>
        <CardTitle title="Tradecraft Patterns" subtitle="Job Seeker App" />
        <CardMedia>
          <img className="card-img" src={tradecraft} alt="tradecraft patterns screenshot" />
        </CardMedia>
        <CardText>
          Focused on building out the front-end functionality with React and Redux, including implementing redux-persist to rehydrate a the store. Added image upload ability with UploadCare, as well as drag and drop functionality with React. Pair-programmed.
          <p></p>
          <span className="project-icon">
            <i className="devicon-javascript-plain" alt="javascript"></i>&nbsp;
            <i className="devicon-nodejs-plain" alt="node"></i>&nbsp;
            <i className="devicon-react-original" alt="react"></i>&nbsp;
            <i className="devicon-express-original" alt="express"></i>&nbsp;
            <i className="devicon-mongodb-plain-wordmark" alt="mongodb"></i>&nbsp;
          </span>
        </CardText>
        <CardActions>
          <FlatButton className="btn" label="View" href="https://patterns-staging.herokuapp.com" />
          <FlatButton className="btn" label="AngelList Page" href="https://angel.co/projects/573245-tradecraft-patterns" />
        </CardActions>
      </Card>
    </div>

    <div className="card">
      <Card>
        <CardTitle title="CourseReport" subtitle="Yelp for Coding Bootcamps" />
        <CardMedia>
          <img className="card-img" src={coursereport} alt="coursereport cities screenshot" />
        </CardMedia>
        <CardText>
          Created Cities, Tracks, and Subjects index pages which did not exist before. Added a Geocoder gem and queried the database for closest cities to the client. Increased model and controller test coverage. Pair-programmed.
          <p></p>
          <span className="project-icon">
            <i className="devicon-ruby-plain" alt="ruby"></i>&nbsp;
            <i className="devicon-rails-plain-wordmark" alt="rails"></i>&nbsp;
            <i className="devicon-postgresql-plain-wordmark" alt="postgres"></i>&nbsp;
          </span>
        </CardText>
        <CardActions>
          <FlatButton className="btn" label="Cities Index" href="https://www.coursereport.com/cities" />
          <FlatButton className="btn" label="Tracks Index" href="https://www.coursereport.com/tracks" />
          <FlatButton className="btn" label="Subjects Index" href="https://www.coursereport.com/subjects" />
        </CardActions>
      </Card>
    </div>

    <h3>Work I've done</h3>
    <p></p>
    <div className="card">
      <Card>
        <CardTitle title="Calendar Mood App" subtitle="" />
        <CardMedia>
          <img className="card-img" src={calendar} alt="calendar mood screenshot" />
        </CardMedia>
        <CardText>
          Python/Flask app tracks your daily moods on a colorized calendar. Inspired by WeFeelFine.
          <p></p>
          <span className="project-icon">
            <i className="devicon-python-plain" alt="python"></i>&nbsp;
            <i className="devicon-postgresql-plain-wordmark" alt="postgres"></i>&nbsp;
            <i className="devicon-javascript-plain" alt="javascript"></i>&nbsp;
            <i className="devicon-jquery-plain-wordmark" alt="jquery"></i>&nbsp;
            <i className="devicon-d3js-plain" alt="d3.js"></i>&nbsp;
            <i className="devicon-heroku-original" alt="heroku"></i>
          </span>
        </CardText>
        <CardActions>
          <FlatButton className="btn" label="View" href="https://calendar-mood.herokuapp.com/" />
          <FlatButton className="btn" label="Github" href="https://github.com/v-lai/calendar-app" />
        </CardActions>
      </Card>
    </div>

    <div className="card">
      <Card>
        <CardTitle title="D3 Popular Music Visualization" subtitle="Visualization & Web Scraping" />
        <CardMedia>
          <img className="card-img" src={music} alt="popular music screenshot" />
        </CardMedia>
        <CardText>
          Data visualization for popular music singles sold. Made with D3 and BeautifulSoup.
          <p></p>
          <span className="project-icon">
            <i className="devicon-python-plain" alt="python"></i>&nbsp;
            <i className="devicon-javascript-plain" alt="javascript"></i>&nbsp;
            <i className="devicon-d3js-plain" alt="d3.js"></i>
          </span>
        </CardText>
        <CardActions>
          <FlatButton className="btn" label="View" href="https://v-lai.github.io/popular_music/" />
          <FlatButton className="btn" label="Github" href="https://github.com/v-lai/popular_music" />
        </CardActions>
      </Card>
    </div>

    <div className="card">
      <Card>
        <CardTitle title="Various Projects on Codepen" subtitle="Front-End Designs" />
        <CardMedia>
          <img className="card-img" src={codepen} alt="codepen screenshot" />
        </CardMedia>
        <CardText>
          Front-end projects including a JavaScript Calculator, Wikipedia Viewer, Weather App, and games done as a part of the front-end Free Code Camp curriculum.
          <p></p>
          <span className="project-icon">
            <i className="devicon-javascript-plain" alt="javascript"></i>
          </span>
        </CardText>
        <CardActions>
          <FlatButton className="btn" label="View" href="https://codepen.io/v-lai/" />
        </CardActions>
      </Card>
    </div>

  </div>
);

export default Projects;