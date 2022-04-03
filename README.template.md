<h1 align="center">
    <code><!-- name --></code>
</h1>
<p align="center"><strong><!-- description --></strong></p>
<p align="center">
    <a target="_blank" rel="noopener" href="https://www.npmjs.com/package/<!-- name -->">
        <img src="https://img.shields.io/npm/v/<!-- name -->.svg?style=flat-square" alt="">
    </a>
    <a target="_blank" rel="noopener" href="https://www.npmjs.com/package/<!-- name -->?activeTab=versions">
        <img src="https://img.shields.io/npm/dm/<!-- name -->.svg?style=flat-square" alt="">
    </a>
    <a href="https://github.com/<!-- username -->/<!-- name -->/issues">
        <img src="https://img.shields.io/github/issues/<!-- username -->/<!-- name -->.svg?style=flat-square" alt="">
    </a>
    <a href="https://github.com/<!-- username -->/<!-- name -->/commits/main">
        <img src="https://img.shields.io/github/last-commit/<!-- username -->/<!-- name -->.svg?style=flat-square"
            alt="">
    </a>
</p>
<br>

Allows you to capture user input by opening a text editor instead of `stdin`. Manually passing large amounts of data through `stdin` is cumbersome and not widely supported as it depends on the terminal emulator.

This module creates a temporary file and opens it with the configured text editor. When the user saves the file and quits the editor, we read back the file while optionally deleting it.

Since most text editors support UTF-8, any emojis and special characters will be handled safely instead of replying on the terminal.

> Tweet <a target="_blank" rel="noopener" href="https://vas.cx/twitter">@<!-- username --></a>, I would love to know your opinion & experience on this project 😍

## ✨ Features

1. Cross platform
2. Supports graphical & terminal editors
3. Prefills the file with content

## 💿 Installation

<a href="https://www.npmjs.com/package/<!-- name -->"><img src="https://nodei.co/npm/<!-- name -->.png?downloads=true&downloadRank=true&stars=true" alt="npm module badge"></a>
```
npm i <!-- name -->
```

## 🚀 Quick Start

After `<!-- name -->` as a dependency using the above command, you can use it in the following way:

```javascript
<!-- example -->
```

## 🧪 Configuration

```typescript
<!-- config -->
```

## 💻 Building & Dev Setup

You need to be at least on **Node.js v<!-- nodeVersion --> or above** and follow the below instructions to build the project 👇

- **STEP 1️⃣**  Clone this project
- **STEP 2️⃣**  Run **`npm install`** to get all dependencies
- **STEP 3️⃣**  To build the TypeScript project run **`npm run build`**

Now you should have a `dist` folder in the project directory.

### ⚡ Running Examples

Once you have successfully built the project, to run a basic example 👇

```
node examples/basic.js
```

Checkout [other examples](https://github.com/vsnthdev/read-file-input/tree/main/examples) to know more on different use cases and configuration of options of **read-file-input**.

### 🛠️ Writing Code

This project follows [Vasanth's Commit Style](https://vas.cx/commits) for commit messages.

<!-- footer -->

## 📰 License
> The **<!-- name -->** project is released under the [MIT license](https://github.com/<!-- username -->/<!-- name -->/blob/main/LICENSE.md). <br> Developed &amp; maintained By Vasanth Srivatsa. Copyright <!-- year--> © Vasanth Developer.
<hr>

> <a href="https://vsnth.dev" target="_blank" rel="noopener">vsnth.dev</a> &nbsp;&middot;&nbsp;
> YouTube <a href="https://vas.cx/videos" target="_blank" rel="noopener">@vasanthdeveloper</a> &nbsp;&middot;&nbsp;
> Twitter <a href="https://vas.cx/twitter" target="_blank" rel="noopener">@<!-- username --></a> &nbsp;&middot;&nbsp;
> Discord <a href="https://vas.cx/discord" target="_blank" rel="noopener">Vasanth Developer</a>
