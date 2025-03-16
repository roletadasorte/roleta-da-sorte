let moedas = 0; // Número de moedas do usuário

// Função para gerar roleta e girar
function criarRoleta() {
    const canvas = document.getElementById('roleta');
    const ctx = canvas.getContext('2d');
    const segmentos = 10; // 10 segmentos na roleta
    const anguloSegmento = 360 / segmentos;
    
    // Definir cores da roleta
    const cores = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#F5A623', '#F56A23', '#A1FF33', '#33FFCC', '#6B33FF', '#FF5733'];

    // Desenhar a roleta
    for (let i = 0; i < segmentos; i++) {
        ctx.beginPath();
        ctx.moveTo(200, 200); // Centro da roleta
        ctx.arc(200, 200, 180, (i * anguloSegmento) * Math.PI / 180, ((i + 1) * anguloSegmento) * Math.PI / 180);
        ctx.fillStyle = cores[i];
        ctx.fill();
    }

    // Desenhar o ponteiro
    ctx.beginPath();
    ctx.moveTo(200, 20);
    ctx.lineTo(200, 0);
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#000';
    ctx.stroke();
}

// Função para girar a roleta
function girarRoleta() {
    if (moedas < 5) {
        alert('Você precisa de pelo menos 5 moedas para girar!');
        return;
    }

    moedas -= 5; // Deduzir 5 moedas a cada giro
    document.getElementById('moedas').innerText = `Você tem ${moedas} moedas.`;

    const resultado = Math.floor(Math.random() * 500); // Resultado entre 0 e 500
    document.getElementById('resultado').innerText = `Resultado: ${resultado} moedas`;

    // A cada giro, o usuário ganha o valor do prêmio (exemplo simples)
    moedas += resultado;
    document.getElementById('moedas').innerText = `Você tem ${moedas} moedas.`;
}

// Função para atualizar o QR Code
function atualizarQRCode() {
    const qrcodeElement = document.getElementById('qrcode');
    qrcodeElement.src = "QR_CODE_URL_AQUI"; // Substitua com o seu QR Code
}

criarRoleta(); // Inicializa a roleta ao carregar a página
