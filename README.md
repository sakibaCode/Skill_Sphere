# SkillSphere

SkillSphere is an online learning platform where users can explore different skill-based courses, view course details, and manage their profile.
The project was built as part of an assignment using Next.js and BetterAuth.

## Live Link

Live Website: https://skill-sphere-oczy.vercel.app/



## Project Purpose

The main purpose of SkillSphere is to create a simple learning platform where students can browse courses from different categories such as web development, design, marketing, and data science. Logged-in users can view protected course details and access their profile information.

## Key Features

- User authentication with email and password
- Google login support
- Login, registration, and logout functionality
- Protected course details page
- Redirects unauthenticated users to the sign-in page
- Displays all courses from JSON data
- Search courses by title
- Popular courses section
- Learning tips section
- Top instructors section
- User profile page
- Update profile option
- Responsive design for mobile, tablet, and desktop
- Custom not-found page
- Toast notifications for user actions

## Tech Stack

- Next.js
- React
- Tailwind CSS
- DaisyUI
- BetterAuth
- MongoDB
- Swiper JS
- React Icons

## NPM Packages Used

- `next`
- `react`
- `react-dom`
- `better-auth`
- `mongodb`
- `tailwindcss`
- `daisyui`
- `swiper`
- `react-icons`

## Main Pages

- Home page
- All Courses page
- Course Details page
- Sign In page
- Sign Up page
- Profile page
- Update Profile page
- Not Found page

## Preview 

<img width="1912" height="878" alt="image" src="https://github.com/user-attachments/assets/6e0d45d3-e7fb-41ba-bc4d-fdf49521a237" />

## Environment Variables

The project uses environment variables for authentication and database connection.

```env
NEXT_PUBLIC_BASE_URL=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
MONGODB_URL=

