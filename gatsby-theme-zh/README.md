# Gatsby Theme for zh ⚛

✨ Polished Gatsby theme for documentation site.

## Usage

Create a Gatsby site from [gatsby-starter-theme-zh](https://github.com/antvis/gatsby-starter-theme-zh).

```bash
$ yarn global add gatsby-cli // or npm install gatsby-cli -g
$ gatsby new mysite https://github.com/antvis/gatsby-starter-theme-zh
```

Start developing.

```bash
$ cd mysite
$ yarn start
```

### `gatsby-config.js`

```js
// gatsby-config.js
const { repository } = require('./package.json');

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-zh`,
      options: {
        // pagesPath: './site/pages',
        pathPrefix: '/',
        // antd 主题：https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
        theme: {
          'primary-color': '#873bf4',
        },
        pwa: true, // 是否开启 gatsby-plugin-offline
        cname: true, // 是否自动从 siteUrl 中提取 CNAME 文件
        codeSplit: true, // 是否开启 gatsby 按路由的代码分割，默认为 false
      },
    },
  ],
  siteMetadata: {
    title: `title`,
    description: `description`,
    githubUrl: repository.url,
    logoUrl: '', // 自定义 logo
    navs: [], // 用于定义顶部菜单
    docs: [], // 用于定义文档页面的二级分类菜单
    examples: [], // 用于定义演示页面的二级菜单，属性见下方
    showSearch: true, // 是否展示搜索框
    showChinaMirror: true, // 是否展示国内镜像链接
    showLanguageSwitcher: true, // 用于定义是否展示语言切换
    showAntVProductsCard: true, // 是否展示 AntV 系列产品的卡片链接
    showGithubCorner: true, // 是否展示角落的 GitHub 图标
    showChartResize: true, // 是否在demo页展示图表视图切换
    showAPIDoc: true, // 是否在demo页展示API文档
    playground: {
      container: '<canvas id="container" />', // 定义演示的渲染节点，默认 <div id="container" />
      playgroundDidMount: 'console.log("playgroundDidMount");',
      playgroundWillUnmount: 'console.log("playgroundWillUnmount");',
    },
    versions: [
      {
        '1.x': 'https://1x.ant.design',
        '2.x': 'https://2x.ant.design',
        '3.x': 'https://ant.design',
        '4.x': 'https://next.ant.design',
      },
    ],
    redirects: [
      {
        from: /\/old-url/,
        to: '/new-url', // 不指定 to 时直接跳转到 https://antv-2018.alipay.com/***
      },
    ],
  },
};
```

## Develop

```bash
yarn install
yarn start
```

Visit https://localhost:8000 to preview.

## Publish to npm

```bash
cd gatsby-theme-zh
npm run release
```

## Deploy

```bash
npm run deploy
```

> Set envoironment variable `GATSBY_PATH_PREFIX` to `/` in deploy service like netlify to preview pathPrefix site in root domain.

## Add Dependency

```bash
cd gatsby-theme-zh
yarn add shallowequal
```

or

```bash
yarn workspace gatsby-theme-zh shallowequal
```
