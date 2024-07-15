# MBlog

A twitter-like social media web app, made entirely in Typescript.
This repo contains the front-end for the project, made with React and TailwindCSS.

MBlog is actually a "remake" of a old project of mine, MacielBlog. However, this one includes much more complex code, with persistent login and JWT token managing.

# Setup

1. Setup the API from the [MBlog API Repo.](https://github.com/m4c1elz/mblog-api)
2. Create a `.env` file, defining the URL for the backend.

```
# by default the API runs at port 8080, but you can manually change that in the backend too
VITE_API_URL="http://localhost:8080"
```

3. Setup the frontend:

```
pnpm install
pnpm dev
```

> Project made via pnpm, but you can use npm too.
