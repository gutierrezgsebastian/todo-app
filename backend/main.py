"""API para ToDo app usando FastAPI."""
from fastapi import FastAPI
from logica.validacion import TareaTypeNuevo, TareaTypeActualizar
from logica.http_methods_data import (
    tarea_read_json,
    tareas_read_json,
    tarea_post_json,
    tarea_put_toggle_json,
    tarea_delete_json,
)

app = FastAPI()


@app.get("/v1/get_tarea/{tarea_id}")
def get_tarea(tarea_id: int):
    """Obtiene una tarea específica."""
    return tarea_read_json(tarea_id)


@app.get("/v1/get_tareas/")
def get_tareas():
    """Obtiene todas las tareas."""
    return tareas_read_json()


@app.post("/v1/post_tarea/{tarea_id}")
def post_tarea(tarea_id: int, tarea: TareaTypeNuevo):
    """Crea una tarea específica."""
    tarea_post_json(tarea_id, tarea)
    return tarea


@app.put("/v1/put_tarea/{tarea_id}")
def put_toggle_tarea(tarea_id: int, tarea: TareaTypeActualizar | None = None):
    """Actualiza una tarea específica."""
    return tarea_put_toggle_json(tarea_id, tarea)


@app.put("/v1/put_tarea/{tarea_id}")
def put_toggle_tarea(tarea_id: int, tarea: TareaTypeActualizar | None = None):
    """Actualiza una tarea específica."""
    return tarea_put_toggle_json(tarea_id, tarea)


@app.delete("/v1/delete_tarea/{tarea_id}")
def delete_tarea(tarea_id: int):
    """Eliminar una tarea específica."""
    return tarea_delete_json(tarea_id)
