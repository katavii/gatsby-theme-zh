/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import 'normalize.css/normalize.css';
import 'prism-themes/themes/prism-base16-ateliersulphurpool.light.css';
import 'prismjs/plugins/command-line/prism-command-line.css';
import 'rc-drawer/assets/index.css';
import 'docsearch.js/dist/cdn/docsearch.min.css';
import './site/global.less';
import React from 'react';
import { Button, notification } from 'antd';
import insertCss from 'insert-css';

window.insertCss = insertCss;

// gatsby-browser.js
export const onServiceWorkerUpdateFound = () => {
  const lang = window.location.pathname.startsWith('/zh') ? 'zh' : 'en';
  notification.info({
    message: lang === 'zh' ? '站点更新' : 'Site Updated',
    description:
      lang === 'zh'
        ? '发现新的网站版本数据，是否需要重载页面以更新。'
        : 'This site has been updated with new data. Do you wish to reload the site to get the new data?',
    btn: (
      <Button
        type="primary"
        size="small"
        onClick={() => window.location.reload(true)}
      >
        {lang === 'zh' ? '重载页面' : 'Refresh'}
      </Button>
    ),
    key: 'onServiceWorkerUpdateFound',
    placement: 'bottomRight',
  });
};
