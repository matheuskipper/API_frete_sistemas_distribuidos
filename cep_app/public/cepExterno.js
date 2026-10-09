async function buscarEndereco() {
            const cep = document.getElementById('cep').value;
            const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await resposta.json();

            const div = document.getElementById('resultado');
            div.innerHTML = `
                <p><strong>CEP:</strong> ${data.cep}</p>
                <p><strong>Rua:</strong> ${data.logradouro}</p>
                <p><strong>Bairro:</strong> ${data.bairro}</p>
                <p><span><strong>Cidade:</strong> ${data.localidade}</span> 
                <span><strong>- Estado:</strong> ${data.uf}</span></p>
                
            `;

            const freteResp = await fetch('http://localhost:3001/calcular-frete', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ cidade: data.localidade, bairro: data.bairro })
            });
            
            const frete = await freteResp.json();
            div.innerHTML += `
                <p style="margin-top: 20px;"><strong>Frete:</strong> ${frete.mensagem}</p>
            `;
        }