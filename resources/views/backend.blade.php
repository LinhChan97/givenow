<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css">
        <link href="{{ asset('css/backend.css') }}" rel="stylesheet" type="text/css">
    </head>
    <body id="app"></body>
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/backend.js') }}"></script>
</html>