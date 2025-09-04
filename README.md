# Event Website

A React + Vite application for discovering and booking events, featuring authentication, recommended shows, and upcoming events.


## Features

- User Signup and Login with localStorage authentication
- Error messages for invalid login attempts
- JWT token-based session management
- Recommended Shows and Upcoming Events fetched from backend API
- Google Drive image support for event backgrounds
- Responsive Navbar with logout functionality
- Custom date formatting and type conversion
- CSS spinner for loading states
- 404 Page Not Found route for undefined URLs

## Getting Started

### Installation

1. Clone the repository
2. Install dependencies:

   ````sh

   # Event Website

   ## Project Overview
   Event Website is a React + Vite application for discovering and booking events. It features user authentication, recommended shows, upcoming events, and a responsive UI. The app fetches event data from a backend API and supports Google Drive images for event backgrounds.

   ## Setup and Local Run Instructions
   ### Prerequisites
   - Node.js and npm installed

   ### Installation
   1. Clone the repository:
      ```sh
      git clone <your-repo-url>
      cd Event_website
   ````

   2. Install dependencies:
      ```sh
      npm install
      ```
   3. Start the development server:
      ```sh
      npm run dev
      ```
   4. Open [http://localhost:5173](http://localhost:5173) in your browser.

   ### Folder Structure

   - `src/components/` — Navbar, RecommenedShow, UpcomingEvents, etc.
   - `src/pages/` — Home, Login, Signup
   - `src/assets/` — Static assets (images, etc.)
   - `App.css` — Main styles

   ## Explanation of Design and Technical Decisions

   - **React + Vite:** Chosen for fast development, hot module replacement, and modern tooling.
   - **Authentication:** Uses localStorage for demo purposes. JWT token is stored and checked for session management. Error messages guide users on failed login attempts.
   - **API Integration:** Event data is fetched from a backend API. Recommended and upcoming events are displayed in separate sections.
   - **Image Handling:** Google Drive image links are converted to direct links for display. Images must be public for proper rendering.
   - **Component Structure:** UI is split into reusable components (Navbar, RecommenedShow, UpcomingEvents) for maintainability.
   - **Navigation:** React Router is used for page navigation. Navigation logic is placed inside `useEffect` to avoid React warnings.
   - **Styling:** CSS modules and custom styles are used for layout, spinner, and responsive design.
   - **Error Handling:** Error boundaries and conditional rendering are used to handle API errors and authentication issues gracefully.


- **If you are a new user, sign up first, then log in to the website**
- Sign up for a new account
- Log in with your credentials
- Browse recommended and upcoming events
- Logout from the Navbar

## Usage

- **If you are a new user, sign up first, then log in to the website**
- Sign up for a new account
- Log in with your credentials
- Browse recommended and upcoming events
- Logout from the Navbar
- If you visit an undefined route, you'll see a custom 404 Page Not Found
- **If you are a new user, sign up first, then log in to the website**
- Sign up for a new account
- Log in with your credentials
- Browse recommended and upcoming events
- Logout from the Navbar

   ## API

   - Events data is fetched from:
     - Recommended: `https://gg-backend-assignment.azurewebsites.net/api/Events?type=reco`
     - Upcoming: `https://gg-backend-assignment.azurewebsites.net/api/Events?type=upcoming`

   ## Notes

   - Images from Google Drive must be public and use the correct direct link format
   - All authentication is handled client-side for demo purposes

   ## License

   MIT
