const produtosFemininos = [
    { nome: "Bade Al Oud Amethyst", imagem: "assets/Badee-Al-Oud-Amethyst-1.webp", preco: "299,00" },
    { nome: "Honor & Glory", imagem: "assets/honorandglory.webp", preco: "299,00" },
    { nome: "Fakhar Rose", imagem: "assets/j0l66.jpg", preco: "279,00" },
    { nome: "Sabah Al Ward", imagem: "assets/sabahalward.webp", preco: "249,00" },
    { nome: "Durrat Love", imagem: "assets/durratlove.webp", preco: "349,00" },
    { nome: "Durrat Al Aroos", imagem: "assets/durratalaroos.png", preco: "249,00" },
    { nome: "Shagaf Al Ward", imagem: "assets/shagaf.webp", preco: "248,00" },
    { nome: "Sabah Sugar", imagem: "assets/sabahsugar.jpg", preco: "249,00" },
    { nome: "Eclaire", imagem: "assets/eclaire.jpg", preco: "289,00" },
    { nome: "Sisterland Yum Yum", imagem: "assets/yumyum.webp", preco: "349,00" },
    { nome: "Sabah Delilah", imagem: "assets/sabahdelilah.webp", preco: "349,00" },
    { nome: "Yara", imagem: "assets/yara.jpg", preco: "279,00" },
    { nome: "Yara Candy", imagem: "assets/yaracandy.webp", preco: "249,00" },
    { nome: "Yara Elixir", imagem: "assets/yara1.jpg", preco: "349,00" },
    { nome: "Marshmallow Blush", imagem: "assets/marshmallow.jpg", preco: "339,00" }
];

function montarCardsProdutos() {
    const grid = document.querySelector(".produtos-grid");
    if (!grid) return;

    produtosFemininos.forEach((produto) => {
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