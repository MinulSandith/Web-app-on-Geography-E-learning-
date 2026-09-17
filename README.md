# Geography E-Learning Web App

A small Flask-based e-learning site that teaches physical geography topics
(mountains, hills, lakes, waterfalls, volcanoes, rivers, forests, oceans,
icebergs) plus a dedicated deep-dive page on the physical geography of Asia
with an interactive image map. Built as a learning project with server-rendered
Jinja2 templates, custom CSS, and small vanilla-JS interactions (collapsible
sections, an overlay side menu, and a "rate us" popup).

## Features

- Home page with expandable topic lists and an embedded rating widget
- Individual content pages for Mountains, Hills, Waterfalls, Lakes, Volcanoes,
  Rivers, Forests, Oceans, and Icebergs
- A dedicated Asia page with an interactive image map (`static/map.html`)
- Quiz page assets (`static/quiz-script.js`, `static/quiz design.css`)
- Shared page layout/navigation via a Jinja2 base template
  (`templates/layout-navs.html`)

## Project structure

```
app.py                  Flask application and routes
templates/               Jinja2 templates (one per topic) + shared layout
static/                  CSS, JS, and image assets
requirements.txt         Python dependencies
```

## Requirements

- Python 3.9+
- Flask (see `requirements.txt`)

## Setup

1. Clone or download this repository.
2. (Recommended) create a virtual environment:
   ```
   python3 -m venv venv
   source venv/bin/activate   # on Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
4. Run the app:
   ```
   python app.py
   ```
5. Your default browser will open automatically. If it doesn't, go to:
   ```
   http://localhost:8080
   ```

## Routes

| Route         | Page               |
|---------------|--------------------|
| `/`, `/home`  | Home               |
| `/asia`       | Asia (interactive map) |
| `/mountains`  | Mountains          |
| `/hills`      | Hills              |
| `/waterfalls` | Waterfalls         |
| `/lakes`      | Lakes              |
| `/volcanos`   | Volcanoes          |
| `/rivers`     | Rivers             |
| `/forests`    | Forests            |
| `/oceans`     | Oceans             |
| `/icebergs`   | Icebergs           |

## Known limitations

- The "Deserts" nav link is a placeholder (`#`) — no content page exists for
  it yet.
- This runs on Flask's built-in development server, which is not intended
  for production use. For deployment, put it behind a production WSGI
  server (e.g. gunicorn/waitress) and a reverse proxy.

## Notes for contributors

Several static filenames contain spaces (e.g. `static/2 design.css`,
`static/over design.css`). These work fine with Flask's `url_for`, but
renaming them to hyphen/underscore-separated names is recommended for
easier shell/tooling use if you touch those files.
