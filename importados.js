const produtosImportados = [
    { nome: "La Vie Est Belle", imagem: "assets/importados/La_Vie_Est_Belle.webp" },
    { nome: "Ultra Male", imagem: "assets/importados/Ultra_Male.webp" },
    { nome: "Le Male Elixir", imagem: "assets/importados/Le_Male_Elixir.jpg" },
    { nome: "Le Beau Le Parfum", imagem: "assets/importados/Le_Beau_Le_Parfum.jpg" },
    { nome: "212 VIP Black", imagem: "assets/importados/212_VIP_Black.webp" },
    { nome: "212 Elixir", imagem: "assets/importados/212_Elixir.webp" },
    { nome: "212 VIP Rosé", imagem: "assets/importados/212_VIP_Rosé.jpg" }
];

function montarCardsProdutos() {
    const grid = document.querySelector(".produtos-grid");
    if (!grid) return;

    produtosImportados.forEach((produto) => {
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