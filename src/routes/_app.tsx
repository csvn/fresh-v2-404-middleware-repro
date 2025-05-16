import { define } from '../util.ts';

export default define.page(function App({ Component, state }) {
  console.log('_app');
  return (
    <html lang='en-US'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Example</title>
        <style>{`body { color: #eee; background: #333; }`}</style>
      </head>

      <body>
        {state.middleware ? `${state.middleware}/` : ''}app/<Component />
      </body>
    </html>
  );
});
