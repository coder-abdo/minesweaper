# Minesweeper Game with React and TypeScript

This project is a Minesweeper game built using React and TypeScript. The game is a classic puzzle game where the player must clear a board of hidden mines without detonating them.

## Table of Contents

- [Installation](#installation)
- [Game Rules](#game-rules)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run the game locally, follow these steps:

1. Clone the project repository: `git clone https://github.com/coder-abdo/minesweeper.git`
2. Install the project dependencies: `npm install`
3. Start the development server: `npm start`
4. Open your web browser and navigate to `http://localhost:3000`

## Game Rules

The objective of the game is to clear a board of hidden mines without detonating them. The board is divided into cells, and each cell can either be empty or contain a mine. The player must uncover each cell on the board by clicking on it. If a cell contains a mine, the game is over. If a cell does not contain a mine, it will display a number indicating how many adjacent cells contain mines. The player can use this information to deduce which cells are safe to uncover and which may contain mines.

To aid the player, the game also includes features such as flagging and marking cells. Flagging a cell marks it as potentially containing a mine, allowing the player to keep track of which cells they suspect may be dangerous. Marking a cell is similar to flagging, but is used to mark cells that the player knows are safe, allowing them to focus on other areas of the board.

## Technologies Used

This project was built using the following technologies:

- React: A JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- StoryBook: A CSS architecture that allows for scoped, modular CSS styles.
- Jest: A JavaScript testing framework.
- React Testing Library: A library for testing React components.

## Contributing

Contributions to this project are welcome! If you notice a bug, have a feature request, or would like to contribute code, please open a pull request or issue on this repository.

Before submitting a pull request, please ensure that your changes pass the existing tests and adhere to the project's coding standards.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
