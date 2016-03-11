# PARADIG - ADMIN

Admin Portal for the alternate reality game [PARADIG](https://github.com/manfredt27/paradig)

**This tool is powered by [Pernix-Labs](http://labs.pernix-solutions.com/)**.

### Setup

- Make sure you have installed [npm](https://github.com/npm/npm) (comes with node.js), [Ruby](https://www.ruby-lang.org/en/) and [Sass](http://sass-lang.com/install)

- Clone this repository
```
git clone https://github.com/manfredt27/paradig-admin
```

- Navigate into the project folder
```
cd paradig-admin
```

- Install the dependencies
```
sudo npm install
bower install
```

### Running locally

```
gulp serve
```

### Deploying the webpage

- Build the project
```
gulp build
```

- Deploy to firebase
```
firebase deploy
```
