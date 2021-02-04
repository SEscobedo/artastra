# Contribution
## Introduction

It is assumed that you know a little about node.js, git and three.js. If not, [here's some help to get started with git](https://help.github.com/en/github/using-git) and [here’s some help to get started with node.js.](https://nodejs.org/en/docs/guides/getting-started-guide/)
For three.js you can visit [three.js website](https://threejs.org/).

* Install [Node.js](https://nodejs.org/)
* Install [Git](https://git-scm.com/)
* [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) artastra 
* Open your OS’s terminal
* Change into the directory you’d like
* Clone your forked repo

      git clone https://github.com/[yourgithubname]/artastra.git

* Go into the artastra directory.
        
      cd ./artastra

* Install the dependencies (this will install three.js as well)

      npm install

## Testing

The next most important script runs all the appropriate testing.

    npm test

If you add new features, write the appropiate unitary tests in the file artastra.test.js at directory tests/.


## Making changes

When you’ve decided to make changes, start with the following:

* Update your local repo
        
      git pull https://github.com/SEscobedo/artastra.git
      git push

* Make a new branch from the dev branch
        
      git checkout dev
      git branch [mychangesbranch]
      git checkout [mychangesbranch]

* Add your changes to your commit.
* Push the changes to your forked repo.
* Open a Pull Request (PR)

## Notes:

* Making changes may require changes to the documentation.
* If you add some assets for the examples (models, textures, sounds, etc), make sure they have a proper license allowing for their use here, less restrictive the better.
* If some issue is relevant to patch / feature, please mention it with hash (e.g. #15) in a commit message to get cross-reference in GitHub.
* If you make a PR but it is not actually ready to be pulled into the dev branch, add `[Draft]` into the PR title and/or convert it to a draft PR

