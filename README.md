# My Cookbook

A personal recipe collection, published as a static site.
**Live:** https://ginnys-cookbook-recipes.netlify.app

No build step, no framework, no dependencies. Netlify deploys this folder as-is
every time a commit lands on `main`.

## Files

| File | What it is |
|---|---|
| `recipes.js` | **The recipe data.** This is the only file that changes when a recipe is added. |
| `index.html` | Page shell and all styling |
| `app.js` | Rendering, servings scaling, search, cooking mode, timers |
| `netlify.toml` | Tells Netlify to publish the folder as-is (no build) |

## Adding a recipe

1. Open `recipes.js` on GitHub and click the pencil (Edit) icon.
2. Paste the new recipe object just before the closing `];` at the bottom.
3. Click **Commit changes**.

Netlify picks up the commit and the live site updates in about 30 seconds.

Each recipe object looks like this:

```js
{
  id: "kebab-case-unique-id",
  title: "Recipe Name",
  tagline: "One line describing it.",
  icon: "blank",              // watermelon | paneer | cake | blank | jar | fritter | spice | dijonjar
  accent: PALETTE.basil,      // PALETTE.brick (red) | PALETTE.basil (green) | PALETTE.mustard (gold)
  baseServings: 4,            // the number the amounts below are written for
  sourceUrl: "https://…",     // optional — adds a reference link
  allergens: "Milk · Eggs",   // optional — shown under the tagline
  ingredients: [
    { id: "i1", amount: 2, unit: "cup", name: "flour" },
  ],
  steps: [
    { id: "s1", title: "Step name", content: "What to do.", timer: 300 },  // timer in seconds, or null
  ],
  notes: "Anything worth remembering for next time.",
},
```

## Features

- Search across recipe titles and ingredients
- Servings scaling — amounts recompute to the nearest quarter, with proper fractions
- Full-screen cooking mode: one step at a time, countdown timers, a chime when time is up
- Per-recipe URLs (`/#/watermelon-feta-mint`) so a single recipe can be shared
- Works on phones, and prints cleanly

## Deploy

Connected to Netlify project `ginnys-cookbook-recipes`
(site ID `337c38e6-87f3-4dd9-86f4-01d08725113a`).
Build command: *none*. Publish directory: `.` (the repo root).

To deploy manually instead, drop this folder on
https://app.netlify.com/projects/ginnys-cookbook-recipes/deploys
