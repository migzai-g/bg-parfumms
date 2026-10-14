const produtosDecants = [
    { nome: "Opulent Dubai", imagem: "assets/decants-5ml/opulent-dubai.jpg", detalhes: "Decant 5ml", preco: "29,99" },
    { nome: "Royal Amber", imagem: "assets/decants-5ml/royal-amber.jpg", detalhes: "Decant 5ml", preco: "54,99" },
    { nome: "Fakhar Black", imagem: "assets/decants-5ml/fakhar-black.jpg", detalhes: "Decant 5ml", preco: "34,99" },
    { nome: "Bade'e Al Oud Amethyst", imagem: "assets/decants-5ml/bade-al-oud-amethyst.jpg", detalhes: "Decant 5ml", preco: "34,99" },
    { nome: "Bade'e Al Oud Honor & Glory", imagem: "assets/decants-5ml/bade-al-oud-honor-glory.jpg", detalhes: "Decant 5ml", preco: "34,99" },
    { nome: "Habik", imagem: "assets/decants-5ml/habik.jpg", detalhes: "Decant 5ml", preco: "39,99" },
    { nome: "Alpine Homme Sport", imagem: "assets/decants-5ml/alpine-homme-sport.jpg", detalhes: "Decant 5ml", preco: "29,99" },
    { nome: "Fakhar Platin", imagem: "assets/decants-5ml/fakhar-platin.jpg", detalhes: "Decant 5ml", preco: "34,99" },
    { nome: "Fakhar Gold", imagem: "assets/decants-5ml/fakhar-gold.jpg", detalhes: "Decant 5ml", preco: "34,99" },
    { nome: "Fakhar Rose", imagem: "assets/decants-5ml/fakhar-rose.jpg", detalhes: "Decant 5ml", preco: "34,99" },
    { nome: "Mishlah", imagem: "assets/decants-5ml/mishlah.jpg", detalhes: "Decant 5ml", preco: "34,99" },
    { nome: "Sabah Al Ward", imagem: "assets/decants-5ml/sabah-al-ward.jpg", detalhes: "Decant 5ml", preco: "29,99" },
    { nome: "Durrat Love", imagem: "assets/decants-5ml/durrat-love.jpg", detalhes: "Decant 5ml", preco: "39,99" },
    { nome: "Sabah Delilah", imagem: "assets/decants-5ml/sabah-delilah.jpg", detalhes: "Decant 5ml", preco: "39,99" },
    { nome: "Marshmallow Blush", imagem: "assets/decants-5ml/marshmallow-blush.jpg", detalhes: "Decant 5ml", preco: "39,99" },
    { nome: "Ameerati", imagem: "assets/decants-5ml/ameerati.jpg", detalhes: "Decant 5ml", preco: "29,99" },
    { nome: "Eclaire", imagem: "assets/decants-5ml/eclaire.jpg", detalhes: "Decant 5ml", preco: "34,99" },
    { nome: "Sabah Sugar", imagem: "assets/decants-5ml/sabah-sugar.jpg", detalhes: "Decant 5ml", preco: "29,99" },
    { nome: "Durrat Al Aroos", imagem: "assets/decants-5ml/durrat-al-aroos.jpg", detalhes: "Decant 5ml", preco: "29,99" },
    { nome: "Shagaf Al Ward", imagem: "assets/decants-5ml/shagaf-al-ward.jpg", detalhes: "Decant 5ml", preco: "29,99" },
    { nome: "His Confession", imagem: "assets/decants-5ml/his-confession.jpg", detalhes: "Decant 5ml", preco: "39,99" },
    { nome: "Yum Yum", imagem: "assets/decants-5ml/yum-yum.jpg", detalhes: "Decant 5ml", preco: "44,99" },
    { nome: "Pisa", imagem: "assets/decants-5ml/pisa.jpg", detalhes: "Decant 5ml", preco: "44,99" },
    { nome: "Eqaab", imagem: "assets/decants-5ml/eqaab.jpg", detalhes: "Decant 5ml", preco: "29,99" },
    { nome: "Attar Al Wesal", imagem: "assets/decants-5ml/attar-al-wesal.jpg", detalhes: "Decant 5ml", preco: "29,99" },
    { nome: "Qaed Al Fursan Unlimited", imagem: "assets/decants-5ml/qaed-al-fursan-unlimited.jpg", detalhes: "Decant 5ml", preco: "29,99" },
    { nome: "Yara Candy", imagem: "assets/decants-5ml/yara-candy.jpg", detalhes: "Decant 5ml", preco: "29,99" },
    { nome: "Yara", imagem: "assets/decants-5ml/yara.jpg", detalhes: "Decant 5ml", preco: "29,99" },
    { nome: "Yara Elixir", imagem: "assets/decants-5ml/yara-elixir.jpg", detalhes: "Decant 5ml", preco: "39,99" },
    { nome: "Yara Moi", imagem: "assets/decants-5ml/yara-moi.jpg", detalhes: "Decant 5ml", preco: "29,99" },
    { nome: "Asad Elixir", imagem: "assets/decants-5ml/asad-elixir.jpg", detalhes: "Decant 5ml", preco: "39,99" },
    { nome: "Khamrah Qahwa", imagem: "assets/decants-5ml/khamrah-qahwa.jpg", detalhes: "Decant 5ml", preco: "34,99" },
    { nome: "Spectre Ghost", imagem: "assets/decants-5ml/spectre-ghost.jpg", detalhes: "Decant 5ml", preco: "44,99" },
    { nome: "No.2 Men", imagem: "assets/decants-5ml/no2-men.jpg", detalhes: "Decant 5ml", preco: "29,99" },
    { nome: "World Cup", imagem: "assets/decants-5ml/world-cup.jpg", detalhes: "Decant 5ml", preco: "54,99" }
];

function montarCardsProdutos() {
    const grid = document.querySelector(".produtos-grid");
    if (!grid) return;

    produtosDecants.forEach((produto) => {
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