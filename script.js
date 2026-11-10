/* =========================================================
   DADOS DA EMPRESA - EDITE SÓ AQUI
   Mude o que está entre aspas. Campo vazio ("") não aparece no site.
   ========================================================= */
const EMPRESA = {
  whatsapp: "5511984939921",   // 55 + DDD + número, só dígitos
  mensagem: "Olá! Vim pelo site da AS Project e gostaria de um orçamento.\n\nServiço: \nCidade: ",
  cidade: "São Paulo - SP",                  // ex: "São Paulo e região"
  email: "alanbrito@asprojetsm.com",                   // ex: "contato@asproject.com.br"
  instagram: "https://www.instagram.com/alandbbrito?mdxt=cGRsYXQzb2s3eWdz",               // só o usuário, sem @. ex: "asproject"
  crea: ""                     // ex: "CREA-SP 0000000000"
};

/* =========================================================
   DAQUI PARA BAIXO NÃO PRECISA MEXER
   ========================================================= */

// Links de WhatsApp (todos os elementos com data-whatsapp)
const linkWhats = "https://wa.me/" + EMPRESA.whatsapp +
  "?text=" + encodeURIComponent(EMPRESA.mensagem);

document.querySelectorAll("[data-whatsapp]").forEach(function (el) {
  el.href = linkWhats;
});

// Dados de contato: só mostra o que estiver preenchido
function preencher(campo, texto, link) {
  const item = document.querySelector('[data-campo="' + campo + '"]');
  if (!item || !texto) return;

  if (link) {
    const a = document.createElement("a");
    a.href = link;
    a.textContent = texto;
    if (link.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
    item.appendChild(a);
  } else {
    item.textContent = texto;
  }
  item.hidden = false;
}

preencher("cidade", EMPRESA.cidade);
preencher("email", EMPRESA.email, EMPRESA.email && "mailto:" + EMPRESA.email);
preencher("instagram", EMPRESA.instagram && "@" + EMPRESA.instagram,
  EMPRESA.instagram && "https://instagram.com/" + EMPRESA.instagram);
preencher("crea", EMPRESA.crea);

// Menu do celular
const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav");

function fecharMenu() {
  menu.classList.remove("open");
  botaoMenu.setAttribute("aria-expanded", "false");
}

botaoMenu.addEventListener("click", function () {
  const aberto = menu.classList.toggle("open");
  botaoMenu.setAttribute("aria-expanded", aberto);
});

menu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", fecharMenu);
});

// Ano do rodapé
document.getElementById("ano").textContent = new Date().getFullYear();
