import './App.css';
import { ReactComponent as UnilectivesIcon } from './unilectives.svg';
import { ReactComponent as BookOpenIcon } from './book-open.svg';
import { ReactComponent as ShieldCheckIcon } from './shield-check.svg';
import { ReactComponent as BarsArrowUpIcon } from './bars-arrow-up.svg';
import { ReactComponent as UserCircleIcon } from './user-circle.svg';
import { ReactComponent as MoonIcon } from './moon.svg';
import { ReactComponent as ArrowRightEndOnRectangle } from './arrow-right-end-on-rectangle.svg';

import courses from './courses.json'

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <UnilectivesIcon className="unilective-icon" />
        <div className="horizontal-bar"></div>
        <BookOpenIcon className="nav-top-icon" />
        <ShieldCheckIcon className="nav-top-icon" />
        <div className="top-bot-separator"></div>
        <div className="rotate90clockwise">
          <BarsArrowUpIcon className="nav-bot-icon" />
        </div>
        <UserCircleIcon className="nav-bot-icon" />
        <MoonIcon className="nav-bot-icon" />
        <ArrowRightEndOnRectangle className="nav-bot-icon" />
        <div className="nav-bar-bottom-margin"></div>
      </div>
    
      <div className="grid-container">
        <div className="grid-item devsoc-presents">DevSoc presents</div>
        <div className="grid-item unilectives-title"><h1>unilectives</h1></div>
        <div className="grid-item marketing-text">Your one-stop shop for UNSW course and elective reviews.</div>
        <div className="grid-item search-bar">
          <form>
            <input type="text" placeholder="Search for a course e.g. COMP1511" className="search-input"></input>
          </form>
        </div>
        <div className="grid-item sort-bar">
          <button className="sorting-dropdown" onClick={toggleDropdown}>
            Sort by
          </button>
          <div class="box" id="box">
            <p>Alphabetical(A-Z)</p>
            <p>Alphabetical(Z-A)</p>
            <p>Overall Rating</p>
            <p>Enjoyability</p>
            <p>Usefulness</p>
            <p>Manageability</p>
          </div>
        </div>
        <div className="grid-item course-grid">
          {courses.map(course => (
            <div className="course-grid-item">
              <div className='course-code-and-review'>
                <div className="course-code">
                  {course.course_prefix.concat("", course.course_code)}
                </div>
                <div className="review">
                  <span>
                    {starsRating(course.average_stars)}
                  </span>
                  <br></br>
                  <span className="total-reviews">{course.total_reviews} reviews</span>
                </div>
              </div>
              <div className="course-name">
                {course.course_title}
              </div>
              <div className="offered-terms">
                {course.offered_terms.map(term => (
                  <div className="term">
                    {term}
                  </div>
                ))
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function toggleDropdown() {
  var box = document.getElementById("box");
  if (box.style.display === "block") {
    box.style.display = "none";
  } else {
    box.style.display = "block";
  }
}

function starsRating(rating) {
  let filledStars = ""
  let unfilledStars = ""
  for(let i = 0; i < Math.round(rating); i++) {
    filledStars = filledStars + "★"
  }
  for(let i = 0; i < 5 - Math.round(rating); i++) {
    unfilledStars = unfilledStars + "★"
  }
  return (
    <div className="stars-rating">
      <div className="filled-stars">{filledStars}</div>
      <div className="unfilled-stars">{unfilledStars}</div>
    </div>
  )
}

export default App;
