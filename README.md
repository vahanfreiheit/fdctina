# freiheit.com website generated with HUGO

## Local development

### installing
    $ npm install

### run locally
    $ hugo server -D --disableFastRender

### build
    $ hugo --minify -e production

## Deployment

The generated page is published as a Github page in the branch `gh-pages`.
A Github workflow is defined in `.github/workflows/gh-pages.yml`.
Unfortunately our current plan at Github does not support the execution of Github Actions.
Otherwise every push to `master` would trigger a rebuild of the website.

As an alternative we use `act` (https://github.com/nektos/act) to execute the pipeline locally.

### Preparation

* install docker with the instructions in `INSTALL_DOCKER.md`
* Install `act` by following the instructions on https://github.com/nektos/act
* Create a Github token at https://github.com/settings/tokens that grands access to private repositories.

### export token
Put this into your .zshrc or .bashrc:

    export GITHUB_TOKEN=your_token

### Publish

First you have to start your docker machine with `vagrant up` (see `INSTALL_DOCKER.md`)
Then you can publish the website with this command, executed in the root of this repo:
    
    $ act --secret GITHUB_TOKEN=$GITHUB_TOKEN deploy

You have to select the medium installation on the first execution of `act`.


### Netlify CMS

#### running locally

- run `npx netlify-cms-proxy-server` to start the proxy server
- run `hugo serve` to start the hugo server
- go to `http://localhost:1313/admin` to login to the CMS