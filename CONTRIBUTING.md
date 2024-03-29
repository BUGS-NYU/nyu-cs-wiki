# Contributing

Hey, thanks for your interest in contributing to the NYU CS Wiki! Please review this document **before making a pull request**. If you have any questions, feel free to ask in the [BUGS Discord Server](https://discord.com/invite/75jgtXy7rz) questions channel.

## Guidelines 

- All articles are written in a format known as [Markdown](https://commonmark.org/help/). Don't be worried! It's very simple to write in once you get the hang of it; for reference, you can look at any of the pages in the /docs folder. 
- Looking in /docs, there are 3 main categories: Academics, Opportunities, and Recreation. Let's take a look at /docs/Academics for reference. You can see an [``academics.md``](/docs/Academics/academics.md) file which serves as an overview (visible when clicking on a category). From here, there is [``classes.md``](/docs/Academics/classes.md), [``schedule.md``](/docs/Academics/schedule.md), etc which talk about their respective subjects. However, if there's a topic that requires multiple articles, you can create a folder (ex. /Academics/Tandon) and create an overview file and more pages from here. 
- Let's take a look at one file: [``clubs.md``](/docs/Opportunities/Internal/clubs.md). At the top of the page are the title, tags, and sidebar position; you can add tags that you feel are relevant to the article (in this case, CAS, Tandon, and Clubs) - you can go to /docs/tags to view all current tags or you can create your own. The sidebar position isn't usually relevant but it can change the position of the article on the sidebar independent of alphabetical sorting.
- After, there is a title tag, a brief description of the article's contents, and then the content itself. The formatting for the content will vary depending on the type of content so it's best to look around the pages on the site to get a feel for the type of formatting that best works for you.

## Style

- Follow a second ('you can...') or third ('it is..') person point of view when writing articles.
- Make sure to cite your sources; this can be done [via markdown](https://www.markdownguide.org/extended-syntax/#footnotes). For an example, look at the [``Holodeck: High Speed Research Network``](/docs/Opportunities/VIP/hsrn.md) article citations.
- Keep only one level of nesting for articles (ex. Opportunities/Internal).
- Keep it (mostly) professional.

## 👷 Development 

You will need node/npm installed and then need to run ``npm install`` in the project directory (this will grab all the dependencies). From here, you can create your own articles/modifications to the source in either the /docs or /src directories, respectively. ```npm start``` supports hot reloading of the project, meaning that your changes will be reflected automatically on the development build. Unless you need the search, it is recommended to use the former option.

- 🚧 Development (does not include search index):
  ```sh
  npm start
  ```
- 🏭 Production (includes search index):
  ```sh
  npm run build
  npm run serve
  ```

## Licensing

As of February 2024, if you contribute to the documentation (/docs folder), you agree that your docs will be licensed under [Creative Commons Attribution Share Alike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/deed.en). If the file is static (/static folder), the files will be provided under the terms of their original licenses. All other files will be licensed under [GNU GENERAL PUBLIC LICENSE Version 3](https://www.gnu.org/licenses/gpl-3.0.en.html).