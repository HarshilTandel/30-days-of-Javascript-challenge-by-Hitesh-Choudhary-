# EchoSocial - Social Media Dashboard

Welcome to the EchoSocial! This project is a simple social media dashboard web application. It allows users to sign up, create posts, and manage their account. The application uses HTML, CSS, and JavaScript, with local storage to persist posts and session storage to manage user sessions.

## Features

- **User Authentication:** Secure login and sign-up functionality.
- **Dashboard Overview:** A central hub for viewing posts, managing account settings, and more.
- **Post Creation:** Easily create and share posts with text and images.
- **Responsive Design:** A user-friendly experience across devices.

## Technologies Used

![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## Project Structure

```
/project-root
    ├── dashboard/
    │   └── dashboard.html
    ├── login-page/
    │   ├── login.css
    │   ├── login.html
    │   └── login.js
    ├── signup-page/
    │   ├── signup.css
    │   ├── signup.html
    │   └── signup.js
    ├── index.html
    ├── style.css
    ├── favicon.jpg
    └── README.md
```

### Prerequisites

Ensure you have the following installed on your machine:
- A modern web browser (e.g., Chrome, Firefox, Safari)
- A code editor (e.g., VSCode, Sublime Text)

### Files and Directories

- **`index.html`**: The homepage of the application.
- **`style.css`**: Global styles for the application.
- **`signup-page/`**:
  - **`signup.html`**: The signup page where users can create an account.
  - **`signup.css`**: Styles for the signup page.
  - **`signup.js`**: JavaScript for handling signup functionality.
- **`login-page/`**:
  - **`login.html`**: The login page (if used for logging in users).
  - **`login.css`**: Styles for the login page.
  - **`login.js`**: JavaScript for handling login functionality.
- **`dashboard/`**:
  - **`dashboard.html`**: The dashboard where users can create and view posts.
  - `dashboard.css` - Styles specific to the dashboard page.
  - **`dashboard.js`**: JavaScript for handling post creation and display functionality.

## Notes

- **Session Management**: User sessions are managed using `sessionStorage`, and posts are stored in `localStorage`.
- **Post Images**: Images are handled using `FileReader` to convert files to data URLs.

## Usage

1. **Access the Login Page**

   Navigate to `login.html` to log in or create an account.

2. **Sign Up for an Account**

   Use the `signup.html` page to register a new account.

3. **Explore the Dashboard**

   Once logged in, you’ll be redirected to `dashboard.html`, where you can create and view posts, manage your account, and explore other features.

## How It Works

### User Authentication

- **Sign-Up:** Users can create an account by providing a username and password. The credentials are securely stored in `localStorage` for easy retrieval during login.
- **Login:** Upon successful login, a session is created using `sessionStorage` to track the user's active session, allowing access to the dashboard.

### Dashboard Overview

- **Posts Management:** The dashboard allows users to create new posts by entering text and uploading images. These posts are stored in `localStorage`, ensuring they persist across sessions.
- **Account Settings:** Users can manage their account settings directly from the dashboard, including updating their profile information.

### Responsive Design

The application is designed to be fully responsive, ensuring a seamless experience on both desktop and mobile devices. The layout adjusts dynamically based on the screen size to provide an optimal viewing experience.
