# custom m10c theme

![Intro](https://github.com/vaga/hugo-theme-m10c/blob/master/images/cover.png)

A Hugo minimalistic theme for bloggers

Main features:

- Fully responsive
- Twitter Cards, Open Graph, Disqus and Google Analytics supported (see Hugo docs)
- Customizable colors
- Customizable picture and description
- Customizable menu on sidebar
- Customizable social media links on sidebar
- Optimized for performance 100/100 on Lighthouse
- All feather icons included

Features in this fork:
- **Primary-color based selection color**
- **Code copy button**
- **Better code scroll**
- **Header link buttons**
- **Dark and light modes**
- **Custom CSS/JS/Deferred JS**
- **Custom Footers**

## Getting started

### Installation

Create a new Hugo site:
```bash
$ hugo new site [path]
```

Clone this repository into `themes/` directory:
```bash
$ cd [path]
$ git init
$ git submodule init
$ git submodule add https://github.com/hhenrichsen/nord-custom-m10c.git themes/m10c
```

Add this line  in the `config.toml` file:
```toml
theme = "m10c"
```

### Configuration

In your `config.toml` file, define the following variables in `params`:

- `author`: Name of the author
- `description`: Short description of the author
- `avatar`: Path of file containing the author avatar image
- `menu_item_separator`: Separator between each menu item. HTML allowed (default: " - ")
- `favicon`: Absolute path of your favicon.ico file (default: "/favicon.ico")

To add a menu item, add the following lines in `menu`:

```
[[menu.main]]
  identifier = "tags"
  name = "Tags"
  url = "/tags/"
```

[Read Hugo documentations](https://gohugo.io/content-management/menus/#readout) for more informations about menu

To add a social link, add the following lines in `params`:

```
[[params.social]]
  icon = "github"
  name = "My Github"
  url = "https://github.com/vaga"
```

To change theme colors, add the following lines in `params`:

```
[params.style]
  primaryColor = "#ffffff"
  monospaceFont = 'dm'
```

If you want the above theme colors, you can see the [exampleSite/config.toml](/exampleSite/config.toml) file.

### Footers

You can add as many footers as you want. In the small screen view, these show up
at the bottom. On the large screen view, these show up on the left.
```
[params]
  [[params.footer]]
    description = "Colors from"
    url = "https://www.nordtheme.com/"
    name = "Nord by ArcticIceStudio"
```

### Styling

Use one of the custom params:
```
[params]
  custom_css = ["css/custom.css"]
  custom_js = []
  custom_js_defer = []
```

**Note:** Hugo releases come in two versions, `hugo` and `hugo_extended`. You need `hugo_extended` to automatically compile your scss.

## License

This theme is released under the [**MIT**](/LICENSE.md) License.

## Acknowledgements

- [feather](https://feathericons.com/) - [MIT](https://github.com/feathericons/feather/blob/master/LICENSE)
