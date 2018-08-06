# shlink-web-client

[![Build Status](https://travis-ci.org/shlinkio/shlink-web-client.svg?branch=master)](https://travis-ci.org/shlinkio/shlink-web-client)

A ReactJS-based progressive web application for [Shlink](https://shlink.io).

## Installation

There are three ways in which you can use this application.

* The easiest way to use shlink-web-client is by just going to https://app.shlink.io.

    The application runs 100% in the browser, so you can use that instance and access any shlink instance from it.

* Self hosting the application yourself.

    Get the [latest release](https://github.com/shlinkio/shlink-web-client/releases/latest) and download the distributable zip file attached to it (`shlink-web-client_X.X.X_dist.zip`).

    The package contains static files only, so just put it in a folder and serve it with the web server of your choice (just take into account that all the files are served using absolute paths, so you have to serve it from the root of your domain, not from a subpath).

* Use the official [docker image](https://hub.docker.com/r/shlinkio/shlink-web-client/)

    If you want to deploy shlink-web-client in a container-based cluster (docker swarm, kubernetes, etc), just pick the image and do it.

    It's a lightweight [nginx:alpine image](https://hub.docker.com/r/library/nginx/) serving the assets on port 80.
