# Overview

Our goal in creating Botinhood was to create a stock trading app that increases capital gains through the use of algorithms.

Botinhood is simple to use. After cloning both the Botinhood-Web and Botinhood-Web-Backend repositories, open the terminal in each repository and change the directory
to botinhood and run the 'npm install' command. Next run the command 'npm start' in both terminals. Next go to the web page that will be opened and enter Alpaca credentials on the sign in page (the current version only works with one account, but other users will be implemented in the future). After this, the app will run itself. On the Home page, the user has the ability to add or delete stocks that the algorithm may trade. The Assets page shows the user their current portfolio, while the Orders page shows the user what transactions the algorithm is making.

# Development Environment

Botinhood was written in VS Code primarily using the JavaScript, TypeScript, CSS languages.
It utilizes the React and Nest JS libraries to build the web app. The app uses the Alpaca API to get recent stock data. MongoDB also used as a storage location.

# Collaborators

Alex Berryhill, Eric Poole, Erik Sanders, Haydon Uresti, Ravy Lim, Tapelo Dube

# Useful Websites

- [Alpaca](https://alpaca.markets/docs/oauth/guide/)
- [W3 Schools](https://www.w3schools.com/jsref/jsref_includes_array.asp)
- [React Documentation](https://legacy.reactjs.org/docs/getting-started.html)

# Future Work

- Display more information about the stock transactions on the Orders page.
- Allow for more users to create accounts.
- Improve UI to be more intuitive with new users.
