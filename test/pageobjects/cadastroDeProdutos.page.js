import { $ } from '@wdio/globals'

export default class CadastroDeProdutoPage {

    //Mapeamento de Elemento
    get adicionarProdutoBtn() { return $('android=new UiSelector().packageName("com.example.lojinha").className("android.view.View").index(2)'); }
    get textoPaginaAdicionarProdutoText() { return $('android=new UiSelector().text("Não esqueça de preencher todas as informações do produto para que ele seja mais vendível a seus clientes.")'); }

    get nomeProdutoInput() { return $('android=new UiSelector().className("android.widget.EditText").instance(0)'); }
    get valorProdutoInput() { return $('android=new UiSelector().className("android.widget.EditText").instance(1)'); }
    get corProdutoInput() { return $('android=new UiSelector().className("android.widget.EditText").instance(2)'); }

    get salvarBtn() { return $('android=new UiSelector().text("SALVAR")'); }

    get mensagemSucesso() { return $('android=new UiSelector().text("Produto adicionado com sucesso")');}
    get mensagemErro() { return $('android=new UiSelector().text("O valor do produto deve estar entre R$ 0,01 e R$ 7.000,00")');}

    get deleteBtn() { return $('android=new UiSelector().text("delete").instance(0)'); }
    get mensagemDelecao() { return $('android=new UiSelector().text("Produto removido com sucesso")'); }
    
    
    /**
     * Método para clicar em Adicionar Produto
     */
    async clicarBotaoAdicionarProduto() {
        await this.adicionarProdutoBtn.click();
    }

    /**
     * Método para retornar texto na página Adicionar Produto
     * @returns texto presente no elemento
     */
    async obterTextoDentroDeAdicionarProdutos() {
        return await this.textoPaginaAdicionarProdutoText.getText();
    }

    /**
     * Método para retornar texto na página Adicionar Produto
     * @param {string} mensagem - Informar mensagem desejada
     */
    async validarTextoTelaCadastroProduto(mensagem) {
        expect(await this.textoPaginaAdicionarProdutoText()).toEqual(mensagem)
    }

    /**
     * Método para inserir o nome desejado na tela de cadastro de produto
     * @param {string} nome - Informar nome desejado
     */
    async informarNomeProduto(nome) {
        await this.nomeProdutoInput.setValue(nome);
    }

    /**
     * Método para inserir o valor desejado na tela de cadastro de produto
     * @param {string} valor - Informar valor desejado
     */
    async informarValorProduto(valor) {
        await this.valorProdutoInput.setValue(valor);
    }

    /**
     * Método para inserir uma cor desejada na tela de cadastro de produto
     * @param {string} cores - Informar cor desejada
     */
    async informarCoresProduto(cores) {
        await this.corProdutoInput.setValue(cores);
    }

    /**
     * Método que clica no elemento botão salvar da tela Adicionar Produto
     */
    async clicarBotaoSalvar() {
        await this.salvarBtn.click();
    }

    /**
     * Método para preencher todos os campos na tela de cadastro de um novo produto
     * @param {string} name - Nome do produto desejado
     * @param {string} price - Preço do produto desejado
     * @param {string} colors - Cor do produto desejado - Caso seja necessário informar mais de uma, informar no formato "Azul, verde"
     */
    async cadastrarProdutoTodosCampos(name, price, colors) {
        await this.informarNomeProduto(name);
        await this.informarValorProduto(price);
        await this.informarCoresProduto(colors);
        await this.clicarBotaoSalvar();
    }

    /**
     * Método que busca a mensagem de sucesso apresentada ao cadastrar um novo produto
     * @returns retorna mensagem de sucesso
     */
    async obterTextoMensagemSucesso() {
        return await this.mensagemSucesso.getText();
    }

    /**
     * Método para retornar mensagem de sucesso na página Adicionar Produto
     * @param {string} mensagem - Informar mensagem desejada
     */
    async validarMensagemSucesso(mensagem) {
        expect(await this.obterTextoMensagemSucesso()).toEqual(mensagem);
    }

    /**
     * Método que retorna mensagem de erro ao ao cadastrar um produto com valor inválido
     * @returns retorna mensagem de erro
     */
    async obterTextoMensagemErro() {
        return await this.mensagemErro.getText();
    }

    /**
     * Método para retornar mensagem de erro na página Adicionar Produto
     * @param {string} mensagem - Informar mensagem desejada
     */
    async validarMensagemErro(mensagem) {
        expect(await this.obterTextoMensagemErro()).toEqual(mensagem);
    }

    /**
     * Método que realiza a exclusão do primeiro produto na lista de produtos
     */
    async clicarDeletarPrimeiroProduto() {
        await this.deleteBtn.click();
    }

    /**
     * Método para obter a mensagem apresentada ao deletar um produto na listagem
     * @returns retorna mensagem de deleção de produto
     */
    async obterTextoMensagemDelecao() {
        return await this.mensagemDelecao.getText();
    }

    /**
     * Método para retornar mensagem de deleção na página Lista de Produtos
     * @param {string} mensagem - Informar mensagem desejada
     */
    async validarMensagemDelecao(mensagem) {
        expect(await this.obterTextoMensagemDelecao()).toEqual(mensagem);
    }

}