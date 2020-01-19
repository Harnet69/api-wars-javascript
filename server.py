from flask import Flask, render_template, request
planets_specs = ['Name', 'Diameter', 'Climate', 'Terrain', 'Surface Water %', 'Population', 'Residents']


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html', planets_specs=planets_specs)


@app.route('/login', methods=["POST", "GET"])
def login():
    if request.method == "POST":
        user_login = request.form['login']
        password = request.form['password']
        print(f"{user_login}, {password}") # it works!!!
        return f"{user_login}, {password}"

        # req_data = request.get_json()
        # name = 'John'
        # if "name" in req_data:
        #     name = req_data["name"]
        # age = req_data["age"]
        # is_married = req_data["is_married"]
        # cars = req_data["cars"]
        # girlfriend = req_data["girlfriend"]["name"]
        #
        # return f"{name} wich {age} years old {is_married} married drive on {cars[0]} and girlfriend {girlfriend}"
    else:
        return "It's a login page"


if __name__ == '__main__':
    app.run(debug=True)
