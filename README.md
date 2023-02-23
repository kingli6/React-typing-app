# Function to learn or gotcha functions

### function that checks user input, uses space to...

    checkMatch() checks word with currentInput

    {keyCode} is deconstructed from (e.target.value)

function handleKeyDown({ keyCode }) {
//keyCode, we are deconstructing the event 28:55?
//space bar
if (keyCode === 32) {
checkMatch();
setCurrentInput(""); //clears the input field when pressed space
setCurrWordIndex(currWordIndex + 1);
}
}

function checkMatch() {
const wordToCompare = words[currWordIndex];
const doesItMatch = wordToCompare === currentInput.trim(); //true or false
console.log({ doesItMatch });
}

### input listner. Q. Are we setting value so it can be used somewhere else? Q. Isn't value what comes out of this?

    Q.we are using onChange to catpture the input or target.value timestamp 26:00?

<input
type="text"
className="input"
onKeyDown={handleKeyDown}
value={currentInput}
onChange={(e) => setCurrentInput(e.target.value)}
/>

### setInterval(), clearInterval()

    //javascript function
    function start() {
    let interval = setInterval(() => {
      setCountDown((prevCountdown) => {
        if (prevCountdown === 0) clearInterval(interval);
        else return prevCountdown - 1;
      });
    }, 1000);

}

### creating a new array, fill? map (goes through each item and adds words... )

    //why does fill have null?    //T. Num_of_words is 200. Fill fills it with null value?
    function generateWords() {
        return new Array(Num_of_words).fill(null).map(() => randomWords());
    }

### this won't work cause in Javascript, due to closure? or scope? it's not aware of the current state timestamp 18:00

    function Start() {
        setInterval(() => {
            setCountDown(countDown -1)      //WONT WORK
        }, 1000)
    }

But if you add a call back function, react will prioritize it.
setCountDown((prevCountdown) => prevCountdown - 1);

### Firefox short keys

    ctrl + tab and ctrl + shift + tab to switch between tabs

### creating space with <span> tag

    //version 2     //timesptamp 24:00?
    <div className="content">
        {words.map((word, i) => (
        <>
            <span key={i}>
                {word.split("").map((char, idx) => (
                    <span key={idx}>{char}</span>
                ))}
            </span>
            <span> </span>
        </>
        ))}
    </div>

    //version 1
    <span> </span> 12:49 time stamp
    {words.map((word, i) => (
        <>
            <span>{word}</span>
            <span> </span>
        </>
    ))}

# links

### https://www.youtube.com/watch?v=t4W7PN4js-8 //tutorial link

### https://bulma.io/documentation/overview/start/ //got css that doesn't have javascript like bootstrap

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
