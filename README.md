# Strawbees Learning Platform (Gastby)

This is a static website version of the [Strawbees Learning Platform](https://learning.strawbees.com/) built using [Gatsby](https://www.gatsbyjs.org/). This repository contains content, components, templates and static assets necessary for building a stand alone, static html website that is easy to deploy in different platforms as Heroku, Github Pages or Amazon S3 buckets.

## Content

The `content` folder holds all the markdown files that represent the content for the Learning Platform. We use [Front Matter](https://jekyllrb.com/docs/front-matter/) to add metadata such as `title`, `description`, `thumbnail`, `header`, `category` and what is the `path` to that content.

**Important**: The Activity cards inside the Lesson Plans are not loaded automatically from this. You will have to make sure to update all the Lesson Plans if you change the `title`, `description`, `path` or `thumbnail` of any Activity.

## Components

Inside the folder `src/components` you will find all UI components used to build the Learning Platform. They are an adaptation of https://github.com/strawbees/learning-ui-components.

The components should be as self contained as possible, preferably not depending on nothing else then `@material-ui/core` and `react`.

## Templates

The templates in which `content` is rendered are in the `src/templates` folder and they make use of partial templates such as the header, hero and footer. You can find them at `src/templates/partials`.

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

## Prefix Path

Depending on where you are deploying it, the website won't live necessarily on the root of the domain so you might want to add a prefix to all the images so they load properly. You can do it by editing the property `pathPrefix` on `gastby-config.js`.

## Utils

### `mdToReact.js`

This library takes a Markdown raw text content and transform into React compatible html.

### `unregister_worker`

Does what it says: Unregister all web workers.

## Building

Gatsby offer a fancy GraphQL and Remark (markdown) way to consume content but it's more complicated than it needs. The code that loads the content files and generate the sites through the templates lives in `gastby-node.js`.

## Roadmap

* Add Storybook to document components.
