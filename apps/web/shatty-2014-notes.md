# Shatty 2014 — observações para reprodução fiel

## Decisões nesta primeira reconstrução
- **Balões em CSS**: implementados com `border-radius` + pseudo-elemento triangular (`::before`).
- **Estrutura visual**: shell de celular, topo escuro, barra verde de rota, tabs em fundo verde claro, lista de mensagens com separadores pontilhados, barra inferior escura.
- **Cores**: aproximadas por inspeção visual manual da imagem de referência.

## O que investigar para ficar "fullest possible"
1. **Fonte original**
   - A captura parece usar uma fonte sans antiga estilo Android 4.x/5.x.
2. **Ícones da tab bar superior**
   - Forte chance de set de fonte de ícones tipo **IcoMoon/Fontello** pela estética linear e época (2014).
   - Próximo passo: comparar os glifos com pacotes legados (`icomoon-free`, `font-awesome 3/4`, `typicons`).
3. **Top bar brand icons (esferas roxas)**
   - Possível sprite PNG + glow, não necessariamente fonte de ícone.
4. **Balões SVG vs CSS**
   - CSS entrega rápido e leve para app legado.
   - SVG ajuda se quisermos pixel parity com curvas específicas e sombras internas.

## Próximo upgrade sugerido
- Criar versão **pixel-parity** com:
  - escala baseada em grid da imagem original,
  - uso de fonte web próxima à original,
  - assets dedicados para os ícones superiores e nav inferior.
