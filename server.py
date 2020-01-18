from flask import Flask, render_template
planets_specs = ['Name', 'Diameter', 'Climate', 'Terrain', 'Surface Water Percentage', 'Population', 'Residents']


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html', planets_specs=planets_specs)


if __name__ == '__main__':
    app.run(debug=True)
