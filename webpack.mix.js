const mix = require('laravel-mix');

mix.disableSuccessNotifications()
    .js('src/js/app.js', 'public/assets/js')
    .postCss('src/css/app.css', 'public/assets/css', [
        require('postcss-import'),
        require('postcss-nested'),
        require('tailwindcss'),
    ])
    .sourceMaps();
