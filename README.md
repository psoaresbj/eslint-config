# @psoares/eslint-config

## Covers
- Common
- React
- Node
- Typescript


## Installation

add `"@psoares/eslint-config": "psoaresbj/eslint-config"` to your package.json

## Usage

Create an `.eslintrc.yml` file with the following:

```yaml
# For common configuration
extends: @psoares/eslint-config
```

or

```yaml
# For specific configuration
extends: @psoares/eslint-config/[react || node || typescript]
```

or

Add the following `script` to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint . --fix"
  }
}
```

and run the linter with:

```sh
$ yarn lint
```