from flask import Flask, render_template,request,redirect
import mysql.connector

app = Flask(__name__)



@app.route('/')
def Home():
    return render_template('index.html')

@app.route('/about')
def About():
    return render_template('about.html')

@app.route('/project')
def Project():
    return render_template('project.html')

@app.route('/contact' ,methods=['GET','POST'])
def Contact():
      # connecting to  mysql database
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="portfolio"
    )

    # creating cursor
    mycursor = conn.cursor()
    
    # fetching details from contact form
    firstname = request.form.get('firstname')
    Lastname = request.form.get('Lastname')
    Email = request.form.get('email')
    Phone = request.form.get('phone_num')
    Address = request.form.get('address')

    if request.method == "POST":
        sql = "INSERT INTO mycontact (fname,lname,email,phone,address) VALUES (%s, %s,%s,%s,%s)"
        val = (firstname,Lastname,Email,Phone,Address)
        mycursor.execute(sql,val)
        conn.commit()
        conn.close()
        return redirect("/")

    return render_template('contact.html')

@app.route('/Post' , methods=['GET','POST'])
def Post():
     # connecting to  mysql database
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="contact"
    )
    
    # creating cursor
    mycursor = conn.cursor()
    
    return render_template("post.html")

app.run(debug=True)
