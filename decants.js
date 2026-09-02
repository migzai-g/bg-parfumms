

const produtosDecants = [
    { nome: "La Vie Est Belle", imagem: "assets/decants/La_Vie_Est_Belle.webp" },
    { nome: "Ultra Male", imagem: "assets/decants/Ultra_Male.webp" },
    { nome: "Le Male Elixir", imagem: "assets/decants/Le_Male_Elixir.jpg" },
    { nome: "Le Beau Le Parfum", imagem: "assets/decants/Le_Beau_Le_Parfum.jfif" },
    { nome: "212 VIP Black", imagem: "assets/decants/212_VIP_Black.webp" },
    { nome: "212 Elixir", imagem: "assets/decants/212_Elixir.webp" },
    { nome: "212 VIP Rosé", imagem: "assets/decants/212_VIP_Rosé.jpg" },

    { nome: "Bade Al Oud Amethyst", imagem: "assets/decants/Badee-Al-Oud-Amethyst-1.webp"},
    { nome: "Honor & Glory", imagem: "assets/decants/honorandglory.webp" },
    { nome: "Fakhar Rose", imagem: "assets/decants/j0l66.jpg" },
    { nome: "Sabah Al Ward", imagem: "assets/decants/sabahalward.webp"},
    { nome: "Durrat Love", imagem: "assets/decants/durratlove.webp" },
    { nome: "Durrat Al Aroos", imagem: "assets/decants/durratalaroos.png" },
    { nome: "Shagaf Al Ward", imagem: "assets/decants/shagaf.webp" },
    { nome: "Sabah Sugar", imagem: "assets/decants/sabahsugar.jpg" },
    { nome: "Eclaire", imagem: "assets/decants/eclaire.jpg" },
    { nome: "Sisterland Yum Yum", imagem: "assets/decants/yumyum.webp" },
    { nome: "Sabah Delilah", imagem: "assets/decants/sabahdelilah.webp" },
    { nome: "Yara", imagem: "assets/decants/yara.jpg" },
    { nome: "Yara Candy", imagem: "assets/decants/yaracandy.webp" },
    { nome: "Yara Elixir", imagem: "assets/decants/yara1.jpg" },
    { nome: "Marshmallow Blush", imagem: "assets/decants/marshmallow.jpg" },

    { nome: "Salvo", imagem: "assets/decants/Salvo.jpg" },
    { nome: "Opulent Dubai", imagem: "assets/decants/Opulent_Dubai.jpg" },
    { nome: "Habik", imagem: "assets/decants/Habik.webp" },
    { nome: "Alpine Homme Sport", imagem: "assets/decants/Alpine_Homme_Sport.jpg" },
    { nome: "Fakhar Black", imagem: "assets/decants/Fakhar_Black.webp" },
    { nome: "Fakhar Platinum", imagem: "assets/decants/Fakhar_Platinum.jpg" },
    { nome: "Club 6 Voyage", imagem: "assets/masculinos/Club_6.webp" },
    { nome: "Ameerati", imagem: "assets/decants/Ameerati.jpg" },
    { nome: "His Confession", imagem: "assets/decants/His_Confession.jpg" },
    { nome: "Pisa", imagem: "assets/decants/Pisa.jpg" },
    { nome: "World Cup", imagem: "assets/decants/World_Cup.jpg" },
    { nome: "Khamrah Qahwa", imagem: "assets/decants/Khamrah_Qahwa.webp" },
    { nome: "Spectre", imagem: "assets/decants/Spectre.jpg" },
    { nome: "Ghost", imagem: "assets/decants/Ghost.webp" },
    { nome: "Attar Al Wesal", imagem: "assets/decants/Attar_Al_Wesal.jpg" },
    { nome: "Club de Nuit", imagem: "assets/decants/Club_de_Nuit.jpg" },
    { nome: "Qaed Al Fursan", imagem: "assets/masculinos/Qaed_Al_Fursan.jpg" },
    { nome: "Asad", imagem: "assets/decants/Asad.jpg" },
    { nome: "Asad Bourbon", imagem: "assets/decants/Asad_Bourbon.jpg" },
    { nome: "Asad Elixir", imagem: "assets/decants/Asad_Elixir.jpg" },
    { nome: "Qaed Al Fursan Unlimited", imagem: "assets/decants/Qaed_Al_Fursan_Unlimited.jpg" },
    { nome: "Rayhaan Elixir", imagem: "assets/masculinos/Rayhaan.jpg" },
    { nome: "Eqaab", imagem: "assets/masculinos/Elixir_Eqaab.png" },
    { nome: "Fakhar Gold", imagem: "assets/decants/Fakhar_Gold.webp" },
    { nome: "Cebolinha", imagem: "assets/masculinos/Cebola.jpg" }
    

];

function montarCardsProdutos() {
    const grid = document.querySelector(".produtos-grid");
    if (!grid) return;

    produtosDecants.forEach((produto) => {
        const card = document.createElement("a");
        card.href = "#";
        card.className = "produto-card";
        card.dataset.nome = produto.nome;

        const imagemContainer = document.createElement("div");
        imagemContainer.className = "produto-imagem";

        if (produto.imagem) {
            const img = document.createElement("img");
            img.src = produto.imagem;
            img.alt = `Foto do frasco do perfume ${produto.nome}`;
            imagemContainer.appendChild(img);
        } else {
            const placeholder = document.createElement("i");
            placeholder.className = "fa-solid fa-flask placeholder-icone";
            imagemContainer.appendChild(placeholder);
        }

        const nome = document.createElement("span");
        nome.className = "produto-nome";
        nome.textContent = produto.nome;

        card.appendChild(imagemContainer);
        card.appendChild(nome);

        if (produto.obs) {
            const obs = document.createElement("span");
            obs.className = "produto-obs";
            obs.textContent = produto.obs;
            card.appendChild(obs);
        }

        grid.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", montarCardsProdutos);