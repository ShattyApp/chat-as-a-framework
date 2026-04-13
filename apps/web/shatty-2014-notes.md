# Shatty 2014 — observações para reprodução fiel

## Versão v2 concluída (foco: histórico de conversas)
- **Sem molde de celular**: a composição agora representa diretamente a tela da página inicial de conversas, sem carcaça/shell de smartphone.
- **Semântica de tela inicial**: labels e `aria-labels` reforçam que este mock é de **histórico de conversas**, não de sala de chat em tempo real.
- **Pixel-parity por inspeção visual**:
  - escalas de tipografia elevadas para aproximar o rendering antigo,
  - ajustes de espaçamento por faixa (topo, barra verde, tabs, lista, rodapé),
  - separadores tracejados e alinhamentos dos balões refinados,
  - inclusão de thumb circular sobreposta na terceira conversa para espelhar a referência.
- **Semântica explícita da lista**:
  - terceira conversa marcada com `data-last-message-by="self"` e comentário em código explicando que a foto sobreposta aparece porque a última mensagem foi enviada pela própria user;
  - última conversa marcada como grupo (`data-conversation-type="group"`) e preview começando pelo remetente (`Eduardo:`), como no mock.

## Estado dos ícones/glifos
- Mantidos como fallback textual/Unicode para preservar portabilidade offline.
- Próximo passo opcional: mapear glifos exatos com base em fontes legadas (IcoMoon/Fontello/FA 3-4) e converter em subset local.

## Próximo upgrade sugerido
- Rodar uma etapa de comparação visual por diff (overlay com opacidade) em múltiplas larguras para validar consistência de pixel-parity.
