# Strawbees Learning Platform (Gastby)

This is a static website version of the [Strawbees Learning Platform](https://learning.strawbees.com/) built using [Gatsby](https://www.gatsbyjs.org/). This repository contains **content**, **components**, **templates** and **static assets** necessary for **building** a stand alone, static html website that is easy to deploy in different platforms as Heroku, Github Pages or Amazon S3 buckets.

## Quick start

- Clone repository: `git clone git@github.com:murilopolese/learning-platform-gatsby.git`
- Navigate to the directory: `cd learning-platform-gatsby`
- Install dependencies: `npm install`
- Start development server: `npm run develop`
- Build website: `npm run build`
- Deploy to Github Pages:
	- Set the correct `prefixPath` on `gatsby-config.js`
	- `npm run deploy-gh`
- Deploy on Amazon S3:
	- Create a `.env` file with `S3_KEY`, `S3_SECRET`, `S3_BUCKET` and `S3_REGION`
	- `npm run deploy-s3`

## Content

The [`content`](https://github.com/murilopolese/learning-platform-gatsby/tree/develop/content) folder holds all the markdown files that represent the content for the Learning Platform. We use [Front Matter](https://jekyllrb.com/docs/front-matter/) to add metadata such as `title`, `description`, `thumbnail`, `header`, `category` and what is the `path` to that content.

**Important**: The Activity cards inside the Lesson Plans are not loaded automatically from this. You will have to make sure to update all the Lesson Plans if you change the `title`, `description`, `path` or `thumbnail` of any Activity.

## Components

Inside the folder [`src/components`](https://github.com/murilopolese/learning-platform-gatsby/tree/develop/src/components) you will find all UI components used to build the Learning Platform. They are an adaptation of https://github.com/strawbees/learning-ui-components.

The components should be as self contained as possible, preferably not depending on nothing else then `@material-ui/core` and `react`.

## Templates

The templates in which `content` is rendered are in the [`src/templates`](https://github.com/murilopolese/learning-platform-gatsby/tree/develop/src/templates) folder and they make use of partial templates such as the header, hero and footer. You can find them at [`src/templates/partials`](https://github.com/murilopolese/learning-platform-gatsby/tree/develop/src/templates/partials).

Make sure to always refer to static images with `withPrefix` so the website can be deployed on paths that are not the root of the domain.

## Static assets

For ease to use, all the images and non-source code assets live inside the folder `static`. Once built, those images will live on the root path of the website. To make sure they will load correctly independently of the relative path of where the website is deployed, always use `withPrefix`. For example:

```jsx
import { React } from 'react'
import { withPrefix } from 'gatsby'

export default function() {
	return (
		<img src={withPrefix('/image.jpg')} alt="Example image" />
	)
}
```

You can change the path to prefix it by editing the property `pathPrefix` on `gastby-config.js`.

## Building

Gatsby offer a fancy GraphQL and Remark (markdown) way to consume content but it's more complicated than it needs to be so we do it manually. The code that loads the content files and generate the sites through the templates lives in `gastby-node.js` and `src/utils`.

Build the website with `npm run build`. It will already build with `--path-prefix`.

## Utils

### `mdToReact.js`

This library process the markdown content parsing into a tree and then iterate over it to generate a React DOM tree.

There are a few DOM components that will be automatically replaced with React DOM components and you can find the entire list on this file. Currently the `<a>`, `<img>`, `<button>` and `<section>` tags will be replaced.

If you want to add custom React DOM components into the markdown content, use the `<section>` tag with a property `component` specifying which component to load. The currently available `component` options are: `youtube`, `gallery`, `thumbnail` and `thumbnails` (for rendering in a row).

#### Usage examples

**Image gallery**

This component mixes Markdown and custom HTML so it requires an empty line between the HTML and Markdown content.

```
<section component="gallery">

![Image caption](/path-to-static-image.jpg)
![Other Image caption](https://image.com/abcd)

</section>
```

**Thumbnails and Thumbnail**

Since this is all custom HTML content, it doesn't require empty lines. The `thumbnails` component wraps the content into a responsive layout row.

```
<section component="thumbnails">
<section component="thumbnail" title="Title of card" description="Description under the title." image="/static-image.jpg" path="/where-to-link-this-thumbnail"></section>
<section component="thumbnail" title="Title of card" description="Description under the title." image="/static-image.jpg" path="/where-to-link-this-thumbnail"></section>
</section>
```

**Responsive Youtube Player**

```
<section component="youtube" url="https://youtu.be/ubChdzfykHg"></section>
```

### `unregister_worker`

Does what it says: Unregister all web workers.

## Deploying

After building, the static website will be created inside the `public` folder (git ignored). You can manually deploy this content on a http server, making sure to build with the correct `prefixPath` in case website won't live in the root path.

We provide 2 deploy scripts in this repository, one for Github pages and to Amazon S3.

For the Github pages, update the `prefixPath` to the name of your repository. You can read more about [Gatsby and Github pages here](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/). You can run `npm run deploy-gh`.

To deploy on Amazon S3 we use [@strawbees/s3-publisher](https://github.com/strawbees/s3-publisher). Create a `.env` file with `S3_KEY`, `S3_SECRET`, `S3_BUCKET` and `S3_REGION` and run `npm run deploy-s3`.

## Roadmap

Project backlog and roadmap lives on [Pivotal Tracker](https://www.pivotaltracker.com/n/projects/2422318).
