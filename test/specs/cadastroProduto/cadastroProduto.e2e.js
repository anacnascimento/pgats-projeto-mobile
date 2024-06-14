import LoginPage from '../../pageobjects/login.page.js'
import ListaDeProdutosPage from '../../pageobjects/listaDeProdutos.page.js'
import CadastroDeProdutoPage from '../../pageobjects/cadastroDeProdutos.page.js'

const usuario = 'admin2';
const senha = 'admin';
const loginPage = new LoginPage();
const listaProdutos = new ListaDeProdutosPage();
const cadastro = new CadastroDeProdutoPage();
const mensagem = "Não esqueça de preencher todas as informações do produto para que ele seja mais vendível a seus clientes.";
const mensagemSucesso = "Produto adicionado com sucesso";
const mensagemErro = "O valor do produto deve estar entre R$ 0,01 e R$ 7.000,00";

describe('Feature de Cadastro de Produto', () => {
    it('Cadastrar um produto preenchendo todos os campos', async () => {
        await loginPage.logar(usuario, senha);
        await listaProdutos.validarTelaInicialPosLogin();
        await cadastro.clicarBotaoAdicionarProduto();
        await cadastro.validarTextoTelaCadastroProduto(mensagem);
        await cadastro.cadastrarProdutoTodosCampos("Nintendo Switch", "1000", "Preto, azul");
        await cadastro.validarMensagemSucesso(mensagemSucesso);
    })

    it('Cadastrar um produto preenchendo um valor acima de R$7.000,00', async () => {
        await loginPage.logar(usuario, senha);
        await listaProdutos.validarTelaInicialPosLogin();
        await cadastro.clicarBotaoAdicionarProduto();
        await cadastro.validarTextoTelaCadastroProduto(mensagem);
        await cadastro.cadastrarProdutoTodosCampos("IPhone 15 Pro Max", "8000", "Spacial White");
        await cadastro.validarMensagemErro(mensagemErro);
    })

    it('Editar um produto existente', async() => {
        await loginPage.logar(usuario, senha);
        await listaProdutos.validarTelaInicialPosLogin();
        await cadastro.clicarDeletarPrimeiroProduto();
        await cadastro.validarMensagemDelecao();
    })
})

