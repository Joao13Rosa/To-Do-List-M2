import HABITOSREQUISICOES from "../api/habitos.api.js"

export default class DOM {
    static arr = [];
    static async gerarHabitos() {

        const tarefas = await HABITOSREQUISICOES.todosHabitos()

        tarefas.forEach(tarefa => {

            const section = document.querySelector('.tarefas-section');
            const tagDiv = document.createElement('div');
            const input = document.createElement('input');
            const tagTitulo = document.createElement('h3');
            const tagDesc = document.createElement('h3');
            const tagCat = document.createElement('h3');
            const tagEditar = document.createElement('h3');
            const buttonEditar = document.createElement('button');

            tagDiv.classList.add('dadosRenderizados');
            tagTitulo.classList.add('viewMobile-Renderizados');
            tagDesc.classList.add('viewDeskop-Renderizados');
            tagCat.classList.add('viewDeskop-Renderizados');
            tagEditar.classList.add('viewMobile-Renderizados');
            input.classList.add('viewMobile-Renderizados');
            buttonEditar.classList.add('btnEditar');

            input.type = 'checkbox';
            input.value = tarefa.habit_status;
            input.checked = false;
            input.name = tarefa.habit_id;

            input.id = 'inputCheckPost';
            tagTitulo.id = 'tituloPost';
            tagDesc.id = 'descricaoPost';
            tagCat.id = 'categoriaPost';
            tagEditar.id = 'editarPost';
            buttonEditar.id = 'botao';
            buttonEditar.id = tarefa.habit_id;

            buttonEditar.innerText = '...';
            tagTitulo.innerText = tarefa.habit_title;
            tagDesc.innerText = tarefa.habit_description;
            tagCat.innerText = tarefa.habit_category;

            /* if(tarefa.habit_status === true){
                tagTitulo.style.textDecoration = "line-through";
                tagDiv.style.backgroundColor = "#EBEBEB";
                input.checked = true;
            } */

            input.addEventListener('click', async () => {
                tagTitulo.style.textDecoration = "line-through";
                tagDiv.style.backgroundColor = "#EBEBEB";
                await HABITOSREQUISICOES.habitoCompleto(input.name)
            })

            tagEditar.append(buttonEditar);
            tagDiv.append(input, tagTitulo, tagDesc, tagCat, tagEditar);
            section.append(tagDiv);

            this.arr.push(input.value)

            const contador = 0;

            const botaoTodos = document.querySelector('.btnFiltro-main-todos');
            botaoTodos.addEventListener('click', () => {
                
                tagDiv.remove();

                if (tarefa.habit_status === true || tarefa.habit_status === false) {
                    const section = document.querySelector('.tarefas-section');
                    const tagDiv = document.createElement('div');
                    const input = document.createElement('input');
                    const tagTitulo = document.createElement('h3');
                    const tagDesc = document.createElement('h3');
                    const tagCat = document.createElement('h3');
                    const tagEditar = document.createElement('h3');
                    const buttonEditar = document.createElement('button');

                    tagDiv.classList.add('dadosRenderizados');
                    tagTitulo.classList.add('viewMobile-Renderizados');
                    tagDesc.classList.add('viewDeskop-Renderizados');
                    tagCat.classList.add('viewDeskop-Renderizados');
                    tagEditar.classList.add('viewMobile-Renderizados');
                    input.classList.add('viewMobile-Renderizados');
                    buttonEditar.classList.add('btnEditar');

                    input.type = 'checkbox';
                    input.value = tarefa.habit_status;
                    input.checked = false;
                    input.name = tarefa.habit_id;

                    input.id = 'inputCheckPost';
                    tagTitulo.id = 'tituloPost';
                    tagDesc.id = 'descricaoPost';
                    tagCat.id = 'categoriaPost';
                    tagEditar.id = 'editarPost';
                    buttonEditar.id = 'botao';
                    buttonEditar.id = tarefa.habit_id;

                    buttonEditar.innerText = '...';
                    tagTitulo.innerText = tarefa.habit_title;
                    tagDesc.innerText = tarefa.habit_description;
                    tagCat.innerText = tarefa.habit_category;

                    tagEditar.append(buttonEditar);
                    tagDiv.append(input, tagTitulo, tagDesc, tagCat, tagEditar);
                    section.append(tagDiv);
                    if(tarefa.habit_status === true){
                        tagTitulo.style.textDecoration = "line-through";
                        tagDiv.style.backgroundColor = "#EBEBEB";
                        input.checked = true;
                    }
                }
            })

            const botaoConcluido = document.querySelector('.btnFiltro-main-concluidos');
            botaoConcluido.addEventListener('click', () => {
                
                tagDiv.remove();


                if (tarefa.habit_status === true) {
                    const section = document.querySelector('.tarefas-section');
                    const tagDiv = document.createElement('div');
                    const input = document.createElement('input');
                    const tagTitulo = document.createElement('h3');
                    const tagDesc = document.createElement('h3');
                    const tagCat = document.createElement('h3');
                    const tagEditar = document.createElement('h3');
                    const buttonEditar = document.createElement('button');

                    tagDiv.classList.add('dadosRenderizados');
                    tagTitulo.classList.add('viewMobile-Renderizados');
                    tagDesc.classList.add('viewDeskop-Renderizados');
                    tagCat.classList.add('viewDeskop-Renderizados');
                    tagEditar.classList.add('viewMobile-Renderizados');
                    input.classList.add('viewMobile-Renderizados');
                    buttonEditar.classList.add('btnEditar');

                    input.type = 'checkbox';
                    input.value = tarefa.habit_status;
                    input.checked = false;
                    input.name = tarefa.habit_id;

                    input.id = 'inputCheckPost';
                    tagTitulo.id = 'tituloPost';
                    tagDesc.id = 'descricaoPost';
                    tagCat.id = 'categoriaPost';
                    tagEditar.id = 'editarPost';
                    buttonEditar.id = 'botao';
                    buttonEditar.id = tarefa.habit_id;

                    buttonEditar.innerText = '...';
                    tagTitulo.innerText = tarefa.habit_title;
                    tagDesc.innerText = tarefa.habit_description;
                    tagCat.innerText = tarefa.habit_category;

                    tagDiv.append(input, tagTitulo, tagDesc, tagCat, tagEditar);
                    section.append(tagDiv);

                    tagEditar.append(buttonEditar);
                    tagTitulo.style.textDecoration = "line-through";
                    tagDiv.style.backgroundColor = "#EBEBEB";
                    input.checked = true;
                }
            })            
        })
    }
}