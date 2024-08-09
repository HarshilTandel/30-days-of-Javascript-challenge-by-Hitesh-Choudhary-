# Day 26: Chat Application

A basic chat application created with Node.js and WebSocket for real-time interaction.

## Key Features

- Instant Messaging: Exchange messages in real time.
- User Login: Simple username-based authentication.
- Responsive Layout: Chat interface optimized for mobile devices.
- WebSocket Support: Seamless communication using WebSocket.

## Getting Started

To set up the chat application, follow the steps below:

1. **Clone the Repository**
   ```bash

   git clone https://github.com/HarshilTandel/30-days-of-Javascript-challenge-by-Hitesh-Choudhary-.git

   ```
2.**Navigate to the Project Directory**

```bash

 cd "30-Day JS Chai Aur Code/Day-26 Project-3 Chat  Application"

 ```
3. **Install Dependencies**

   Open terminal and run:

   ```bash

   npm init -y

   npm install ws

   ```

   This will install all the necessary dependencies for both the client and server.

4. **Run the Application**

   Start the server:

   ```bash

   cd server

   node server.js

   ```

   The server will run on `http://localhost:8080`.

   Open another terminal and Install wscat globally (if you haven't already):

   ```bash

     npm install -g wscat

   ```

   and after that run:

   ```bash

    wscat -c ws://localhost:8080

   ```
## How to Use

1. **Login**: Enter a username in the provided field and click the "Login" button to join the chat room.
2. **Send Messages**: Type your message in the input box and either press Enter or click the "Send" button to send it.
3. **View Messages**: Messages from other users will appear in the chat window in real-time.

## Technologies Used

- **Node.js**: The server-side runtime that powers the backend.
- **WebSocket**: Used for real-time, bidirectional communication.
- **HTML/CSS**: Provides the structure and style for the web interface.
- **JavaScript**: Adds interactivity and handles client-side functionality.
