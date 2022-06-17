React frontend for Structured API Documentation
===============================================

This package is a React frontend for the [Structured API doc](https://github.com/baraja-core/structured-api-doc) library. We use a [Next.js](https://nextjs.org/) project.

Getting Started
---------------

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

Learn More
----------

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

Deployment
----------

When a new version of the application is released, you need to perform a build using the `yarn build` command and copy the contents of the `out` directory to the original package. The contents of all files are automatically distributed via a proxy PHP script directly in the library.
