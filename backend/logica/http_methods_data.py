"""Implementa métodos CRUD para importar con FastAPI."""
from ast import Not
from typing import Tuple
import pandas as pd
import json
from pathlib import Path


data_path = Path(__file__).parent.parent / "data"


def tarea_read_json(tarea_id: int):
    df_tareas = pd.read_csv(data_path / "tareas.csv")
    serie_tarea = df_tareas.loc[df_tareas["id"] == tarea_id]
    serie_json = serie_tarea.to_json(orient="records")
    get_result = json.loads(serie_json)
    return get_result


def tareas_read_json():
    df_tareas = pd.read_csv(data_path / "tareas.csv")
    df_json = df_tareas.to_json(orient="records")
    get_result = json.loads(df_json)
    return get_result


def tarea_post_json(tarea_id: int, tarea_nueva_body):
    df_tareas = pd.read_csv(data_path / "tareas.csv")
    post_dict = json.loads(tarea_nueva_body.json())
    post_df = pd.DataFrame(post_dict, index=[tarea_id])
    post_result = pd.concat([df_tareas, post_df]).to_csv(
        data_path / "tareas.csv", index=None
    )
    return post_result


def tarea_put_toggle_json(tarea_id: int, tarea):
    df_tareas = pd.read_csv(data_path / "tareas.csv")

    # Cambio de estado
    if tarea:
        df_tareas.loc[tarea_id - 1, "estado"] = tarea.estado.value
        df_tareas.to_csv(data_path / "tareas.csv", index=None)
        df_tareas.loc[tarea_id - 1, "tarea"] = tarea.tarea
        df_tareas.to_csv(data_path / "tareas.csv", index=None)
    if not tarea:
        df_tareas.loc[tarea_id - 1, "estado"] = not df_tareas.loc[
            tarea_id - 1, "estado"
        ]
        df_tareas.to_csv(data_path / "tareas.csv", index=None)

    update_toggle_result = tarea_read_json(tarea_id)
    return update_toggle_result


def tarea_delete_json(tarea_id: int):
    df_tareas = pd.read_csv(data_path / "tareas.csv")
    busqueda_indice_tarea = list((df_tareas.loc[df_tareas["id"] == tarea_id]).index)
    # Define tarea a borrar
    delete_result = tarea_read_json(tarea_id)

    # Borra tarea
    df_tareas.drop(busqueda_indice_tarea, inplace=True)
    df_tareas.to_csv(data_path / "tareas.csv", index=None)
    return delete_result
