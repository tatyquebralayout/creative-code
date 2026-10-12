/*
 * pausa.js · botão de pausar/continuar das peças da galeria creative code
 * Pause/play button for the pieces in the creative code gallery
 * Tatiana Barros · MIT
 *
 * - Um botão de 44 x 44 px no canto inferior direito, com ícone em SVG e
 *   aria-label que troca entre pausar e tocar. A barra de espaço também pausa.
 *   A 44 x 44 px button in the bottom-right corner, SVG icon, aria-label that
 *   switches between pause and play. The Space bar toggles it too.
 * - Quem ativou "reduzir movimento" no sistema abre a peça já pausada, com o
 *   primeiro quadro desenhado, e pode apertar "Continuar" se quiser.
 *   With "reduce motion" on, the piece opens paused (first frame drawn) and
 *   can be started with "Play".
 *
 * Adaptadores · adapters:
 *   p5.js     inclua este arquivo depois do p5 e antes do sketch: é automático
 *             (usa noLoop()/loop()).
 *             Include after p5 and before the sketch: nothing else to do.
 *   Canvas    Pausa.laco(quadro)            -> requestAnimationFrame
 *   three.js  Pausa.three(renderer, quadro) -> renderer.setAnimationLoop()
 *   Outros    Pausa.controlar({ aoPausar, aoContinuar })
 */
