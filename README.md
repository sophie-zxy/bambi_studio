# [Bambi's Studio](https://tinyurl.com/bambistudio)

## Install PNPM which is the package manager

We use pnpm b/c is bit cleaner than npm.

If you have npm already installed you can use it to install pnpm globally by running the following command in the terminal

```
npm install -g pnpm
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpn run dev -- --open
```

If necessary, you can delete a package-lock or pmpm-lock file, if you have to, and run the following command to refresh the lock file by running the following in a terminal that is opened inside the project directory:

```
pnpm install
```

## Building

To create a production version of your app:
