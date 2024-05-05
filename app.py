from flask import Flask, render_template

app = Flask(__name__, template_folder='templates', static_folder='static')

# Lista de rutas y funciones de manejo de vistas
routes = [
    ("/", "index", "index.html"),
    ("/promociones", "promociones", "promociones.html"),
    ("/detalles", "detalles", "detalles.html"),
    ("/planes", "planes", "planes.html"),
    ("/clientes", "clientes", "clientes.html"),
    ("/quienes_somos", "quienes_somos", "quienes_somos.html"),
    ("/contactenos", "contactenos", "contactenos.html")
]

# Registro dinámico de rutas en Flask
for route, endpoint, template in routes:
    app.add_url_rule(route, endpoint, lambda template=template: render_template(template))

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
