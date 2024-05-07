""" CONEXION A POSTGRES """
#librerias para utilizar las variables de entorno
import os
from dotenv import load_dotenv

# librerias para la coneccion
import psycopg2

# cargamos las variables de entorno
load_dotenv()

post_host = os.getenv('HOST')
post_pass = os.getenv('PASSWORD')
post_bd = os.getenv('BD_POS')
post_user = os.getenv('USER')
post_puert = os.getenv('PUERTO')


try:   
    conn = psycopg2.connect(
        dbname=post_bd,
        user=post_user,
        password=post_pass,
        host=post_host
    )
    print("Si hay")
except :
    print("No hay")