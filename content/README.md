# Editing the website

This folder holds everything on the website that the club changes: practice
times, dues, FAQ answers, social links, and the prose on the About and Join
pages. You do not need to touch anything outside this folder to update the
site, and you do not need to install anything.

## How to make a change

1. Open the file you want to change on github.com and click the pencil icon.
2. Make your edit.
3. At the bottom, choose **Create a new branch for this commit** and open a
   pull request.
4. Wait for the checks to finish. Netlify posts a preview link on the pull
   request — click it to see your change on a real page.
5. If the checks pass and the preview looks right, merge. The live site updates
   within a couple of minutes.

If a check fails, the error message names the file and the field that is wrong.
Nothing goes live until the checks pass, so a mistake here cannot break the
public site.

## Where things live

| To change                                                 | Edit                   |
| --------------------------------------------------------- | ---------------------- |
| Club name, tagline, email, signup and waiver links        | `data/site.ts`         |
| Instagram, GroupMe, Discord, listserv                     | `data/socials.ts`      |
| Practice location, days, times, free practices            | `data/practices.ts`    |
| Dues amounts, payment methods                             | `data/dues.ts`         |
| Eligibility, signup steps, what to wear, day-of checklist | `data/join.ts`         |
| Questions and answers on the FAQ page                     | `data/faq.ts`          |
| Home page photos                                          | `data/photos.ts`       |
| The About page text                                       | `prose/about.mdx`      |
| The intro paragraph on the Join page                      | `prose/join-intro.mdx` |

## The two kinds of file

**`prose/*.mdx`** is ordinary writing. Blank lines separate paragraphs, `##`
starts a heading, `**bold**` is bold, and `[text](https://example.com)` is a
link. Write it the way you would write a document.

**`data/*.ts`** is structured information — lists of things that all have the
same shape. Follow the pattern of the entries already there. Keep the quotes
and the commas; they are part of the format.

## Links

Links are not written as plain text. Each one is either a real URL or a
placeholder saying what still needs to be found:

```ts
href: url("https://www.instagram.com/nu.archery"),
href: placeholder("the practice signup form URL"),
```

A placeholder renders on the page as a labelled box stating what belongs there,
so an unfinished link never looks like a working button. When you find the real
URL, swap `placeholder("...")` for `url("...")`.

## Photos

The home page currently shows six placeholder frames. Each one describes the
photo that belongs in it.

Photos are not resized automatically, so before adding one: export it at
roughly 1600px wide, save it as a `.jpg` under 300KB, and put it in
`public/images/`. Then ask a maintainer to wire it up — adding real images
needs a small code change the first time.

## Things to know

- **Do not add academic years to the text.** The roster requirement says "every
  academic year" on purpose, so it does not go stale each September.
- **Every FAQ entry needs a category**, and it has to be one of the four
  already in use. A new category needs a code change.
- **Practice times appear in more than one place** on the site, but they are
  stored once, in `data/practices.ts`. Change them there and they update
  everywhere.
