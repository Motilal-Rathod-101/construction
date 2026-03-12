🏗 Construction Field Management App

A simple React.js web app to manage construction sites, projects, and daily progress reports (DPR).
Built with React, Tailwind CSS, and React Router v6.

This app allows you to:
View a list of construction sites and their projects
Add daily progress reports with photos
Track project progress and status
Navigate between project details and DPR forms

📂 Features

User login (mock authentication)
Dashboard showing all projects
DPR form with input validation
Upload up to 3 photos per DPR entry
Responsive design (mobile → tablet → desktop)
Dark mode support
Clean and modular React code

⚙️ Tech Stack

Frontend: React.js (Vite)
Styling: Tailwind CSS
Routing: React Router v6
State Management: useState + useContext (Redux optional)
HTTP Client: Axios / Fetch (mock data used)

🚀 Getting Started

Follow these steps to run the project locally:
Clone the repository
git clone https://github.com/Motilal-Rathod-101/construction.git

Go to project directory
cd construction/frontend

Install dependencies
npm install

Run the development server
npm run dev

Open your browser at 
http://localhost:5173

🧑‍💻 User Credentials
For testing login:
Open your browser at
http://localhost:5173/login

Email:
test@test.com
Password:
123456

✨ Notes
DPR form validates inputs and shows error messages if fields are empty.
Maximum 3 photos allowed per DPR submission.
Project cards are clickable and navigate to DPR form for that project.
