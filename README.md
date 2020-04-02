# Strawbees Learning Platform (Gastby)

This is a static website version of the [Strawbees Learning Platform](https://learning.strawbees.com/) built using [Gatsby](https://www.gatsbyjs.org/). This repository contains source code for **building** a stand alone, static html website that is easy to deploy in different platforms as Heroku, Github Pages or Amazon S3 buckets.

## Shortcuts

- Clone repository: `git clone git@github.com:murilopolese/learning-platform-gatsby.git`
- Navigate to the directory: `cd learning-platform-gatsby`
- Install dependencies: `npm install`
- Export environment variable so you don't have to write it every time:
	- `export PORT=8000`
	- `export BUILD_ENVIRONMENT=stage` (to grab content from WordPress)
	- `export ENABLE_GATSBY_REFRESH_ENDPOINT=true`
- Start development server: `npm run develop`
- Build website: `npm run build`
- Deploy to Github Pages:
	- Set the correct `pathPrefix` on `build-src/buildEnvironments.js`
	- `npm run deploy-gh`
- Deploy build on Amazon S3:
	- Create a `.env` file with `S3_KEY`, `S3_SECRET`, `S3_BUCKET` and `S3_REGION`
	- Set the correct `pathPrefix` on `build-src/buildEnvironments.js`
	- `npm run deploy-s3`
- Deploy development server on Heroku:
	- Add heroku remote to this repository
	- `git push heroku master`
- Deploy development server as Docker container:
	- Build a local image running `docker build -t username/learning:tagname .`
	- Running this image locally with `docker run -p 8000:8000 -e ENABLE_GATSBY_REFRESH_ENDPOINT=true -e BUILD_ENVIRONMENT=stage username/learning:tagname`
	- Publish it on DockerHub with `docker push username/learning:tagname`

## Content

Previous versions of this website sourced all content from markdown files. The current setup sources everything from a [Headless WordPress setup]([Strawbees Learning CMS](https://github.com/strawbees/learning-cms).

Because of this convenience, the process of source and transform content into pages became a bit more convoluted with a sequence of almost nonsense tree transformations that defy its own existence:

1. Content from WordPress is sourced as text string containing html code is loaded on GraphQL
1. After querying all data from GraphQL, `gatsby-node.js` maps all entities with models for all content to be displayed so content can come from different sources. You can check them at `build-src/models.js`
1. When mapping posts and pages, the model will parse the html string and serialise the DOM tree to JSON for better data transportation. You can find the code at `build-src/htmlToJson.js`
1. All templates have access to this JSON representation of the html content. The template can feeds this tree into a helper function that traverses and transforms the JSON tree into a React component tree that can be simply rendered.
1. Then Gatsby transforms this React tree again into html strings and it feels like we only go backwards.

## Components

Inside the folder [`src/components`](https://github.com/murilopolese/learning-platform-gatsby/tree/develop/src/components) you will find all UI components used to build the Learning Platform. You can browse them as well as their variations running storybook:

```
npm run storybook
```

The components should be as self contained as possible, preferably not depending on nothing else then `@material-ui/core` and `react`.

## Templates

The templates in which content is rendered are in the [`src/templates`](https://github.com/murilopolese/learning-platform-gatsby/tree/develop/src/templates) folder and they make use of `partial` templates such as the header, hero and footer. You can find them at [`src/templates/partials`](https://github.com/murilopolese/learning-platform-gatsby/tree/develop/src/templates/partials).

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

The `gatsby-source-wordpress` plugin is used to grab data from WordPress and lead up GraphQL with it. The configuration is done where you would expect on a gatsby project: `gatsby-config.js`.

The only auto-generated page is the 404 located at `src/pages/404.js`.

All other pages are built by `gatsby-node.js` that uses a series of utility modules located in folder `build-src`.

The build process is rather simple and queries once GraphQL for all data it needs. This query is at `build-src/getContentFromGraphql.js`. All pages are built by simple iterations of this query result.

Build the website with `npm run build`. It will already build with `--path-prefix`.


## Deploying

After building, the static website will be created inside the `public` folder (git ignored). You can manually deploy this content on a http server, making sure to build with the correct `prefixPath` in case website won't live in the root path.

We provide 2 deploy scripts in this repository, one for Github pages and to Amazon S3.

For the Github pages, update the `prefixPath` to the name of your repository. You can read more about [Gatsby and Github pages here](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/). You can run `npm run deploy-gh`.

To deploy on Amazon S3 we use [@strawbees/s3-publisher](https://github.com/strawbees/s3-publisher). Create a `.env` file with `S3_KEY`, `S3_SECRET`, `S3_BUCKET` and `S3_REGION` and run `npm run deploy-s3`.

Be sure to use the correct `BUILD_ENVIRONMENT` in order to pull the correct data!

## Deploying a development server

If you are working on a headless CMS you will soon want to rebuild your pages without having to restart the entire build. For that you can start the development server with the `ENABLE_GATSBY_REFRESH_ENDPOINT` environment variable set to `true`:

```
ENABLE_GATSBY_REFRESH_ENDPOINT=true \
BUILD_ENVIRONMENT=stage \
gatsby develop -H 0.0.0.0 -p $PORT
```

Or just

```
ENABLE_GATSBY_REFRESH_ENDPOINT=true \
BUILD_ENVIRONMENT=stage \
npm start
```

From this point on if you post to the endpoint `https://localhost:8000/__refresh`, the graphql data will be refetched and the pages rebuilt much faster.

Deploying this app to run `gatsby develop` was a challenge and if you are struggling, there is a Docker container to be deployed ~ a n y w h e r e ~ .

## Automationism

- [Appveyor](https://ci.appveyor.com/project/strawbees/learning-platform-gatsby) build and deploy to [Strawbees Learning Stage](https://learning-stage.strawbees.com) when pushing to `develop` on this repo.
- Preview most changes on this [Heroku (free tier) development server](https://strawbees-learning-preview.herokuapp.com) that will repopulate the internal Gatsby GraphQL with data from the CMS and rebuild pages. This is not a reliable service but it's a fair price.

## Roadmap

Project backlog and roadmap lives on [Pivotal Tracker](https://www.pivotaltracker.com/n/projects/2422318).
