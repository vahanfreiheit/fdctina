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

## Live system

The content is delivered directly via the github pages with cloudflare CDN in front of it.

### Settings on github

The locally generated pages are committed to the git master branch.
Its content is then delivered as a github page.

For the pages to be delivered under their own domain, a file named CNAME must be created in the
repository in the toplevel with the name CNAME, which contains the external
contains the external domain name freiheit.com

This makes it possible that for requests with the host header freiheit.com the pages are delivered
are delivered. At the same time it prevents that the page is also delivered under
freiheit-com.github.io and thus prevents duplicate content.

Also, requests to www.freiheit.com are redirected to freiheit.com.
(This setting can also be seen under Settings -> Domain Name).


### Cloudflare

Cloudflare https://www.cloudflare.com is as reverse proxy cache in front of the github page and has the following tasks:

* Running the DNS servers for the freiheit.com zone.
* Providing a dedicated SSL certificate for the domain *.freiheit.com, freiheit.com
* Redirect from http to https
* Page rules for caching
* As a side effect cloudflare provides CDN caching and a DDOS protection for the website as well as the DNS servers

#### Page Rules in Cloudflare

    1) http://*freiheit.com/* Always Use HTTPS
    2) freiheit.com/*.html Browser Cache TTL: 2 hours, Edge Cache TTL: 4 hours
    3) freiheit.com/assets/images/* Browser Cache TTL: 8 days, Edge Cache TTL: 14 days
    4) freiheit.com/assets/fonts/* Browser Cache TTL: 8 days, Edge Cache TTL: 14 days
    5) freiheit.com/*.js Browser Cache TTL: 2 hours, Edge Cache TTL: 4 hours
    6) freiheit.com/*.css Browser Cache TTL: 2 hours, Edge Cache TTL: 4 hours

#### DNS Records für die Website in Cloudflare

    CNAME freiheit.com is an alias of freiheit-com.github.io
    CNAME www is an alias of freiheit-com.github.io