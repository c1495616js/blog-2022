import '@/styles/globals.css';
import '@/styles/prism-dracula.css';
import '@/styles/prism-plus.css';
import 'nprogress/nprogress.css';
import '@/styles/nprogress-custom.scss';

import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';

import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';
import {
  ThemeProvider as DsmThemeProvider,
  globalStyles,
} from '@c1495616js/dsm';

import LayoutWrapper from '@/components/LayoutWrapper';
import { siteConfigs } from '@/configs/siteConfigs';
import CommandPalette from '@/components/CommandPalette';

import { TabContext } from '@/context/tabContext';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  const router = useRouter();

  // Integrate nprogress
  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start());
    router.events.on('routeChangeComplete', () => NProgress.done());
    router.events.on('routeChangeError', () => NProgress.done());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  globalStyles();

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <CommandPalette>
        <DefaultSeo
          titleTemplate={`%s | ${siteConfigs.titleShort}`}
          defaultTitle={siteConfigs.title}
          description={siteConfigs.description}
          canonical={siteConfigs.fqdn}
          openGraph={{
            title: siteConfigs.title,
            description: siteConfigs.description,
            url: siteConfigs.fqdn,
            images: [
              {
                url: siteConfigs.bannerUrl,
              },
            ],
            site_name: siteConfigs.title,
            type: 'website',
          }}
          twitter={{
            handle: siteConfigs.twitterID,
            site: siteConfigs.twitterID,
            cardType: 'summary_large_image',
          }}
          additionalMetaTags={[
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
          ]}
          additionalLinkTags={[
            {
              rel: 'icon',
              href: siteConfigs.logoPath,
            },
            {
              rel: 'alternate',
              type: 'application/rss+xml',
              href: '/feed.xml',
            },
            {
              rel: 'alternate',
              type: 'application/atom+xml',
              href: '/atom.xml',
            },
          ]}
        />
        <DsmThemeProvider>
          <TabContext>
            <LayoutWrapper>
              {getLayout(<Component {...pageProps} />)}
            </LayoutWrapper>
          </TabContext>
        </DsmThemeProvider>
      </CommandPalette>
    </ThemeProvider>
  );
}

export default MyApp;