(function () {
  'use strict';

  var TEXTO_PAUSAR = 'Pausar animação · Pause animation';
  var TEXTO_TOCAR = 'Tocar animação · Play animation';
  var SVG = 'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"';
  var ICONE_PAUSAR = '<svg ' + SVG + '><rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor"/>' +
    '<rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor"/></svg>';
  var ICONE_TOCAR = '<svg ' + SVG + '><path d="M8 5.5v13a.5.5 0 0 0 .77.42l10-6.5a.5.5 0 0 0 0-.84l-10-6.5A.5.5 0 0 0 8 5.5z" fill="currentColor"/></svg>';

  var reduzir = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  var raiz = document.documentElement;
  raiz.classList.add('pausa-pronto');

  var CSS =
    '.pausa-botao{position:fixed;right:16px;bottom:16px;z-index:2147483000;box-sizing:border-box;width:44px;height:44px;' +
    'display:flex;align-items:center;justify-content:center;margin:0;padding:0;border:0;border-radius:50%;' +
    'background:rgba(17,17,17,.8);color:#c9a227;cursor:pointer;-webkit-appearance:none;appearance:none;}' +
    '.pausa-botao svg{display:block;pointer-events:none;}' +
    '.pausa-botao:focus{outline:none;}' +
    '.pausa-botao:focus-visible{outline:2px solid #c9a227;outline-offset:2px;}' +
    '@media (forced-colors: active){.pausa-botao{border:1px solid ButtonText;color:ButtonText;}}' +
    '@media print{.pausa-botao{display:none;}}';

  function injetarCss() {
    if (document.getElementById('pausa-estilo')) return;
    var s = document.createElement('style');
    s.id = 'pausa-estilo';
    s.textContent = CSS;
    (document.head || raiz).appendChild(s);
  }

  function quandoPronto(fn) {
    if (document.body) fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  /**
   * Cria o botão e devolve o controle { pausado, pausar(), continuar(), alternar() }.
   * opcoes.aoPausar / opcoes.aoContinuar: chamadas a cada troca de estado.
   * opcoes.iniciarPausado: padrão = preferência "reduzir movimento".
   */
  function controlar(opcoes) {
    opcoes = opcoes || {};
    var pausado = opcoes.iniciarPausado != null ? !!opcoes.iniciarPausado : reduzir.matches;
    var botao;

    var ctrl = {
      get pausado() { return pausado; },
      pausar: function () { definir(true); },
      continuar: function () { definir(false); },
      alternar: function () { definir(!pausado); }
    };

    function atualizarBotao() {
      raiz.classList.toggle('pausa-pausado', pausado);
      if (!botao) return;
      var rotulo = pausado ? TEXTO_TOCAR : TEXTO_PAUSAR;
      botao.setAttribute('aria-label', rotulo);
      botao.title = rotulo;
      botao.innerHTML = pausado ? ICONE_TOCAR : ICONE_PAUSAR;
    }

    function definir(valor) {
      if (valor === pausado) return;
      pausado = valor;
      atualizarBotao();
      if (pausado) { if (opcoes.aoPausar) opcoes.aoPausar(); }
      else if (opcoes.aoContinuar) opcoes.aoContinuar();
    }

    quandoPronto(function () {
      injetarCss();
      botao = document.createElement('button');
      botao.type = 'button';
      botao.className = 'pausa-botao';
      botao.addEventListener('click', function (e) { e.stopPropagation(); ctrl.alternar(); });
      // não deixa o clique no botão virar interação com a peça (p5 escuta mouse na janela)
      ['mousedown', 'mouseup', 'pointerdown', 'pointerup', 'touchstart', 'touchend'].forEach(function (ev) {
        botao.addEventListener(ev, function (e) { e.stopPropagation(); });
      });
      document.body.appendChild(botao);
      atualizarBotao();
    });
    atualizarBotao();

    // Barra de espaço alterna pausa, a menos que o foco esteja num campo ou controle que usa o espaço.
    document.addEventListener('keydown', function (e) {
      if (e.code !== 'Space' && e.key !== ' ') return;
      if (e.repeat || e.altKey || e.ctrlKey || e.metaKey || e.defaultPrevented) return;
      if (usaEspaco(e.target)) return;
      e.preventDefault();
      ctrl.alternar();
    });

    // Se a pessoa ligar "reduzir movimento" com a peça aberta, ela pausa.
    var aoMudarPreferencia = function (e) { if (e.matches) ctrl.pausar(); };
    if (reduzir.addEventListener) reduzir.addEventListener('change', aoMudarPreferencia);
    else if (reduzir.addListener) reduzir.addListener(aoMudarPreferencia);

    return ctrl;
  }

  function usaEspaco(el) {
    if (!el || el === document.body || el === document.documentElement) return false;
    if (el.isContentEditable) return true;
    var tag = el.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || tag === 'BUTTON' || tag === 'A' ||
        tag === 'SUMMARY' || tag === 'AUDIO' || tag === 'VIDEO' || tag === 'IFRAME') return true;
    var papel = el.getAttribute && el.getAttribute('role');
    return !!papel && /^(button|checkbox|radio|switch|slider|spinbutton|textbox|combobox|listbox|option|menuitem|menuitemcheckbox|menuitemradio|tab|link|treeitem|gridcell)$/.test(papel);
  }

  /** Laço com requestAnimationFrame. quadro() atualiza e desenha um quadro. */
  function laco(quadro, opcoes) {
    opcoes = opcoes || {};
    var id = null;
    function passo() { id = null; quadro(); if (!ctrl.pausado) id = requestAnimationFrame(passo); }
    var ctrl = controlar({
      iniciarPausado: opcoes.iniciarPausado,
      aoPausar: function () { if (id !== null) { cancelAnimationFrame(id); id = null; } },
      aoContinuar: function () { if (id === null) id = requestAnimationFrame(passo); }
    });
    // Sempre desenha o primeiro quadro, para a tela nunca ficar vazia.
    passo();
    return ctrl;
  }

  /** three.js: liga e desliga renderer.setAnimationLoop(). */
  function three(renderer, quadro, opcoes) {
    opcoes = opcoes || {};
    var ctrl = controlar({
      iniciarPausado: opcoes.iniciarPausado,
      aoPausar: function () { renderer.setAnimationLoop(null); },
      aoContinuar: function () { renderer.setAnimationLoop(quadro); }
    });
    if (ctrl.pausado) quadro(); // um quadro parado, para a tela não ficar vazia
    else renderer.setAnimationLoop(quadro);
    return ctrl;
  }

  /** p5.js (modo global ou instância): automático via registerMethod. */
  function instalarP5() {
    var P5 = window.p5;
    if (!P5 || !P5.prototype || !P5.prototype.registerMethod || P5.__pausaInstalada) return;
    P5.__pausaInstalada = true;
    P5.prototype.registerMethod('init', function () {
      var inst = this;
      var primeiroQuadro = true;
      inst._pausa = controlar({
        aoPausar: function () { inst.noLoop(); },
        aoContinuar: function () { inst.loop(); }
      });
      inst.registerMethod('post', function () {
        if (!primeiroQuadro) return;
        primeiroQuadro = false;
        // o primeiro quadro já foi desenhado; se começa pausado, para aqui
        if (inst._pausa.pausado) inst.noLoop();
      });
    });
  }

  window.Pausa = { controlar: controlar, laco: laco, three: three, reduzirMovimento: reduzir };
  instalarP5();
})();
