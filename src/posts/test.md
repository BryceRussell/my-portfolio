---
title: 'Test Title'
description: 'This is a description'
slug: 'test'
date: 1999-01-01
---

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat delectus, sapiente, a optio eveniet reiciendis dicta iste qui reprehenderit beatae quia unde architecto placeat sequi animi assumenda minus officia sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat delectus, sapiente, a optio eveniet reiciendis dicta iste qui reprehenderit beatae quia unde architecto placeat sequi animi assumenda minus officia sunt.

**Italics**: *Lorem ipsum dolor sit amet consectetur adipisicing elit.*

**Strong**: **Lorem ipsum dolor sit amet consectetur adipisicing elit.**

**Strikethrough**: ~~Lorem ipsum dolor sit amet consectetur adipisicing elit.~~

**Link**: [Lorem ipsum dolor sit amet consectetur adipisicing elit.](#)

**Code Link**: [`Lorem ipsum dolor sit amet consectetur adipisicing elit.`](#)

**Code**: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`

**Lists**

- Orange
- Bananna
- Lemon
- Apple
  - Green
  - Gold
  - Red
    - Red Delicious
    - Gala

1. Orange
1. Bananna
1. Lemon
1. Apple
1. Grapes

**Footnotes**:

Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].  

You can also use words, to fit your writing style more closely[^note].

[^1]: My reference.
[^2]: Every new line should be prefixed with 2 spaces.  
  This allows you to have a footnote with multiple lines.
[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  
    This footnote also has been made with a different syntax using 4 spaces for new lines.

**Blockquotes**:

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. 

**Code Blocks**:

```
// No language
<Pagination index url="/posts" total={page.last} current={page.current}>
    <active slot="active">{page => <span>{page.number}</span>}</active>
    <span slot="disabled">...</span>
    {page => <a href={page.href}>{page.number}</a>}
</Pagination>
```

```tsx
// tsx
<Pagination index url="/posts" total={page.last} current={page.current}>
    <active slot="active">{page => <span>{page.number}</span>}</active>
    <span slot="disabled">...</span>
    {page => <a href={page.href}>{page.number}</a>}
</Pagination>
```

```javascript
// javascript
var text = "JavaScript syntax highlighting";
console.log(text)
alert(text);
```
 
```python
# python
test = "Python syntax highlighting"
print text
```

**Tables**:

<table role="grid">
<thead>
   <tr>
      <th scope="col">#</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
   </tr>
</thead>
<tbody>
   <tr>
      <th scope="row">1</th>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
   </tr>
   <tr>
      <th scope="row">2</th>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
   </tr>
   <tr>
      <th scope="row">3</th>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
   </tr>
</tbody>
</table>

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

**Images**:

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

**Page Breaks**:

---

Hyphens

***

Asterisks

___

Underscores


