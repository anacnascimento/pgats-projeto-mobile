import { $ } from '@wdio/globals'

export default class LoginPage {

    get usuarioInput() { return $('android=new UiSelector().packageName("com.example.lojinha").className("android.widget.EditText").instance(0)') };
    get senhaInput() { return $('//android.view.View[@text="Senha"]/../android.widget.EditText') };
    get entrarBtn() { return $('android=new UiSelector().text("ENTRAR")') };

    async cliqueBotaoEntrar() {
        await this.entrarBtn.click();
    }

    async preencherUsuario(usuario) {
        await this.usuarioInput.setValue(usuario);
    }

    async preencherSenha(senha) {
        await this.senhaInput.setValue(senha);
    }

    async logar(usuario, senha) {
        await this.preencherUsuario(usuario);
        await this.preencherSenha(senha);
        await this.cliqueBotaoEntrar();
    }
}