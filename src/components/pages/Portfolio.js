import React from 'react';
import '../styles/Portfolio.css';
import budgetTracker from '../images/portfolio/team-profile-generator.png';
import workoutManager from '../images/portfolio/workout-tracker.png';
import noteTaker from '../images/portfolio/note-taker.png';
import weatherDashboard from '../images/portfolio/weather-dashboard.png';

export default function Portfolio() {
  return (
    <div className="portfolio bg-desert">
        <div className="portfolio-card">
            <div className="portfolio-projects-card">
                <div>
                    <h1>Budget Tracker</h1>
                    <a href="https://github.com/lurch9/budget-tracker"><img className="portfolio-card-image" src={budgetTracker} alt="Budget Tracker"></img></a>
                    <a className="deployed-link" href="https://budget-tracker-jesus.herokuapp.com/">Deployed Link</a>
                </div>
                <div>
                    <h1>Workout Tracker</h1>
                    <a href="https://github.com/lurch9/Workout-Manager"><img className="portfolio-card-image" src={workoutManager} alt="Workout Tracker"></img></a>
                    <a className="deployed-link" href="https://workout-jesus.herokuapp.com/?id=620da5a2c7e0690016458783">Deployed Link</a>
                </div>
                <div>
                    <h1>Note Taker</h1>
                    <a href="https://github.com/lurch9/Note-Taker"><img className="portfolio-card-image" src={noteTaker} alt="Note Taker"></img></a>
                    <a className="deployed-link" href="https://notetakerah.herokuapp.com/">Deployed Link</a>
                </div>
                <div>
                    <h1>Weather Dashboard</h1>
                    <a href="https://github.com/lurch9/weather-dashboard"><img className="portfolio-card-image" src={weatherDashboard} alt="Weather Dashboard"></img></a>
                    <a className="deployed-link" href="https://lurch9.github.io/Weather-Dashboard/">Deployed Link</a>
                </div>

            </div>
        </div>

    </div>
  );
}