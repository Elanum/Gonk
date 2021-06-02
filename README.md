# Gonk

:robot: The most powerful droid on Discord

> :construction: This bot is still in development and is not ready to use.

## Requirements

- [Git 2.x](https://git-scm.com/)
- [Node.js 14.x](https://nodejs.org/)
- [Docker 20.x](https://www.docker.com/)
- [Docker Compose 1.x](https://docs.docker.com/compose/)
- [Discord Bot Application](https://discord.com/developers/docs/intro)

## Installation

1. Clone the repository and change directory
   ```bash
   git clone https://github.com/Elanum/GonkBot.git && cd GonkBot
   ```
2. Create the `.env` file by copying the `.env.example`
   ```bash
   cp .env.example .env
   ```
3. Insert the required credentials into the `.env` File
   *(see the comments inside the `.env` file)*
4. Install dependencies
   ```bash
   npm install
   ```
5. Start the Bot with docker-compose
   ```bash
   npm run docker
   ```