/**
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 **/


/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/trunk/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('calculator.html', {
    bounds: {
      width: 300,
      height: 380
    },
    maxWidth: 300,
    minWidth: 260,
    minHeight: 380,
    maxHeight: 380,
  });
});
