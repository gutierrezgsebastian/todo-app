"""Validación de tipos para tareas con pydantic."""
from enum import Enum
from pydantic import BaseModel


class Estado(Enum):

    on = True
    off = False


class TareaTypeNuevo(BaseModel):

    id: int
    tarea: str = ""
    estado: Estado = Estado.off


class TareaTypeActualizar(BaseModel):

    tarea: str | None = None
    estado: Estado | None = None
