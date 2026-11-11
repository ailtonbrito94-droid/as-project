/* =========================================================
   DADOS DA EMPRESA - EDITE SÓ AQUI
   Mude o que está entre aspas. Campo vazio ("") não aparece no site.
   ========================================================= */
const EMPRESA = {
  whatsapp: "5511984939921",
  mensagem: "Olá! Vim pelo site da AS Projetos e gostaria de um orçamento.\n\nServiço: \nCidade: ",
  cidade: "São Paulo - SP",
  email: "alanbrito@asprojetsm.com",
  instagram: "alandbbrito",
  crea: ""
};

const linkWhats = "https://wa.me/" + EMPRESA.whatsapp +
  "?text=" + encodeURIComponent(EMPRESA.mensagem);

document.querySelectorAll("[data-whatsapp]").forEach(function (el) {
  el.href = linkWhats;
});

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

document.getElementById("ano").textContent = new Date().getFullYear();
