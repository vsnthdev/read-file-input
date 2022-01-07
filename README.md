<h1 align="center">
    <code>read-file-input</code>
</h1>
<p align="center"><strong>Opens a 📝 text editor, waits until closed & captures 🔬 file content.</strong></p>
<p align="center">
    <a target="_blank" rel="noopener" href="https://www.npmjs.com/package/read-file-input">
        <img src="https://img.shields.io/npm/v/read-file-input.svg?style=flat-square" alt="">
    </a>
    <a target="_blank" rel="noopener" href="https://www.npmjs.com/package/read-file-input?activeTab=versions">
        <img src="https://img.shields.io/npm/dm/read-file-input.svg?style=flat-square" alt="">
    </a>
    <a href="https://github.com/vsnthdev/read-file-input/issues">
        <img src="https://img.shields.io/github/issues/vsnthdev/read-file-input.svg?style=flat-square" alt="">
    </a>
    <a href="https://github.com/vsnthdev/read-file-input/commits/main">
        <img src="https://img.shields.io/github/last-commit/vsnthdev/read-file-input.svg?style=flat-square"
            alt="">
    </a>
</p>
<br>

Allows you to capture user input by opening a text editor instead of `stdin`. Manually passing large amounts of data through `stdin` is cumbersome and not widely supported as it depends on the terminal emulator.

This module creates a temporary file and opens it with the configured text editor. When the user saves the file and quits the editor, we read back the file while optionally deleting it.

Since most text editors support UTF-8, any emojis and special characters will be handled safely instead of replying on the terminal.

> Tweet <a target="_blank" rel="noopener" href="https://vas.cx/twitter">@vsnthdev</a>, I would love to know your opinion & experience on this project 😍

## ✨ Features

1. Cross platform
2. Supports graphical & terminal editors
3. Prefills the file with content

## 💿 Installation

<a href="https://www.npmjs.com/package/read-file-input"><img src="https://nodei.co/npm/read-file-input.png?downloads=true&downloadRank=true&stars=true" alt="npm module badge"></a>
```
npm i read-file-input
```

## 🚀 Quick Start

After `read-file-input` as a dependency using the above command, you can use it in the following way:

```javascript
// import readFileInput from 'read-file-input'
import readFi from '../dist/read-file-input.js'

// read from the user with zero configuration
const read = await readFi()

// print the input we have read
console.log('Read input as:')
console.log(read)

```

## 🧪 Configuration

```typescript
export interface ConfigImpl {
    // the name of the file created, defaults to "[id].txt"
    // where [id] is replaced with a random 5 character string
    // to prevent conflicts
    name?: string

    // a custom editor command which defaults to notepad.exe on Windows
    // and uses the $VISUAL & $EDITOR environment variables on Linux & macOS
    editor?: string

    // whether to delete the file after the input has been read
    // defaults to true and recommended to keep it that way
    cleanup?: boolean

    // do not wait for the editor to be closed, just return
    // as soon as the editor has opened, useful to just show
    // some content rather than taking inputs
    noWait?: boolean

    // the content that the temporary file should be pre-filled with
    // undefined by default
    content?: {
        // the string of data which will be pre-filled onto the
        // temporary file, will override the file setting
        data?: string

        // path to a file from which the content will be read
        // for generating the temporary file
        // useful for passing large amount of data for the temporary file
        file?: string
    }
}

```

## 💻 Building & Dev Setup

### ⚡ Running Examples
### 🛠️ Writing Code

<!-- footer -->

## 📰 License
> The **read-file-input** project is released under the [MIT license](https://github.com/vsnthdev/read-file-input/blob/main/LICENSE.md). <br> Developed &amp; maintained By Vasanth Srivatsa. Copyright 2022 © Vasanth Developer.
<hr>

> <a href="https://vsnth.dev" target="_blank" rel="noopener">vsnth.dev</a> &nbsp;&middot;&nbsp;
> YouTube <a href="https://vas.cx/videos" target="_blank" rel="noopener">@vasanthdeveloper</a> &nbsp;&middot;&nbsp;
> Twitter <a href="https://vas.cx/twitter" target="_blank" rel="noopener">@vsnthdev</a> &nbsp;&middot;&nbsp;
> Discord <a href="https://vas.cx/discord" target="_blank" rel="noopener">Vasanth Developer</a>
