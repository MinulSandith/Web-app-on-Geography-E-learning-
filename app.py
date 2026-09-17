from flask import Flask,render_template,url_for
import webbrowser
app=Flask(__name__)

details=["I am Minul","I love coding"]

@app.route('/')
@app.route('/home')
def home():
    return render_template("home.html",details=details,title="Home")

@app.route('/asia')
def asia():
    return render_template("asia.html",title="Asia",x="asia")

@app.route('/mountains')
def mountains():
    return render_template("mountains.html",title="Mountains")

@app.route('/waterfalls')
def waterfalls():
    return render_template("waterfalls.html",title="Waterfalls")


@app.route('/hills')
def hills():
    return render_template("hills.html",title="Hills")

@app.route('/lakes')
def lakes():
    return render_template("lakes.html",title="Lakes")

@app.route('/volcanos')
def volcanos():
    return render_template("volcanos.html",title="Volcanos")

@app.route('/rivers')
def rivers():
    return render_template("rivers.html",title="Rivers")

@app.route('/forests')
def forests():
    return render_template("forests.html",title="Forests")

@app.route('/oceans')
def oceans():
    return render_template("oceans.html",title="Oceans")

@app.route('/icebergs')
def icebergs():
    return render_template("icebergs.html",title="Icebergs")

if __name__=="__main__":
    webbrowser.open("http://localhost:8080/")
    app.run(port=8080)

