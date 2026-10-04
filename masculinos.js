const produtosMasculinos = [
    { nome: "Salvo", imagem: "assets/masculinos/Salvo.jpg", preco: "249,00" },
    { nome: "Opulent Dubai", imagem: "assets/masculinos/Opulent_Dubai.jpg", preco: "249,00" },
    { nome: "Habik", imagem: "assets/masculinos/Habik.webp", preco: "349,00" },
    { nome: "Alpine Homme Sport", imagem: "assets/masculinos/Alpine_Homme_Sport.jpg", preco: "275,00" },
    { nome: "Fakhar Black", imagem: "assets/masculinos/Fakhar_Black.webp", preco: "279,00" },
    { nome: "Fakhar Platinum", imagem: "assets/masculinos/Fakhar_Platinum.jfif", preco: "279,00" },
    { nome: "Club 6 Voyage", imagem: "assets/masculinos/Club_6.webp", preco: "149,00" },
    { nome: "His Confession", imagem: "assets/masculinos/His_Confession.jpg", preco: "349,00" },
    { nome: "Pisa", imagem: "assets/masculinos/Pisa.jpg", preco: "369,00" },
    { nome: "World Cup", imagem: "assets/masculinos/World_Cup.jpg", preco: "599,00" },
    { nome: "Liquid Brun", imagem: "assets/masculinos/Liquid_Brun.jpg", preco: "399,00" },
    { nome: "Khamrah Qahwa", imagem: "assets/masculinos/Khamrah_Qahwa.webp", preco: "249,00" },
    { nome: "Spectre Ghost", imagem: "assets/masculinos/Ghost.webp", preco: "379,00" },
    { nome: "Attar Al Wesal", imagem: "assets/masculinos/Attar_Al_Wesal.jpg", preco: "248,00" },
    { nome: "Club de Nuit", imagem: "assets/masculinos/Club_de_Nuit.jpg", preco: "349,00" },
    { nome: "Qaed Al Fursan", imagem: "assets/masculinos/Qaed_Al_Fursan.jpg", preco: "249,00" },
    { nome: "Asad", imagem: "assets/masculinos/Asad.jpg", preco: "279,00" },
    { nome: "Asad Bourbon", imagem: "assets/masculinos/Asad_Bourbon.jpg", preco: "339,00" },
    { nome: "Asad Elixir", imagem: "assets/masculinos/Asad_Elixir.jpg", preco: "349,00" },
    { nome: "Qaed Al Fursan Unlimited", imagem: "assets/decants/Qaed_Al_Fursan_Unlimited.jpg", preco: "249,00" },
    { nome: "Rayhaan Elixir", imagem: "assets/masculinos/Rayhaan.jpg", preco: "319,00" },
    { nome: "Eqaab", imagem: "assets/masculinos/Elixir_Eqaab.png", preco: "249,00" },
    { nome: "Fakhar Gold", imagem: "assets/masculinos/Fakhar_Gold.webp", preco: "279,00" },
    { nome: "Bade Al Oud Amethyst", imagem: "assets/Badee-Al-Oud-Amethyst-1.webp", preco: "299,00" },
    { nome: "Honor & Glory", imagem: "assets/honorandglory.webp", preco: "299,00" },
    { nome: "Al Noble Ameer", imagem: "assets/masculinos/Al_Noble_Ameer.webp", preco: "249,00" },
    { nome: "Khamrah Waha", imagem: "assets/masculinos/Khamrah_Waha.jpg", preco: "399,00" },
    { nome: "Mishlah", imagem: "assets/masculinos/Mishlah.webp", preco: "249,00" },
    { nome: "No.2 Men", imagem: "assets/masculinos/No2_Men.webp", preco: "279,00" },
    { nome: "Cebolinha", imagem: "assets/masculinos/Cebola.jpg", preco: "39,00" }
];

function montarCardsProdutos() {
    const grid = document.querySelector(".produtos-grid");
    if (!grid) return;

    produtosMasculinos.forEach((produto) => {
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