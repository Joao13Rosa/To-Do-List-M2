import RENDERIZARPERFIL from "./renderizarPerfil.js";
import EVENTOS from "../controle/eventos.js";
import DOM from "../controle/DOM.js";
import CRIARMODAIS from '../controle/criarModais.controle.js';
import HABITOSREQUISICOES from '../api/habitos.api.js'



CRIARMODAIS.criarHabitos()
RENDERIZARPERFIL.montardados()
EVENTOS.eventoLogout()

DOM.gerarHabitos()

EVENTOS.eventoAbrirModalCriar()
EVENTOS.fecharModalCriar()
EVENTOS.eventoCriarHabito()
EVENTOS.abrirModalEditar()
EVENTOS.fecharModalEditar()
EVENTOS.eventoEditHabit()

EVENTOS.abrirModalEditarPerfil()
EVENTOS.fecharModalEditarPerfil()
CRIARMODAIS.editarPerfil()

EVENTOS.eventoApagarHabit()

CRIARMODAIS.editarHabitos()