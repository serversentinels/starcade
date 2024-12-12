# Starcade
Unleashing the wonders of space, one question at a time!

## Setting up development environment
### Cloning repository
```
git clone https://github.com/serversentinels/starcade.git && cd starcade/
```
### Setting up NPM and nodejs
##### Nix Shell
The included `shell.nix` provides a declarative shell environment relevant to this project.
To use the provided shell declaration, in project directory, run:
```
nix-shell
```

##### macOS(using brew)
```
brew install node
```

##### Debian/Ubuntu based
```
sudo apt install nodejs npm
```

##### Arch Linux based
```
sudo pacman -S nodejs npm
```

##### Windows
```
Good luck you are on your own :D
```

## Packaging and running live preview

### Initial npm setup
```
npm install # (only once. No need to run everytime)
```

### Running the live preview
```
npm run dev
```

In npm console do:
```
o + enter
```
To open the live preview in your default browser.

## Understanding code structure
- `assets/` contains the images and other assets.
- `index.html` is the entry point for the website.
- `src/` contains the source code for the project.
- `src/css/` contains the css files.
- `src/firebase/` contains the firebase configuration.
- `src/scripts/` contains the javascript files.
- `src/pages/` contains the html files for different pages.
- `src/app.js` is the main javascript file.


## Some coding conventions
- Put different pages in `src/pages/` directory.
- Put css files in `src/css/` directory.
- Always import `root.css` in your css files.
- Name of your classes should indicate the purpose of the class.
- JS Scripts unrelated to Firebase should be put in `src/scripts/` directory.
- Use 2 spaces for indentation.

