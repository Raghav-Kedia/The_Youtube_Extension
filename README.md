# The YouTube Extension

This repository contains a Chrome extension that enhances the YouTube video watching experience by providing additional features. It includes functions for thumbnail swapping, playback speed control, and an ad blocker.

## Installation

1. Clone or download this repository to your local machine.
2. Open Google Chrome and go to `chrome://extensions`.
3. Enable the "Developer mode" toggle switch in the top right corner.
4. Click on the "Load unpacked" button and select the folder containing the downloaded extension files.

## Features

### Thumbnail Swapper

The `thumbnailSwapper` function replaces the thumbnails of YouTube videos with an embedded iframe that allows for easier and faster playback. When hovering over the thumbnail, the video starts playing automatically from the last watched position.

### Playback Speed Control

The `changeSpeed` function adds a playback speed control input to the YouTube video player. It allows users to adjust the playback speed by manually entering a value or using the arrow keys while holding the Ctrl key.

### Ad Blocker

The `adBlocker` function automatically skips YouTube ads by setting the playback rate to 16x and clicking the skip ad button whenever it is available.

## Usage

1. Install the Chrome extension using the installation instructions mentioned above.
2. Open any YouTube video or the YouTube homepage.
3. The extension will automatically apply the enhancements to the YouTube video watching experience based on the current page's URL. Thumbnail swapping will occur every 5 seconds on the homepage or video listings, and playback speed control will be added to the video player. The ad blocker feature is commented out by default but can be enabled by uncommenting the corresponding line in the code.

Note: This extension is intended for personal use and modifying YouTube's behavior may violate the platform's terms of service. Use it responsibly and at your own risk.

## Compatibility

The Chrome extension is designed to work with the latest version of Google Chrome. It may also work with Chromium-based browsers that support Chrome extensions.

## Disclaimer

This Chrome extension is provided as-is without any warranty. The author is not responsible for any issues or consequences resulting from its use. Use it responsibly and at your own risk.
