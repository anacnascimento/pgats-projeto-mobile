import { $ } from '@wdio/globals'

export default class ListaDeProdutosPage {

    //Mapeamento de Elementos
    get listaDeProdutoLabel() { return $('android=new UiSelector().packageName("com.example.lojinha").text("Lista de Produtos")'); }


    /**
     * Método para retornar o texto da label "Lista de Produto"
     * @returns retorna o texto dentro do campo label 
     */
    async obterTextoListaDeProdutoTelaInicial() {
        return await this.listaDeProdutoLabel.getText();
    }

    /**
     * Método para retornar a mensagem da tela inicial após o login
     * @param {string} mensagem - Informar mensagem desejada
     */
    async validarTelaInicialPosLogin(mensagem) {
        expect(await this.obterTextoListaDeProdutoTelaInicial()).toEqual(mensagem);
    }
}