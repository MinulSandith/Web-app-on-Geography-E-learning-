from flask import Flask,render_template,url_for
import webbrowser
webbrowser.open("http://localhost:8080/")
app=Flask(__name__)

details=["I am Minul","I love coding"]

@app.route('/')
@app.route('/home')
def home():
    return render_template("home.html",details=details,title="Home")

@app.route('/about')
def about():
    return render_template("about.html",title="About")

@app.route('/asia')
def asia():
    return render_template("asia.html",title="Asia",x="asia")

@app.route('/mountains')
def mountains():
    return render_template("mountains.html",title="Mountains")

@app.route('/waterfalls')
def waterfalls():
    return render_template("waterfalls.html",title="Waterfallls")


@app.route('/hills')
def hills():
    return render_template("hills.html",title="Hills")

@app.route('/lakes')
def lakes():
    return render_template("lakes.html",title="Lakes")

@app.route('/volcanos')
def volcanos():
    return render_template("volcanos.html",title="Volcanos")

if __name__=="__main__":
    app.run(port=8080)

