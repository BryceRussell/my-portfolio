---
slug: 'responsive-aspect-ratios'
title: Responsive Aspect Ratios using em units and clamp()
description: How to use em units and clamp() to create responsive apsect ratios
date: 2023/01/12
tags:
 - 'css'
 - 'fluid'
 - 'responsive'
---

I recently needed a responsive 16/9 youtube embed and used this super simple pattern that utilizes `em` units and `clamp()` functions.

## Define Aspect Ratio

The first step involves applying your ratio to the `height` and `width` properties using `em` units. This allows `height` and `width` to be sized relative to the same value, `font-size`. This value will act as a size multiplier for the size of your aspect ratio. The example below scales a `16/9` element to a size of `256x144` using a size multiplier of `16px`

```css
.fluid-16\/9 {
	height: 9em; /*   9 * 1em(16px) = 144px   */
	width: 16em; /*   16 * 1em(16px) = 256px   */
	font-size: 16px; /* 256x144 */
}
```

## Make it Responsive

To make the size of our ratio responsive you can generate `clamp()` functions using a website like https://clamp.font-size.app to interpolate between two size multipliers for our aspect ratio. The example below interpolates a `16/9` ratio between a minimum size of `256x144` at a view width of `375px` and a maximum size of `960x540` at a view width of `1500px`

```css
.fluid-16\/9 {
	height: 9em;
	width: 16em;
	/* Interpolates between 
		min size of 256x144 at a vw of 375px
		max size of 960x540 at a vw of 1500px
	*/
	font-size: clamp(1rem, 0.083rem + 3.911vw, 3.75rem);;
}
```

## Resources

### Responsive `clamp()` Examples


min | minvw | min size | max | maxvw | max size | clamp
---|---|---|---|---|---|---
16px | 375px | 256x144px | 40px | 1500px | 640x360px | `clamp(1rem, 0.5rem + 2.1333vw, 2.5rem)`
16px | 375px | 256x144px | 53.33px | 1500px | 854x480px | `clamp(1rem, 0.222rem + 3.318vw, 3.333rem)`
16px | 375px | 256x144px | 60px | 1500px | 960x540px | `clamp(1rem, 0.0833rem + 3.9111vw, 3.75rem)`
16px | 375px | 256x144px | 80px | 1500px | 1280x720px | `clamp(1rem, -0.3333rem + 5.6889vw, 5rem)`

### `clamp()` Generators

1. https://www.fluid-type-scale.com
2. https://clamp.font-size.app
3. https://royalfig.github.io/fluid-typography-calculator/
4. https://fluidtypography.com
5. https://10high.github.io/Fluid-Typography-Calculator/
6. https://www.marcbacon.com/tools/clamp-calculator/
7. https://clamp-generator.netlify.app/
8. https://www.scaleui.com/
9. https://utopia.fyi/

### Further Reading

Description | URL
---|---
General overview of fluid typography and the different approches | https://www.lambdatest.com/blog/complete-guide-to-fluid-typography-with-css-clamp/
Deep dive on using `clamp()` for fluid font sizes | https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/
Generating fluid type scales using SCSS and `clamp()` | https://www.aleksandrhovhannisyan.com/blog/fluid-type-scale-with-css-clamp/
Simple fluid typography system using `clamp()` | https://piccalil.li/tutorial/fluid-typography-with-css-clamp/
Programatically create fluid type scale for tailwindcss | https://davidhellmann.com/blog/development/tailwindcss-fluid-typography-with-css-clamp
`clamp()` vs `clac()` for fluid typography and creating tilwind plugin | https://stoffel.io/blog/css-tailwind-fluid-typography-clamp-calc
Fluid font sizes using `min()` and `max()` | https://css-tricks.com/simplified-fluid-typography/
Fluid font sizes using `@media` queries and `calc()` with SASS implementation | https://css-tricks.com/snippets/css/fluid-typography/

