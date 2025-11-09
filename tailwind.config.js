tailwind.config = {
    theme: {
        extend: {
            colors: {
                // Destaques (Paleta Roxa Padronizada)
                // Mantemos 'roxo-primario' e 'roxo-claro-hover' para compatibilidade com style.css
                'roxo-primario': '#7116AA',
                'roxo-claro-hover': '#C084FC',
                
                // Mapeamento: As classes 'laranja' (usadas no HTML) agora usam a nova paleta roxa.
                'laranja-primario': '#7116AA',     // Novo destaque principal
                'laranja-claro-hover': '#C084FC',  // Novo destaque de hover
                
                // Cor Complementar (já com o valor do usuário)
                'cinza-complementar': '#424242', 
                
                // Fundos (já com os valores do usuário)
                'fundo-principal': '#121212', 
                'fundo-cards': '#212121',
                
                // Texto (já com os valores do usuário)
                'branco-suave': '#E0E0E0',
                'cinza-medio': '#BDBDBD',
                'cinza-escuro': '#757575',
            },
            fontFamily: {
                'titulos': ['Poppins', 'Montserrat', 'sans-serif'],
                'texto-corrido': ['Inter', 'Roboto', 'sans-serif'],
                'detalhes': ['Space Grotesk', 'monospace'],
            },
        }
    }
};