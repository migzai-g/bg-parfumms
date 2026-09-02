

document.addEventListener("DOMContentLoaded", () => {
  const searchContainer = document.querySelector(".search-container");
  const searchInput = document.querySelector(".search-container input");
  if (!searchContainer || !searchInput) return;

  let produtos = [];

  fetch("produtos.json")
    .then((res) => res.json())
    .then((data) => {
      produtos = data;
      aplicarBuscaDaUrl();
    })
    .catch((err) => console.error("Não foi possível carregar produtos.json:", err));

  
  function normalizar(texto) {
    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  }

  const grid = document.querySelector(".produtos-grid");

  
  function filtrarGrade(termo) {
    if (!grid) return;
    const termoNormalizado = normalizar(termo);
    const cards = grid.querySelectorAll(".produto-card");

    cards.forEach((card) => {
      const nomeCard = normalizar(card.dataset.nome || card.textContent);
      const combina = termoNormalizado === "" || nomeCard.includes(termoNormalizado);
      card.classList.toggle("produto-escondido", !combina);
    });
  }

  const inputBusca = document.querySelector('.search-container input');
const btnLimpar = document.querySelector('.btn-limpar-busca'); // O ícone de 'X' ou limpar

// PRA LIMPAR AS BUSCAS QUANDO CLICA EM X
if (btnLimpar) {
    btnLimpar.addEventListener('click', function() {
        // Limpa o input e esconde o botão X
        searchInput.value = '';
        btnLimpar.classList.remove('visivel');

        // Volta os produtos na tela (se estiver em uma página de produtos)
        if (grid) {
            const todosOsCards = document.querySelectorAll('.produto-card');
            todosOsCards.forEach(card => {
                card.classList.remove('produto-escondido');
            });
        }
        
        // ---> CÓDIGO NOVO PARA ESCONDER A LISTA DE NOMES <---
        if (dropdown) {
            dropdown.classList.remove('visivel');
            dropdown.innerHTML = '';
        }

        searchInput.focus();
    });
  }
  
  let dropdown = null;

  function criarDropdown() {
    if (dropdown) return dropdown;
    dropdown = document.createElement("div");
    dropdown.className = "busca-dropdown";
    searchContainer.appendChild(dropdown);
    return dropdown;
  }

  function mostrarSugestoes(termo) {
    const dd = criarDropdown();
    const termoNormalizado = normalizar(termo);

    if (termoNormalizado === "") {
      dd.classList.remove("visivel");
      dd.innerHTML = "";
      return;
    }

    const resultados = produtos
      .filter((p) => normalizar(p.nome).includes(termoNormalizado))
      .slice(0, 8);

    dd.innerHTML = "";

    if (resultados.length === 0) {
      const vazio = document.createElement("div");
      vazio.className = "busca-dropdown-vazio";
      vazio.textContent = "Nenhum perfume encontrado.";
      dd.appendChild(vazio);
    } else {
      resultados.forEach((produto) => {
        const item = document.createElement("a");
        item.className = "busca-dropdown-item";
        item.href = `${produto.pagina}?produto=${encodeURIComponent(produto.nome)}`;
        item.innerHTML = `
          <span class="busca-dropdown-nome">${produto.nome}</span>
          <span class="busca-dropdown-categoria">${produto.categoria}</span>
        `;
        dd.appendChild(item);
      });
    }

    dd.classList.add("visivel");
  }

  // fecha o dropdown se clicar fora dele
  document.addEventListener("click", (e) => {
    if (dropdown && !searchContainer.contains(e.target)) {
      dropdown.classList.remove("visivel");
    }
  });

  
  searchInput.addEventListener("input", () => {
    const termo = searchInput.value;
    if (grid) {
      filtrarGrade(termo);
    } else {
      mostrarSugestoes(termo);
    }
  });

  searchInput.addEventListener("focus", () => {
    if (!grid && searchInput.value.trim() !== "") {
      mostrarSugestoes(searchInput.value);
    }
  });

  
  function aplicarBuscaDaUrl() {
    const params = new URLSearchParams(window.location.search);
    const nomeProduto = params.get("produto");
    if (!nomeProduto || !grid) return;

    searchInput.value = nomeProduto;
    filtrarGrade(nomeProduto);

    
    const termoNormalizado = normalizar(nomeProduto);
    const cardEncontrado = Array.from(grid.querySelectorAll(".produto-card")).find(
      (card) => normalizar(card.dataset.nome || "") === termoNormalizado
    );

    if (cardEncontrado) {
      setTimeout(() => {
        cardEncontrado.scrollIntoView({ behavior: "smooth", block: "center" });
        cardEncontrado.classList.add("produto-destaque");
        setTimeout(() => cardEncontrado.classList.remove("produto-destaque"), 2000);
      }, 150);
    }
  }
});


