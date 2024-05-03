
# Shopify theme development

This repo is use full for make shopify theme. easy to setup and use and make shopify theme.


## Installation
0. use node 16 or less than 16 version
1. create render-js.liquid and render-css.liquid in snipet folder
2. add render-css.liquid before end of  head section in theme.liquid
3. add render-js.liquid before end of body section

```bash
   npm run dev 
   cd theme
   shopify theme pull
```
    
## Demo

# render-js
<script src="{{ 'theme-commo.js' | asset_url }}" defer="defer"></script>
{% if template contains 'collection' %}
  <script src="{{ 'theme-collection.js' | asset_url }}" defer="defer"></script>
{% elsif template contains 'product' %}
  <script src="{{ 'theme-product.js' | asset_url }}" defer="defer"></script>
{% elsif template contains 'index' %}
  <script src="{{ 'theme-index.js' | asset_url }}" defer="defer"></script>
{% elsif template contains 'cart' %}
  <script src="{{ 'theme-cart.js' | asset_url }}" defer="defer"></script>
{% elsif template contains 'page' %}
  <script src="{{ 'theme-page.js' | asset_url }}" defer="defer"></script>
{% elsif template contains 'article' %}
  <script src="{{ 'theme-blog-article.js' | asset_url }}" defer="defer"></script>
{% elsif template contains 'customers/account' %}
  <script src="{{ 'theme-account.js' | asset_url }}" defer="defer"></script>
{% endif %}

# render-css.liquid
{% if template contains 'collection' %}
  {{ 'theme-collection.css' | asset_url | stylesheet_tag }}
{% elsif template contains 'product' %}
  {{ 'theme-product.css' | asset_url | stylesheet_tag }}
{% elsif template contains 'index' %}
  {{ 'theme-index.css' | asset_url | stylesheet_tag }}
{% elsif template contains 'cart' %}
  {{ 'theme-cart.css' | asset_url | stylesheet_tag }}
{% elsif template contains 'page' %}
  {{ 'theme-page.css' | asset_url | stylesheet_tag }}
{% elsif template contains 'article' %}
  {{ 'theme-blog-article.css' | asset_url | stylesheet_tag }}
{% elsif template contains 'customers/account' %}
  {{ 'theme-account.css' | asset_url | stylesheet_tag }}
{% endif %}


## Deployment

To deploy this project run in root folder

```bash
  npm run build 
```

After this  run in theme folder

```bash
  shopify theme push
```

## Authors

- [@Mayank Parmar](https://github.com/Mayank23599Parmar)

