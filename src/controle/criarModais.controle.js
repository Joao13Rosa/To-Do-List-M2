export default class CRIARMODAIS {
    static body = document.querySelector('body');
    static id = 0

    static criarHabitos() {
        const divModalCriar = document.createElement('div');
        const divTitulo = document.createElement('div');
        const h1Titulo = document.createElement('h1');
        const pSair = document.createElement('p');
        const formCriar = document.createElement('form');
        const pTitulo = document.createElement('p');
        const inputTitulo = document.createElement('input');
        const pDescricao = document.createElement('p');
        const inputDescricao = document.createElement('input');
        const pCategoria = document.createElement('p');
        const selectCategoria = document.createElement('select');
        const buttonCriar = document.createElement('button');
        const optionTrabalho = document.createElement('option');
        const optionSaude = document.createElement('option');
        const optionCasa = document.createElement('option');
        const optionLazer = document.createElement('option');

        h1Titulo.innerText = 'Criar hábito';
        pSair.innerText = 'X';
        pTitulo.innerText = 'Título';
        pDescricao.innerText = 'Descrição';
        pCategoria.innerText = 'Categoria';
        buttonCriar.innerText = 'Inserir';

        inputTitulo.classList.add('input-titulo-ModalCriarHabito');
        inputDescricao.classList.add('input-descricao-ModalCriarHabito');
        divModalCriar.classList.add('div-ModalCriarHabito');
        divTitulo.classList.add('div-titulo-ModalCriarHabito');
        h1Titulo.classList.add('h1-titulo-ModalCriarHabito');
        pSair.classList.add('p-sair-ModalCriarHabito');
        formCriar.classList.add('form-ModalCriarHabito');
        pTitulo.classList.add('p-titulo-ModalCriarHabito');
        inputTitulo.classList.add('input-titulo-ModalCriarHabito');
        pDescricao.classList.add('p-descricao-ModalCriarHabito');
        inputDescricao.classList.add('input-descricao-ModalCriarHabito');
        pCategoria.classList.add('p-categoria-ModalCriarHabito');
        selectCategoria.classList.add('select-categoria-ModalCriarHabito');
        buttonCriar.classList.add('button-criar-ModalCriarHabito');
        optionTrabalho.classList.add('option-trabalho-ModalCriarHabito');
        optionSaude.classList.add('option-saude-ModalCriarHabito');
        optionCasa.classList.add('option-casa-ModalCriarHabito');
        optionLazer.classList.add('option-lazer-ModalCriarHabito');

        inputTitulo.placeholder = 'Digitar Título';
        inputDescricao.placeholder = 'Digitar descrição';
        selectCategoria.placeholder = 'Selecionar categoria';
        
        optionTrabalho.value = 'trabalho';
        optionSaude.value = 'saude';
        optionCasa.value = 'casa';
        optionLazer.value = 'lazer';

        optionTrabalho.innerText = 'Trabalho';
        optionSaude.innerText = 'Saude';
        optionCasa.innerText = 'Casa';
        optionLazer.innerText = 'Lazer';

        this.body.append(divModalCriar);
        divModalCriar.append(divTitulo, formCriar);
        divTitulo.append(h1Titulo, pSair);
        selectCategoria.append(optionTrabalho, optionSaude, optionCasa, optionLazer)
        formCriar.append(pTitulo, inputTitulo, pDescricao, inputDescricao, pCategoria, selectCategoria, buttonCriar);
    }

    static editarHabitos() {
        const divModalEditar = document.createElement('div');
        const divTitulo = document.createElement('div');
        const h1Titulo = document.createElement('h1');
        const pSair = document.createElement('p');
        const formEditar = document.createElement('form');
        const pTitulo = document.createElement('p');
        const inputTitulo = document.createElement('input');
        const pDescricao = document.createElement('p');
        const inputDescricao = document.createElement('input');
        const pCategoria = document.createElement('p');
        const selectCategoria = document.createElement('select');
        const buttonSalvar = document.createElement('button');
        const buttonExcluir = document.createElement('button');
        const optionTrabalho = document.createElement('option');
        const optionSaude = document.createElement('option');
        const optionCasa = document.createElement('option');
        const optionLazer = document.createElement('option');
        const pStatus = document.createElement('p');
        const inputCheck = document.createElement('input');
        const divStatus = document.createElement('div');
        const divBotoes = document.createElement('div');

        h1Titulo.innerText = 'Editar hábito';
        pSair.innerText = 'X';
        pTitulo.innerText = 'Título';
        pDescricao.innerText = 'Descrição';
        pCategoria.innerText = 'Categoria';
        buttonSalvar.innerText = 'Salvar alterações';
        buttonExcluir.innerText = 'Excluir';
        pStatus.innerText = 'Status';

        divModalEditar.classList.add('div-modalEditar');
        divTitulo.classList.add('div-titulo-modalEditar');
        h1Titulo.classList.add('h1-modalEditar');
        pSair.classList.add('p-sair-modalEditar');
        formEditar.classList.add('form-modalEditar');
        pTitulo.classList.add('p-titulo-modalEditar');
        inputTitulo.classList.add('input-titulo-modalEditar');
        pDescricao.classList.add('p-descricao-modalEditar');
        inputDescricao.classList.add('input-descricao-modalEditar');
        pCategoria.classList.add('p-categoria-modalEditar');
        selectCategoria.classList.add('select-categoria-modalEditar');
        buttonSalvar.classList.add('button-salvar-modalEditar');
        buttonExcluir.classList.add('button-excluir-modalEditar');
        optionTrabalho.classList.add('option-trabalho-modalEditar');
        optionSaude.classList.add('option-saude-modalEditar');
        optionCasa.classList.add('option-casa-modalEditar');
        optionLazer.classList.add('option-lazer-modalEditar');
        pStatus.classList.add('p-status-modalEditar');
        inputCheck.classList.add('input-check-modalEditar');
        divStatus.classList.add('div-status-modalEditar');
        divBotoes.classList.add('div-button-modalEditar');

        inputTitulo.placeholder = 'Pegar o titulo já criado';
        inputDescricao.placeholder = 'Pegar o descrição já criado';
        selectCategoria.placeholder = 'Selecionar categoria';

        inputCheck.type = 'checkbox';
        
        optionTrabalho.value = 'trabalho';
        optionSaude.value = 'saude';
        optionCasa.value = 'casa';
        optionLazer.value = 'lazer';

        optionTrabalho.innerText = 'Trabalho';
        optionSaude.innerText = 'Saude';
        optionCasa.innerText = 'Casa';
        optionLazer.innerText = 'Lazer';

        this.body.append(divModalEditar);
        divModalEditar.append(divTitulo, formEditar);
        divTitulo.append(h1Titulo, pSair);
        selectCategoria.append(optionTrabalho, optionSaude, optionCasa, optionLazer);
        divStatus.append(pStatus, inputCheck);
        divBotoes.append(buttonExcluir, buttonSalvar);
        formEditar.append(pTitulo, inputTitulo, pDescricao, inputDescricao, pCategoria, selectCategoria,divStatus,divBotoes);
    }

    static editarPerfil() {
        const divModalEditar = document.createElement('div');
        const divTitulo = document.createElement('div');
        const h1Titulo = document.createElement('h1');
        const pSair = document.createElement('button');
        const formEditar = document.createElement('form');
        const pNome = document.createElement('p');
        const inputNome = document.createElement('input');
        const pUrl = document.createElement('p');
        const inputUrl = document.createElement('input');
        const buttonSalvar = document.querySelector('button');

        h1Titulo.innerText = 'Editar perfil';
        pSair.innerText = 'X';
        pNome.innerText = 'Nome';
        pUrl.innerText = 'URL da imagem do perfil';
        buttonSalvar.innerText = 'Salvar Alterações';

        inputNome.placeholder = 'NOME DO USUARIO JA CADASTRADO';
        inputUrl.placeholder = 'URL DA IMAGEM JA CADASTRADA';

        inputNome.classList.add('input-nome-ModalEditarPerfil');
        inputUrl.classList.add('input-url-ModalEditarPerfil');
        divModalEditar.classList.add('div-ModalEditarPerfil');
        divTitulo.classList.add('div-titulo-ModalEditarPerfil');
        h1Titulo.classList.add('h1-ModalEditarPerfil');
        pSair.classList.add('p-sair-ModalEditarPerfil');
        formEditar.classList.add('form-ModalEditarPerfil');
        pNome.classList.add('p-nome-ModalEditarPerfil');
        pUrl.classList.add('p-url-ModalEditarPerfil');
        buttonSalvar.classList.add('button-salvar-ModalEditarPerfil');

        this.body.append(divModalEditar);
        divModalEditar.append(divTitulo, formEditar);
        divTitulo.append(h1Titulo, pSair);
        formEditar.append(pNome, inputNome, pUrl, inputUrl, buttonSalvar);
    }

    static excluirHabito() {
        const divModalExcluir = document.createElement('div');
        const divTitulo = document.createElement('div');
        const h1Titulo = document.createElement('h1');
        const pSair = document.createElement('p');
        const h2 = document.createElement('form');
        const p = document.createElement('p');
        const buttonCancelar = document.createElement('button');
        const buttonExcluir = document.createElement('button');
        const divTexto = document.createElement('div');
        const divBotoes = document.createElement('div');

        h1Titulo.innerText = 'Excluir hábito';
        pSair.innerText = 'X';
        h2.innerText = 'Certeza que deseja excluir este hábito?';
        p.innerText = 'Após executar essa ação não será possível desfazer';
        buttonCancelar.innerText = 'Cancelar';
        buttonExcluir.innerText = 'Sim, excluir este hábito';
        
        divModalExcluir.classList.add('div-ModalExcluirHabito');
        divTitulo.classList.add('div-titulo-ModalExcluirHabito');
        h1Titulo.classList.add('h1-ModalExcluirHabito');
        pSair.classList.add('p-sair-ModalExcluirHabito');
        h2.classList.add('h2-ModalExcluirHabito');
        p.classList.add('p-ModalExcluirHabito');
        buttonCancelar.classList.add('button-cancelar-ModalExcluirHabito');
        buttonExcluir.classList.add('button-excluir-ModalExcluirHabito');
        divTexto.classList.add('div-texto-ModalExcluirHabito');
        divBotoes.classList.add('div-button-ModalExcluirHabito');
        divTexto.classList.add('div-texto-ModalExcluirHabito');
        divBotoes.classList.add('div-botoes-ModalExcluirHabito');

        this.body.append(divModalExcluir);
        divModalExcluir.append(divTitulo, divTexto, divBotoes);
        divTitulo.append(h1Titulo, pSair);
        divTexto.append(h2, p);
        divBotoes.append(buttonCancelar, buttonExcluir);
    }
}