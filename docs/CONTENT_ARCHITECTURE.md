# Content architecture

Duskbloods Archive is a new site. Ads approval can wait. The structure of the site cannot wait.

This file is the rule for later content and interface work. If a change would make the site look bigger while making pages thinner, do not ship it.

## What the site is

An unofficial English archive for US players of The Duskbloods, published by Wind Flash Studio. Every important claim is sourced, dated, and labeled.

It is not a wallpaper dump, not a rumor mill, and not a page farm built for ads.

## Page rules

1. One search intent per URL. Do not split `duskbloods` and `the duskbloods`. Do not clone a guide with a slightly different title.
2. No empty, coming-soon, or placeholder pages. If there is not enough confirmed material, keep the topic on an existing page and list it under what remains unknown.
3. Do not publish Boss lists, map dumps, best-build rankings, or countdown pages until official material can fill them.
4. Trust pages stay real: About, Contact, Privacy, Disclaimer, Editorial Policy, Corrections. They may be updated, not gutted.
5. Contact must keep a working public address: contact@duskbloodsarchive.com.
6. About must keep the publisher name: Wind Flash Studio.
7. Privacy must keep cookie, Google advertising, and identifier disclosures even before ads run.
8. Official stills illustrate a fact and stay captioned. They are not a gallery product.
9. Test-build rules stay marked as test-build. Denied dates stay on the release-date page.
10. New pages need a distinct `primaryIntent`, a direct answer near the top, sources, and enough body text to stand alone.

## Labels

Use only these public labels for facts:

- Confirmed
- Test-build only
- Player-reported
- Unconfirmed (not in titles or search summaries)

## Interface rules that follow from this

- Navigation should send people to complete answers, not to a wall of cards or empty categories.
- Do not add fake download, play, or install buttons.
- Do not put ads, or ad-shaped boxes, in the header or over the article.
- Footer always links About, Contact, Privacy, Disclaimer, Editorial Policy, and Corrections.
- The site stays readable with JavaScript off.

## Checks

`npm test` enforces the architecture on content files. Passing that check is required before a content change is finished.
