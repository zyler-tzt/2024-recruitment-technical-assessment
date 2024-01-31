# DevSoc 2024 Subcommittee Recruitment Frontend Technical

Howdy! 
Thank you for applying to DevSoc project teams for 2024. Our projects are proudly maintained by student society volunteers like yourself who for many years have ideated, built and iterated the websites within our portfolios. 

## Overview and expectations

- You will be given an image of a website. **Your goal is to recreate this image as a page**. 
- This is a qualitative technical assessment that will be reviewed by Project Directors to make a judgment on progressing your application to an interview. 
- There are no exact marks associated with the completion of individual components. Your code will be judged on its structure, style and adherence to frontend conventions to create a visually similar product to the specified goal.
- This technical task is **not compulsory**. You may judge the relevance of this task to the project and role you are applying for. 
	- We will be making a judgement based on your holistic application which includes your application answers and may include either or both this and the backend task. 

## Tasks

![Unilectives](https://github.com/devsoc-unsw/24-recruitment-technical-frontend/blob/main/Unilectives.png?raw=true)  

An image of the [Unilectives](https://unilectives.csesoc.app/) site is provided above. 

### Main Task
The goal of this part is for you to demonstrate your HTML, CSS and JS skills. Please recreate this image in a frontend environment. 

You are given the freedom to choose how you recreate this. 
-	You may decide to use a single `.html` file. 
-	You can also use any frontend framework or library as the foundation of your page. 
	-	These include but are not limited to `React`, `Angular`, `Vue` as well as `Next.js` or `Gatsby.js`.
	-	We recommend following the Next.js [Getting Started](https://nextjs.org/docs/getting-started/installation) guide and building your page in the root file for your convenience - however please feel free to use whatever technologies you wish.
 -	The search bar and sort by dropdown do not need to work.
 -	Obviously matching every stylistic aspect of this page may be difficult and time-consuming. Prioritise large elements and structural features before you try to partially fill a rating start for example.
 -	You do not need to find exact matches for the fonts, icons or logos.
 -	You do not need to aim for perfection. Please only complete as much of this exercise as you wish focusing on demonstrating the breadth of your frontend knowledge. There is no requirement for perfection or pixel-precise matching.
 -	You do not need to account for responsive design.

The sample data shown in the image is provided below in the [Appendix](#appendix) in `JSON` format.

### Stretch Task 1 
The goal of this part is for you to demonstrate basic CSS transitions. Please make the colour of the title "Unilectives" change/alternate over time. 

### Stretch Task 2
The goal of this part is for you to demonstrate basic JavaScript state management. Please make the title "Unilectives" clickable. Upon being clicked, a `div` should appear. The `div` should be any white box with a black outline, vertically and horizontally centred on top of the content of the page. The `div` should contain in it, another button to dismiss the `div`. 

## Submission 
Please provide a public link to your solution as hosted on GitHub. 
If your solution is not run via a standard `npm i` `npm run dev` command, please provide a `README.md` that details how we can open your solution in our browser and any dependencies that we may need. 

## Additional comment
Whilst most of our frontend applicants tend to have frontend experience, either through self-study, work or COMP6080, we are open to candidates of varying experiences and abilities. The most important characteristics are one's curiosity and willingness to self-teach/learn. We have had frontend members join with little prior experience and go on to learn and contribute significantly. Therefore, if you find a lot of these exercises difficult, do not be disheartened - please make an attempt. 

## Appendix 
```
[
  {
    "course_prefix": "COMP",
    "course_code": 1511,
    "course_title": "Programming Fundamentals",
    "average_stars": 4.8,
    "total_reviews": 68,
    "offerred_terms": [
      "Term 1", "Term 2", "Term 3"
    ]
  },
  {
    "course_prefix": "COMP",
    "course_code": 1531,
    "course_title": "Software Engineering Fundamentals",
    "average_stars": 3.9,
    "total_reviews": 47,
    "offerred_terms": [
      "Term 1", "Term 2", "Term 3"
    ]
  },
  {
    "course_prefix": "COMP",
    "course_code": 1521,
    "course_title": "Computer Systems Fundamentals",
    "average_stars": 4,
    "total_reviews": 40,
    "offerred_terms": [
      "Term 1", "Term 2", "Term 3"
    ]
  },
  {
    "course_prefix": "COMP",
    "course_code": 2521,
    "course_title": "Data Structures and Algorithms",
    "average_stars": 4,
    "total_reviews": 36,
    "offerred_terms": [
      "Summer", "Term 1", "Term 2", "Term 3"
    ]
  },
  {
    "course_prefix": "COMP",
    "course_code": 2511,
    "course_title": "Object-Oriented Design & Programming",
    "average_stars": 3,
    "total_reviews": 33,
    "offerred_terms": [
      "Term 1", "Term 2", "Term 3"
    ]
  },
  {
    "course_prefix": "COMP",
    "course_code": 3311,
    "course_title": "Database Systems",
    "average_stars": 4,
    "total_reviews": 33,
    "offerred_terms": [
      "Term 1", "Term 3"
    ]
  }
]
```
