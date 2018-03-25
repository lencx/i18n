# i18n

```bash
yarn
yarn dev
```

## Project Structure

```
[project]
|- [i18n]
|    |- [{lang}]
|    |      `- *.json
|    `- ...
` ..

OR

[project]
|- [i18n]
|    |- [**]
|    |   `- *.{lang}.json
|    `- ...
` ...
```

---

## HTML Tags Attributes

|type|arrtibute|describe|use|
|---|---|---|---|
|common|i18n-c|common|i18n-c='key_name'|
|keywords|i18n-k|keywords|i18n-k='key_name'|
|page|i18n-p|page|i18n-p='key_name'|
|style|i18n-s|currect element style|i18n-s|
|image|i18n-(c \| p)-i|common image path \| page image path|i18n-c-i='key_name'|
|pleceholder|i18n-(c \| k \| p)-ph|common placeholder \| ...|i18n-c-ph='key_name' \| ...|

\* key_name: `i18n key name`

---
## Config

### There are two ways i18n file organization

*\* path:* `~/i18n/{lang}/**/*.json` | `~/i18n/**/*.{lang}.json`

```yml
# {lang}/index.json | index.{lang}.json
http:localhost:8080/index.html
http:localhost:8080

# {lang}/aa.json | aa.{lang}.json
http:localhost:8080/aa/index.html
http:localhost:8080/aa

# {lang}/aa/a.json | aa/a.{lang}.json
http:localhost:8080/aa/a.html
```

### i18n matches the corresponding page in two ways

> `currect URL`(default) | `<meta i18n-path='{lang}/**/* | **/*.{lang}'>`

When the current page is not internationalized, add `<meta i18n-unset>` to
the HTML

`i18n-unset` value:

* When the value is not set, the current page is completely not internationalized

* When the 'p' value is set, the current page has international content in `common(common.{lang}.json)` and `keyword(keyword.{lang}.json)`
