# Secret Santa

<img align="right" height="160" src="https://user-images.githubusercontent.com/1037931/87014534-92e21280-c1cc-11ea-9675-5f2c0f3c287f.png"/>

Check it live on [shirodork.github.io/FCSS-Secret-Santa/](https://shirodork.github.io/FCSS-Secret-Santa/) 🎄

## Development

Use Node.js 20 or later and the Yarn version pinned in `package.json`:

```sh
corepack enable
yarn install --immutable
yarn dev
```

Run `yarn test` for the tests, `yarn build` for the production site, and
`yarn preview` to preview it locally.

## GitHub Pages

In the repository's **Settings → Pages**, set **Source** to **GitHub Actions**.
The deployment workflow tests, builds, and publishes `dist` on every push to
`main`. The build uses the repository name as its base path and creates HTML
entry points for shared assignment links so they work on direct visits and
refreshes. For another hosting path, set `VITE_BASE_URL` before building.

Should you appreciate this tool so much that you'd like to thank me, you can either drop a friendly note in this repository's issues, or be a [one-time sponsor](https://github.com/sponsors/arcanis?frequency=one-time&sponsor=arcanis). Either would make my day 😊

<br/>

## License (MIT)

> **Copyright © 2015 Maël Nison**
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
