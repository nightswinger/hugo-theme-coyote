# Hugo Theme Coyote

## Demo

[Example Site](https://nightswinger.github.io/hugo-theme-coyote/)

## Quick Start

### Install

Clone this repo to `themes` folder:

```bash
git clone https://github.com/nightswinger/hugo-theme-coyote.git themes/coyote --depth=1
```

Then, add the theme to your site config:

```bash
echo theme = \"coyote\" >> config.toml
```

### Add Search Page

Add the following to your `config.toml`

```toml
[outputs]
  home = ['HTML', 'JSON']
```

Create a file with `search.md` in `content` directory

```text
---
title: "Search"
layout: "search"
---
```

### Create Content

You can create a new content file using archetype template

```bash
hugo new --kind post-bundle posts/my-first-post
```

## Features

* **Search** supported by [Fuse.js](https://github.com/krisk/Fuse)
* **Google Analytics** supported
