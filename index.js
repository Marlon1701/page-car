const onClickCadastro = () => {
  window.open("cadastrar.html", "_self");
};

const onClickCadastroFeito = () => {
  const nome = document.getElementById("nome").value;
  if (nome.length < 7) {
    alert("preencha o campo do nome corretamente");
    return;
  }
  const data = document.getElementById("data").value;
  if (data === "") {
    alert("preencha o campo da data corretamente");
    return;
  }
  const email = document.getElementById("email").value;
  if (email.length < 5 || !email.includes("@")) {
    alert("preencha o campo do email corretamente");
    return;
  }
  const tel = document.getElementById("tel").value;
  if (tel.length < 8) {
    alert("preencha o campo do telefone corretamente");
    return;
  }
  window.open("index.html", "_self");
  alert("Cadastro feito com sucesso");
};
