# Things to note when running the server


1) Ensure it runs on `localhost port 3000`
- This is because the url is hard coded on the front end side to make POST requests to `http://localhost:3000`
- If you cannot run this server on port 3000 or on localhost, then change the await fetch url line in `frontend/src/components/TranslationForm.tsx` on what you are running the server on
2) In the server folder, run `npm install` to ensure you install the necessary packages.
3) Start running the server with `node server.js`
- Ensure you are in the `server` folder when doing this. There should be `server.js` in your current working directory.
4) Ensure frontend code runs on `localhost port 3001` as this is hardcoded to be CORS allowed on `server.js`. - You can change it if you want but may not work lol i not sure on this