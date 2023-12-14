import sqlite3
from sqlite3 import Error

def create_connection():
    conn = None;
    try:
        conn = sqlite3.connect(':memory:')       # crea una base de datos en memoria
        print(sqlite3.version)
    except Error as e:
        print(e)
    finally:
        if conn:
            conn.close()

def create_table(conn, create_table_sql):
    try:
        c = conn.cursor()
        c.execute(create_table_sql)
    except Error as e:
        print(e)

def main():
    database = r"C:\sqlite\db\pythonsqlite.db"

    sql_create_tasks_table = """ CREATE TABLE IF NOT EXISTS tasks (
                                        id integer PRIMARY KEY,
                                        task text NOT NULL
                                    ); """

    # crea una conexión a la base de datos
    conn = create_connection(database)

    # crea la tabla de tareas
    if conn is not None:
        create_table(conn, sql_create_tasks_table)
    else:
        print("Error! No se pudo crear la conexión a la base de datos.")

if __name__ == '__main__':
    main()