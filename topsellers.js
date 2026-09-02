const produtostopsellers = [
    { nome: "Cebolinha", imagem: "assets/masculinos/Cebola.jpg", preco: "39,00" },
    { nome: "Le Male Elixir", imagem: "assets/decants/Le_Male_Elixir.jpg" },
    { nome: "Ultra Male", imagem: "assets/decants/Ultra_Male.webp" },
    { nome: "La Vie Est Belle", imagem: "assets/decants/La_Vie_Est_Belle.webp" },
    { nome: "Club de Nuit", imagem: "assets/masculinos/Club_de_Nuit.jpg", preco: "349,00" }
];

function montarCardsProdutos() {
    const grid = document.querySelector(".produtos-grid");
    if (!grid) return;

    produtostopsellers.forEach((produto) => {
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