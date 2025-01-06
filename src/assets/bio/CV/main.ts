import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment'
import { Liferay } from 'oneflex-core';
import { LiferayModel, ThemeDisplay } from 'oneflex-core/lib/models/liferay/liferay.model';

const runBootstrapModule = () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch((err: any) => console.error('bootstrapError', err));
};

printPortletInfo();

if (environment.production) {
  enableProdMode();

  if (Liferay) {
    const { portlet: {
      'javax.portlet.name': portletName
    } } = require('../package.json');

    let isPortalReady = false;

    const eventType = {
      allPortletsReady: 'allPortletsReady',
      portletReady: 'portletReady'
    };

    Liferay().on(eventType.portletReady, (event: any) => {
      if (event.portletId == portletName) {
        isPortalReady = true;
        runBootstrapModule();
      }
    });

    Liferay().on(eventType.allPortletsReady, (event: any) => {
      if (!isPortalReady && Liferay().Portlet.list.includes(portletName)) {
        isPortalReady = false;
        runBootstrapModule();
      }
    });
  }
} else {
  const proxyConfig = require('./proxy.conf.json');
  if (proxyConfig) {
    const invoke = proxyConfig['/api/jsonws/invoke'];
    const authToken = invoke.headers['X-Csrf-Token'];
    const { LiferayParams } = proxyConfig;

    const Liferay: Partial<LiferayModel> = {
      authToken
    };

    const ThemeDisplay: Partial<ThemeDisplay> = {
      getUserId: () => LiferayParams.userId,
      getScopeGroupId: () => LiferayParams.scopeGroupId,
    };

    (Liferay as any).ThemeDisplay = ThemeDisplay;

    (window as any).Liferay = {
      ANGULAR_TEST: true,
      ...Liferay
    };
  }

  const applyClayStyle = new Promise((resolve, reject) => {
    const styles = require('../node_modules/clay-css/lib/css/atlas.css');
    if (styles) {
      const styleElement = document.createElement('style');
      styleElement.appendChild(document.createTextNode(styles));
      document.head.appendChild(styleElement);
      resolve(true);
    } else {
      reject('error loading clay style');
    }
  });

  Promise.all([
    applyClayStyle,
    import('jquery/dist/jquery.min.js' as string),
    import('clay-css/lib/js/bootstrap.js' as string)
  ]).catch((err) => console.error(err));

  switch (document.readyState) {
    case 'interactive':
    case 'complete':
      runBootstrapModule();
      break;
  }
}

function printPortletInfo() {
  const {
    name,
    version
  } = require('../package.json');

  console.log(`%c${name} - version: ${version}`, 'color:gray;font-weight:bold;');
}
