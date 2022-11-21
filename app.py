from flask import Flask,render_template

app=Flask(__name__)
details=["I am Minul","I love coding"]
@app.route('/')

@app.route('/home')
def home():
    return render_template("index.html",details=details)

@app.route('/about')
def about():
    return "<h1>about page</h1>"


if __name__=="__main__":
    app.run(debug=True)
