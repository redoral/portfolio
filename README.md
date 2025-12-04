# Red's Portfolio

A responsive portfolio site built with Next.js, TypeScript, and Tailwind CSS.

Theme is using [kanagawa colors by rebelot](https://github.com/rebelot/kanagawa.nvim).

https://redoral.dev/

## About

This repository contains the source code for my personal portfolio website. It’s built using:

- **Next.js:** A React framework for building server-side rendered and statically generated websites.
- **TypeScript:** Provides static typing for increased code maintainability and early error detection.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.

## Getting Started

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/redoral/portfolio.git
    cd portfolio
    ```

2.  **Install Dependencies:**

    ```bash
    yarn install
    ```

3.  **Run the Development Server:**

    ```bash
    yarn dev
    ```

4.  **Open in Browser:** Navigate to `http://localhost:3000` (or the port specified by the development server).

## Deployment

We use open-next and wranger to deploy this next project to Cloudflare pages. To deploy do the following:

1. **Add required deploy vars by creating a `.dev.vars` file on the root**:

```
# .dev.vars

NEXTJS_ENV=development
CLOUDFLARE_API_TOKEN=
CLOUDFLARE_ACCOUNT_ID=
R2_ACCESS_KEY_ID=
R2_SECRETS_ACCESS_KEY=
```

2. **Test the build by building and running a preview version:**

```sh
yarn preview
```

3. **Deploy to production:**

```sh
yarn deploy
```
