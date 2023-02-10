import { Head, Html, Main, NextScript } from 'next/document';

function MyDocument() {
  return (
    <Html className="dark">
      <Head />
      <body className="c1495616js-light overflow-x-hidden bg-white text-black antialiased transition-colors dark:bg-gray-900 dark:text-white">
        <script
          key="c1495616js-theme"
          dangerouslySetInnerHTML={{
            __html: `(function() { try {
        var mode = localStorage.getItem('mode');
        var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
        if (!mode && supportDarkMode)  document.body.classList.add('c1495616js-dark');
        if (!mode) localStorage.setItem('mode', 'light'); return;
        document.body.classList.add('c1495616js-' + mode);
      } catch (e) {} })();`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
