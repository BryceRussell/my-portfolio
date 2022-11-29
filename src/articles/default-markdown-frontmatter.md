---
slug: 'astro-default-frontmatter'
title: Default Frontmatter in Astro
description: How to create a Remark plugin for Astro to inject default frontmatter values into your markdown
date: 2022/09/08
demo: 'https://stackblitz.com/edit/github-hfgk3n'
source: 'https://github.com/BryceRussell/astro-remark-default-frontmatter'
tags:
 - 'remark'
 - 'markdown'
---

## Default Layout

With Astro it is super easy to interact with the frontmatter of your markdown files using remark plugins

```ts
//plugin.mjs
export function defaultLayout() {
  return function (tree, file) {
    file.data.astro.frontmatter.layout = '~/layouts/Base.astro';
  }
}
```
```ts
//astro.config.mjs
import { defaultLayout } from './plugin.mjs';
export default defineConfig({
  markdown: {
    remarkPlugins: [
      [defaultLayout],
    ],
  },
});
```

This plugin example injects a layout named `Base.astro` into all markdown files in your project.

Although this works, it is very limited, what if you want to define your own layout? You can pass arguments into your plugin like so:

```ts
//plugin.mjs
export function defaultLayout(layout) {
  return function (tree, file) {
    file.data.astro.frontmatter.layout = layout;
  }
}
```
```ts
//astro.config.mjs
import { defaultLayout } from './plugin.mjs';
export default defineConfig({
  markdown: {
    remarkPlugins: [
      [defaultLayout, '~/layouts/Base.astro'],
    ],
  },
});
```


## Global Default

A default layout can be very useful, but what if you want to set a default for any variable in the frontmatter? By passing an object as an argument you can use the object to inject whatever defaults you want into the frontmatter

```ts
export function defaultFrontmatter(option = {}) {
    return function (tree, file) {
        file.data.astro.frontmatter = {...file.data.astro.frontmatter, ...option};
    };
}
```

```ts
//astro.config.mjs
import { defaultFrontmatter } from './plugin.mjs';
export default defineConfig({
  markdown: {
    remarkPlugins: [
      [defaultFrontmatter, {
        layout: '~/layouts/Base.astro',
        draft: true
        title: 'Placeholder'
      }],
    ],
  },
});
```

## Directory Defaults

Defining a global default is very useful, but what if you want some files to be exluded from the defaults or have different defaults entirely? This final version of the ultimate frontmatter injection plugin allows you to define a default fronmatter based on what directory the file is in.

```ts
export function defaultFrontmatterAdvanced(options = []) {
  return function (tree, file) {
    const filepath = file.history.pop().replace(file.cwd, '.').replace(/\\/g, '/')
    for (const option of options) {
      for (const dir of option.dirs) {
        if (filepath.startsWith(dir)) {
          if (option.replace) file.data.astro.frontmatter = option.frontmatter
          else file.data.astro.frontmatter = {...file.data.astro.frontmatter, ...option.frontmatter}
        }
      }
    }
  }
}
```
```ts
const frontmatterDefaults = [
  // Global default
  {
    dirs: ['./'],
    frontmatter: {
      layout: "~/layouts/Base.astro",
    },
  },
  // Route based defaults
  {
    dirs: ['./src/pages/blog', './src/pages/projects'],
    frontmatter: {
      layout: "~/layouts/ArticleLayout.astro",
      draft: true
    },
  },
  //Opt of of injecting defaults
  {
    dirs: ['./src/archive'],
    frontmatter: {},
    replace: true
  },
]

export default defineConfig({
  markdown: {
    remarkPlugins: [
      [defaultFrontmatterAdvanced, frontmatterDefaults],
    ]
  },
});

```