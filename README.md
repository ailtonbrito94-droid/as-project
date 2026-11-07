[style.css](https://github.com/user-attachments/files/34518802/style.css)
/* ===== PALETA (baseada no modelo) ===== */
:root {
  --vermelho: #C4000B;
  --vermelho-escuro: #9E0008;
  --cinza-escuro: #333333;
  --cinza-texto: #555555;
  --cinza-claro: #F2F2F2;
  --branco: #FFFFFF;
  --sombra: 0 6px 20px rgba(0, 0, 0, .08);
  --header-h: 72px;
}

/* ===== BASE ===== */
* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; scroll-padding-top: var(--header-h); }
body {
  font-family: 'Montserrat', sans-serif;
  color: var(--cinza-escuro);
  background: var(--branco);
  line-height: 1.6;
}
img { max-width: 100%; display: block; }
a { text-decoration: none; color: inherit; }
.container { width: 100%; max-width: 1140px; margin: 0 auto; padding: 0 20px; }

/* ===== BOTÕES ===== */
.btn {
  display: inline-block;
  background: var(--vermelho);
  color: var(--branco);
  padding: 14px 32px;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .5px;
  font-size: .9rem;
  transition: background .2s, transform .2s;
}
.btn:hover { background: var(--vermelho-escuro); transform: translateY(-2px); }
.btn--small { padding: 8px 18px; font-size: .75rem; }
.btn--white { background: var(--branco); color: var(--vermelho); }
.btn--white:hover { background: var(--cinza-claro); }

/* ===== CABEÇALHO ===== */
.header {
  position: fixed; top: 0; left: 0; right: 0;
  height: var(--header-h);
  background: var(--branco);
  border-bottom: 3px solid var(--vermelho);
  z-index: 100;
}
.header__inner {
  height: 100%;
  display: flex; align-items: center; justify-content: space-between;
}
.logo img { height: 48px; width: auto; }

.nav { display: flex; align-items: center; gap: 28px; }
.nav a:not(.btn) {
  font-size: .8rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--cinza-escuro);
  transition: color .2s;
}
.nav a:not(.btn):hover { color: var(--vermelho); }

.menu-toggle {
  display: none;
  background: none; border: none; cursor: pointer;
  flex-direction: column; gap: 5px;
}
.menu-toggle span {
  width: 26px; height: 3px; background: var(--cinza-escuro); border-radius: 2px;
}

/* ===== HERO ===== */
.hero {
  margin-top: var(--header-h);
  min-height: 85vh;
  display: flex; align-items: center;
  background:
    linear-gradient(rgba(196, 0, 11, .65), rgba(158, 0, 8, .78)),
    url("img/hero.jpg") center / cover no-repeat;
  color: var(--branco);
  text-align: center;
  padding: 80px 0 140px;
  position: relative;
}
/* curva vermelha na base */
.hero::after {
  content: "";
  position: absolute; left: 0; right: 0; bottom: 0;
  height: 90px;
  background: var(--vermelho);
  clip-path: ellipse(75% 100% at 50% 100%);
}
.hero__content { position: relative; z-index: 1; }
.hero h1 {
  font-size: clamp(2.4rem, 7vw, 4.5rem);
  font-weight: 800;
  text-transform: uppercase;
  line-height: 1.1;
}
.hero__title {
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  font-weight: 600;
  margin: 10px 0;
}
.hero__subtitle {
  max-width: 620px;
  margin: 0 auto 30px;
  font-size: 1rem;
  opacity: .95;
}

/* ===== SEÇÕES ===== */
.section { padding: 80px 0; }
.section--gray { background: var(--cinza-claro); }
.section--red { background: var(--vermelho); color: var(--branco); text-align: center; }

.section__title {
  font-size: 2rem;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 12px;
}
.section__title::after {
  content: "";
  position: absolute; left: 0; bottom: 0;
  width: 60px; height: 4px;
  background: var(--vermelho);
}
.section__title--light::after { background: var(--branco); left: 50%; transform: translateX(-50%); }
.section__text { max-width: 760px; color: var(--cinza-texto); }

/* ===== CARDS DE SERVIÇOS ===== */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-top: 30px;
}
.card {
  background: var(--branco);
  padding: 30px 24px;
  border-radius: 6px;
  box-shadow: var(--sombra);
  border-top: 4px solid var(--vermelho);
  transition: transform .2s;
}
.card:hover { transform: translateY(-6px); }
.card__icon {
  width: 56px; height: 56px;
  display: grid; place-items: center;
  background: var(--vermelho);
  border-radius: 50%;
  font-size: 1.5rem;
  margin-bottom: 16px;
}
.card h3 { font-size: 1.1rem; margin-bottom: 8px; }
.card p { font-size: .92rem; color: var(--cinza-texto); }

/* ===== CONTATO ===== */
.contato p { margin-bottom: 24px; }
.contato__info {
  list-style: none;
  margin-top: 30px;
  display: flex; flex-wrap: wrap; justify-content: center; gap: 12px 32px;
  font-size: .95rem;
}

/* ===== RODAPÉ ===== */
.footer {
  background: var(--cinza-escuro);
  color: #ccc;
  text-align: center;
  padding: 20px 0;
  font-size: .85rem;
}

/* ===== WHATSAPP FLUTUANTE ===== */
.whatsapp-float {
  position: fixed; right: 20px; bottom: 20px;
  width: 58px; height: 58px;
  background: #25D366;
  border-radius: 50%;
  display: grid; place-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, .25);
  z-index: 200;
  transition: transform .2s;
}
.whatsapp-float:hover { transform: scale(1.08); }

/* ===== RESPONSIVO ===== */
@media (max-width: 820px) {
  .menu-toggle { display: flex; }
  .nav {
    position: absolute; top: var(--header-h); left: 0; right: 0;
    background: var(--branco);
    flex-direction: column; gap: 0;
    border-bottom: 3px solid var(--vermelho);
    max-height: 0; overflow: hidden;
    transition: max-height .3s ease;
  }
  .nav.open { max-height: 400px; }
  .nav a { width: 100%; text-align: center; padding: 14px 0; }
  .nav .btn { width: auto; margin: 10px 0 16px; }
  .hero { min-height: 75vh; }
  .section { padding: 60px 0; }
  .section__title { font-size: 1.6rem; }
}
