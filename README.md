<div align="center">
  <br />
  <h1>Prettier Configurations 💐</h1>
  <p>
    <a href="https://typescriptlang.org">
      <img src="https://img.shields.io/badge/-TypeScript-000?style=for-the-badge&logo=typescript" />
    </a>
  </p>
  <br />
</div>

## About 📖

This repository contains multiple Prettier configurations for different types of projects.

## Getting Started 🐦

### Installation 📦

Install the package as a dev dependency in your project.

```bash
# With yarn
yarn install -D @soufit/prettier-config

# With NPM
npm install --save-dev @soufit/prettier-config
```

After installing the package, you can use the configuration in your Prettier configuration file. You can specify the prefix in the import statement to use a specific configuration.

```js
const globalConfig = require('@soufit/prettier-config/global');

module.exports = globalConfig;
```

## License 📜

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for more information.
