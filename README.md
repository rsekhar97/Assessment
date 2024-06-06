# CalculateNumbers
Follow below steps to run the code
- clone the git repo
- Delete the node_modules folder(ignore if not existing) inside the Questionnarie folder
- Open Terminal/CMD prompt and run `npm i` inside the Questionnarie folder
- If `npm i` is successful, run `npm run android` or `npm run ios`

Questions
- For each question there are separate .js files
- Question-1 refer to **Calculate.js**
- Question-2 refer to **NavSearchBar.js**
- Question-3 refer to **AddArrayNumber.js(with UI)** or **AddNumbers.js(JS function)**

To test each question 
- When the application is executed by default the **Calculate.js** will be shown
- To test other questions, open `App.tsx` file and comment the `<Calculate/>` and uncomment the `<NavSearchBar/>` component
