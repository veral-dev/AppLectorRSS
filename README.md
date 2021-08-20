# App Lector RSS

## Running the project

- Clone this project

```
git clone < project-url.git >
```

- [Install NodeJS](https://nodejs.org/en/) on your computer.

- [Install npm](https://docs.npmjs.com/getting-started) on your computer

- Launch `npm i` command in a terminal opened in the project folder.

  > This command will look into the _package.json_ file and install all the dependencies listed here.

- Setting up the development environment for React Native CLI
- [Install React Native Cli](https://reactnative.dev/docs/environment-setup) on your computer

### Start Metro

- To start Metro, run npx react-native start inside your React Native project folder

### Start your application

- Let Metro Bundler run in its own terminal. Open a new terminal inside your React Native project folder. Run the following:

### Android

npx react-native run-android

### Ios

npx react-native run-android

### External dependencies

in addition to the normal dependencies to start the react-native project, I have used "axios" to fetch the data. This is because "axios" is more compatible than javascript default, fetch. And "@react-native-async-storage/async-storage", to set and get data from local storage, because old async-storage is deprecated.

### Designs patterns

- UI components
  User Interface components with props to be able to reuse it in the future.
  All of them are into /components/ui
- Styles File
  General styles file to use repeating styles throughout the app.
  You can find the file into styles/GeneralStyles.js
- Style into Component
  Custom component styles for styles that are only used in that component.

### Scalability

I wanted to build a small app but with a structure to make it grow more easily. Therefore, I have created a general state with useContext and a preconfigured navigation folder to add screens or stacks more easily
