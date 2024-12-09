# Starcade
Unleashing the wonders of space, one question at a time!

### Setting up development environment
#### Setting up NPM and nodejs

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

##### Nix Shell
The included `shell.nix` provides a declarative shell environment relevant to this project.
To use the provided shell declaration, in project directory, run:
```
nix-shell
```

#### Running live preview
```
npm install # (only once. No need to run everytime)
```

##### Running the live preview
```
npm run dev
```

