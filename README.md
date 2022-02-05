# @psoares/eslint-config

## Covers
- React
- Node


## Installation

add `"@psoares/eslint-config": "psoaresbj/eslint-config"` to your package.json

## Usage

Create an `.eslintrc.yml` file with the following:

```yaml
extends: eslint-config-impact-market
```

Add the following `script` to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

and run the linter with:

```sh
$ yarn lint
```