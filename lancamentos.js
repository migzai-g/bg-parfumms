const produtosLancamentos = [
    { nome: "Asad Bourbon", imagem: "assets/decants/Asad_Bourbon.jpg", preco: "339,00" },
    { nome: "Asad Elixir", imagem: "assets/decants/Asad_Elixir.jpg", preco: "349,00" },
    { nome: "Liquid Brun", imagem: "assets/decants/Liquid_Brun.jpg", preco: "399,00" },
    { nome: "His Confession", imagem: "assets/decants/His_Confession.jpg", preco: "349,00" },
    { nome: "Habik", imagem: "assets/decants/Habik.webp", preco: "349,00" },
    { nome: "Club 6 Voyage", imagem: "assets/masculinos/Club_6.webp", preco: "149,00" }
];

function montarCardsProdutos() {
    const grid = document.querySelector(".produtos-grid");
    if (!grid) return;

    produtosLancamentos.forEach((produto) => {
        const marcaProduto = produto.marca || "";
        const detalhesProduto = produto.detalhes || ""; 
        const precoProduto = produto.preco || "Sob consulta";
        
        const imgHtml = produto.imagem 
            ? `<img src="${produto.imagem}" alt="Foto do frasco do perfume ${produto.nome}">` 
            : `<i class="fa-solid fa-flask placeholder-icone"></i>`;

        const card = document.createElement("a");
        card.href = "#"; 
        card.className = "produto-card";
        card.dataset.nome = produto.nome;

        card.innerHTML = `
            <div class="produto-card-corners"></div>
            
            <div class="produto-imagem">
                ${imgHtml}
            </div>

            <div class="produto-info-detalhada">
                ${marcaProduto ? `<span class="produto-brand">${marcaProduto}</span>` : ""}
                <h3 class="produto-name-large">${produto.nome}</h3>
                ${detalhesProduto ? `<span class="produto-details-italic">${detalhesProduto}</span>` : ""}
                
                <hr class="produto-divider">
                
                <span class="produto-price-label">PREÇO DE REFERÊNCIA</span>
                <div class="produto-price-new">
                    <span class="produto-currency">${produto.preco ? "R$" : ""}</span>
                    <span class="produto-price-value">${precoProduto}</span>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", montarCardsProdutos);