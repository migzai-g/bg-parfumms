

document.addEventListener('DOMContentLoaded', () => {


  const header = document.querySelector('.header');
  const searchContainer = document.querySelector('.search-container');
  const menuCategorias = document.querySelector('.menu-categorias');


  const stickyWrapper = document.createElement('div');
  stickyWrapper.classList.add('sticky-wrapper');
  header.parentNode.insertBefore(stickyWrapper, header);
  stickyWrapper.appendChild(header);
  stickyWrapper.appendChild(searchContainer);
  stickyWrapper.appendChild(menuCategorias);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      stickyWrapper.classList.add('scrolled');
    } else {
      stickyWrapper.classList.remove('scrolled');
    }
  }, { passive: true });


  const btnMenu = document.querySelector('.btn-menu');
  const navMenu = document.querySelector('.menu-categorias');


  const overlay = document.createElement('div');
  overlay.classList.add('menu-overlay');
  document.body.appendChild(overlay);

  function abrirMenu() {
    navMenu.classList.add('menu-aberto');
    overlay.classList.add('ativo');
    document.body.classList.add('no-scroll');
    btnMenu.classList.remove('fa-bars');
    btnMenu.classList.add('fa-xmark');
    btnMenu.setAttribute('aria-expanded', 'true');
    btnMenu.setAttribute('aria-label', 'Fechar menu');
  }

  function fecharMenu() {
    navMenu.classList.remove('menu-aberto');
    overlay.classList.remove('ativo');
    document.body.classList.remove('no-scroll');
    btnMenu.classList.remove('fa-xmark');
    btnMenu.classList.add('fa-bars');
    btnMenu.setAttribute('aria-expanded', 'false');
    btnMenu.setAttribute('aria-label', 'Abrir menu');
  }

  btnMenu.setAttribute('role', 'button');
  btnMenu.setAttribute('tabindex', '0');
  btnMenu.setAttribute('aria-expanded', 'false');
  btnMenu.setAttribute('aria-label', 'Abrir menu');

  function alternarMenu() {
    navMenu.classList.contains('menu-aberto') ? fecharMenu() : abrirMenu();
  }

  btnMenu.addEventListener('click', alternarMenu);

  btnMenu.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      alternarMenu();
    }
  });

  overlay.addEventListener('click', fecharMenu);


  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', fecharMenu);
  });


  const navLinks = document.querySelectorAll('.menu-categorias a');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      navLinks.forEach(l => l.classList.remove('ativo'));
      link.classList.add('ativo');
    });
  });


  const searchInput = document.querySelector('.search-container input');
  const btnLimpar = document.createElement('i');
  btnLimpar.classList.add('fa-solid', 'fa-xmark', 'btn-limpar-busca');
  searchContainer.appendChild(btnLimpar);

  searchInput.addEventListener('input', () => {
    btnLimpar.classList.toggle('visivel', searchInput.value.length > 0);
  });

  btnLimpar.addEventListener('click', () => {
    searchInput.value = '';
    btnLimpar.classList.remove('visivel');
    searchInput.focus();
  });


  const revelaveis = document.querySelectorAll(
    '.categoria-card, .faixa-beneficios .beneficio, .hero-content, .rodape-topo, .rodape-links'
  );

  revelaveis.forEach((el, i) => {
    el.classList.add('reveal');
    // Delay escalonado nos cards da vitrine
    if (el.classList.contains('categoria-card')) {
      el.style.transitionDelay = `${i * 80}ms`;
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // anima só uma vez
      }
    });
  }, { threshold: 0.12 });

  revelaveis.forEach(el => observer.observe(el));


  const btnTopo = document.createElement('button');
  btnTopo.classList.add('btn-topo');
  btnTopo.setAttribute('aria-label', 'Voltar ao topo');
  btnTopo.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
  document.body.appendChild(btnTopo);

  window.addEventListener('scroll', () => {
    btnTopo.classList.toggle('visivel', window.scrollY > 400);
  }, { passive: true });

  btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-container input');
    const searchContainer = document.querySelector('.search-container');

    // 1. Cria o contêiner do dropdown de resultados
    const dropdown = document.createElement('div');
    dropdown.classList.add('busca-dropdown');
    searchContainer.appendChild(dropdown);

    let produtos = [];

    // 2. Carrega os dados do arquivo produtos.json
    // Certifique-se de que o JSON tenha formato: [{"nome": "Perfume X", "categoria": "Masculino", "link": "link.html"}]
    fetch('produtos.json')
        .then(response => response.json())
        .then(data => {
            produtos = data;
        })
        .catch(erro => console.error('Erro ao carregar o JSON de produtos:', erro));

    // 3. Ouve a digitação no campo de busca
    searchInput.addEventListener('input', (e) => {
        const termoBusca = e.target.value.toLowerCase().trim();

        if (termoBusca.length === 0) {
            dropdown.classList.remove('visivel');
            dropdown.innerHTML = '';
            return;
        }

        // Filtra os produtos baseados no que foi digitado
        const resultados = produtos.filter(produto => 
            produto.nome.toLowerCase().includes(termoBusca) || 
            produto.categoria.toLowerCase().includes(termoBusca)
        );

        renderizarResultados(resultados);
    });

    // 4. Monta os resultados na tela
    function renderizarResultados(resultados) {
        dropdown.innerHTML = ''; 

        if (resultados.length === 0) {
            dropdown.innerHTML = '<div class="busca-dropdown-vazio">Nenhum perfume encontrado.</div>';
        } else {
            resultados.forEach(produto => {
                const item = document.createElement('a');
                item.href = produto.link || '#'; 
                item.classList.add('busca-dropdown-item');
                
                item.innerHTML = `
                    <span class="busca-dropdown-nome">${produto.nome}</span>
                    <span class="busca-dropdown-categoria">${produto.categoria}</span>
                `;
                dropdown.appendChild(item);
            });
        }

        dropdown.classList.add('visivel');
    }

    // 5. Fecha o dropdown se clicar fora da barra de pesquisa
    document.addEventListener('click', (e) => {
        if (!searchContainer.contains(e.target)) {
            dropdown.classList.remove('visivel');
        }
    });
});
});