# Things to note when running the server


1) Ensure it runs on `localhost port 3000`
- This is because the url is hard coded on the front end side to make POST requests to `http://localhost:3000`
- If you cannot run this server on port 3000 or on localhost, then change the await fetch url line in `frontend/src/components/TranslationForm.tsx` on what you are running the server on
2) In the server folder, run `npm install` to ensure you install the necessary packages.
3) Start running the server with `node server.js`
- Ensure you are in the `server` folder when doing this. There should be `server.js` in your current working directory.
4) Ensure frontend code runs on `localhost port 3001` as this is hardcoded to be CORS allowed on `server.js`. - You can change it if you want but may not work lol i not sure on this
5) If you are running the server in a virtual environment, ensure that for the `spawn` process in `server.js` uses the virtual environment's python.
- An example if this is as such:
```python
const pythonProcess = spawn('/path/to/your/project/myenv/bin/python', ['translate.py', inputText]);
```
- Otherwise, it will use the python on your local computer's PATH to run the script.
- Reminder that the relevant npm packages need to be installed in the python interpreter that you want to use to run `spawn`
6) To change the BART model used to generate the detoxed text, use the `detox` function in `translate.py` (its a commented out line), whereas `ourdetox` function is our own model.
- `detox` function can be found from the `detox.py` file where it uses the ParaDetox model to generate the detoxified sentence. This code is run to essentilly provide a proof of concept for our gui.
- `ourdetox` function can be found from the `ourDetox.py` file where it uses our trained BART model `bartDetox.pt` to generate the detoxified sentence.