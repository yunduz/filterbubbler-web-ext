# FilterBubbler

This is an early sketch of a tool for performing collaborative text
analysis and classification of web page text content.

## Screencasts

We have created some screencasts to introduce FilterBubbler and to demonstrate how to build the software.

 * [FilterBubbler functionality demo](https://www.youtube.com/watch?v=-1W9dEkNHN8)
 * [Checking out FilterBubbler from GIT and building it](https://youtu.be/Pnq_pwpR_ww)

## Getting started

### Setup

 * Firefox: You will need Firefox version 49 or higher, in order to support [temporary add-on installation](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox).

 * [Install Node.js and npm](https://docs.npmjs.com/getting-started/installing-node)

 * [Install web-ext](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext) with: `npm install --global web-ext`

### Building

To build the extension you will need to clone this repository, change into the directory and run:

```npm install```

### Running locally

Change to the `extension` subdirectory of this repository, and use web-ext to start Firefox with InfoBubbles.

```sh
cd extension
web-ext run
```
