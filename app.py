from flask import Flask, render_template, request, jsonify
from appBD import conn

app = Flask(__name__, template_folder='templates', static_folder='static')


# Lista de rutas y funciones de manejo de vistas
routes = [
    ("/promociones", "promociones", "promociones.html"),
    ("/detalles", "detalles", "detalles.html"),
    ("/planes", "planes", "planes.html"),
    ("/clientes", "clientes", "clientes.html"),
    ("/quienes_somos", "quienes_somos", "quienes_somos.html"),
    ("/contactenos", "contactenos", "contactenos.html")
]

# Definición de las funciones de manejo de vistas



# Registro dinámico de rutas en Flask
for route, endpoint, template in routes:
    app.add_url_rule(route, endpoint, lambda template=template: render_template(template))

@app.route("/")
def index():
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM casas_ventas")
    casas_ventas = cursor.fetchall()
    cursor.close()
    print(casas_ventas)
    return render_template("index.html", casas_ventas=casas_ventas)



@app.route("/submit_comment", methods=["POST"])
def procesar_cliente():
    try:
        nombre = request.form.get("name")
        comentario = request.form.get("comment")
        cursor = conn.cursor()
        cursor.execute("INSERT INTO user_comentarios (nombre, comentario) VALUES (%s, %s);", (nombre, comentario))
        conn.commit()
        

        cursor.close()
        return jsonify({"ok": f"Gracias por tu comentario {nombre}",})
    except:
        return jsonify({"error":"Upps, tu momentario no nos sirvio",})

#"""""INSERCION DE DATOS""""""#"

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
