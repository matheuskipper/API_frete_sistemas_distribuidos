const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/calcular-frete', (req, res) => {
    const {cidade, bairro} = req.body;

    if (cidade.toLowerCase() !== 'porto alegre'){
        return res.json({mensagem: 'Não entregamos na sua cidade'})
    }

    const bairrosGratis = [
        'sarandi',
        'rubem berta',
        'jardim lindóia',
        'passo das pedras'
    ];

    const bairroLower = bairro.toLowerCase().trim();
    console.log(bairroLower);

    if (bairrosGratis.includes(bairroLower)) {
        return res.json({mensagem: 'Grátis!'})
    }
    return res.json({mensagem: 'R$20,00'});
    
})

app.listen(PORT, () => {
    console.log(`API de frete rodando em http://localhost:${PORT}`);
});