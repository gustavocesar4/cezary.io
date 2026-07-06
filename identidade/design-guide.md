# Identidade visual

> Como a marca aparece em tudo que o MazyOS gera.
> As skills de conteúdo, carrossel e post leem esse arquivo antes de criar qualquer visual.
> Edite quando a marca evoluir.

---

## Posicionamento e personalidade da marca

**Direção da marca:** Dark Premium, Tecnologia, Autoridade, Minimalismo.

### Posicionamento

Para empresas e profissionais que querem crescer, ganhar eficiência e conquistar
vantagem competitiva por meio da tecnologia, a CEZARY.IO é a consultoria que
transforma sites, sistemas e automações com IA em resultado prático e mensurável
— porque cada solução é desenhada a partir do negócio do cliente, com a
tecnologia como meio para o crescimento, nunca como fim em si.

### Arquétipos

- **Sábio (principal)** — guia com clareza, valoriza a verdade sobre o efeito
- **Governante (secundário)** — reforça autoridade, organização e excelência

### Traços de personalidade

1. Direto — vai ao ponto, sem enrolação
2. Preciso — fala com exatidão técnica
3. Estruturado — método e organização visíveis em cada entrega
4. Confiável — cumpre o que promete
5. Discreto/sofisticado — autoridade que não precisa gritar

### Valores

1. Clareza acima de venda
2. Resultado prático acima de "inovação por inovação"
3. Simplicidade técnica
4. Autoridade pela competência
5. Evolução contínua — compromisso permanente em acompanhar e evoluir a
   solução do cliente junto com o crescimento do negócio dele

### Público-alvo

| Segmento | Perfil | Dor principal |
|---|---|---|
| Negócio tradicional pequeno | Clínicas, escritórios, comércio local sem presença digital séria | Medo de contratar errado / achar tecnologia cara e complicada |
| Empresa em expansão | Já opera, mas tem processos manuais e gargalos operacionais | Perder eficiência ao crescer sem estrutura pra acompanhar |
| Profissional liberal / prestador de serviço | Precisa parecer mais profissional digitalmente | Presença digital amadora prejudica a percepção de valor do trabalho |
| Empresa com tecnologia fragmentada | Já usa sistemas e ferramentas, mas desconectados entre si | Silos de dados, retrabalho manual, falta de integração |

### Atributos da identidade

| Pilar | O que significa na prática visual | Por que se conecta ao posicionamento |
|---|---|---|
| Dark Premium | Fundo escuro dominante, poucos acentos de cor | Sinaliza padrão alto, diferencia de agências genéricas |
| Tecnologia | Elementos que remetem a interface/dados sem ser clichê | Reforça competência técnica real |
| Autoridade | Hierarquia visual clara, tipografia forte, sem excesso de CTAs | "Sabemos o que estamos fazendo" sem precisar dizer |
| Minimalismo | Poucos elementos, muito espaço vazio, zero ruído visual | Espelha o valor de resolver sem complicar |

---

## Cores

Direção monocromática — preto, branco e escala de cinza. A hierarquia visual vem
do contraste entre os degraus, não de matiz. Nenhuma cor de destaque compõe a
identidade.

- **Fundo principal:** `#0A0A0A` — quase-preto, não preto absoluto; evita bloco chapado e mantém textura legível
- **Fundo alternativo / cards:** `#141414` — um degrau de superfície acima do fundo, sem introduzir cor ou sombra
- **Bordas / hairlines:** `#272727` — separação discreta entre blocos
- **Texto secundário:** `#8C8C8C` — legendas e texto de apoio
- **Texto principal:** `#F2F2F2` — branco quebrado, leitura confortável em blocos longos
- **Contraste máximo / CTA:** `#FFFFFF` — branco puro, reservado ao elemento de maior contraste da tela (ex.: botão de ação principal). Não é cor de destaque de marca — é o topo da escala de cinza, usado com raridade
- **Cor funcional (reservada, não definida):** nenhuma cor de apoio existe hoje. Se surgir necessidade funcional real (erro, alerta, sucesso em um painel), resolver com a menor saturação possível, usada só nesse contexto pontual — nunca em elementos de marca, títulos, CTAs institucionais ou peças de conteúdo

---

## Direções visuais descartadas

> Decisões conscientes da identidade CEZARY.IO — não uma proibição absoluta em
> qualquer contexto, mas direções que quebram os pilares da marca (Dark Premium,
> Tecnologia, Autoridade, Minimalismo) e por isso não devem aparecer em peças
> institucionais da agência.

- **Dourado ou qualquer cor de destaque saturada** — reintroduziria hierarquia por cor; a identidade usa só contraste
- **Gradientes, mesmo em cinza** — quebra a precisão do monocromático, introduz ambiguidade tonal
- **Cinza com viés de matiz perceptível** (quente ou frio) — deixa de ser neutro, vira cor disfarçada
- **Pares de baixo contraste** — cinzas próximos demais anulam o único recurso hierárquico da marca

---

## Tipografia

Uma única família em toda a interface — site, dashboard, sistema, documentação
e futuras aplicações — mantendo consistência à medida que a agência expande
para múltiplos produtos. Hierarquia construída por peso e escala dentro dessa
mesma família, não por mistura de fontes.

- **Títulos e destaques:** Geist, peso 700
- **Corpo, subtítulos e botões:** Geist, peso 400 (corpo) / 500 (botões e labels de maior ênfase)
- **Peso do título:** 700

### Fonte técnica (uso restrito)

**Geist Mono** — escolhida por ser a família mono desenhada como par da Geist
(mesma origem, métricas e altura-x compatíveis), garantindo uma só voz
tipográfica com um acento técnico, em vez de duas fontes de fundições
diferentes coexistindo.

Restrita a elementos pequenos e funcionais: labels, breadcrumbs, IDs, trechos
de código e metadados. Nunca aparece em títulos, corpo de texto ou botões.

---

## Estilo geral

**Princípio de hierarquia visual:** a hierarquia da CEZARY.IO é construída por
contraste, tipografia, espaçamento e escala — nunca por cores de destaque.
Qualquer decisão de layout resolve "o que é mais importante aqui" através
desses quatro recursos antes de considerar cor.

---

## Elementos-chave

- **Border-radius:** `4px` (botões, inputs, tags) / `8px` (cards, painéis, navbar). Nunca pill / rounded-full
- **Bordas:** `1px solid #272727` como padrão; `#3A3A3A` em hover. A borda é o principal recurso estrutural da interface, não a sombra
- **Sombras:** nenhuma em cards ou seções de conteúdo — a separação vem do degrau de fundo (`#141414` sobre `#0A0A0A`). Reservada só a elementos flutuantes (modal, dropdown, tooltip): `0 12px 32px rgba(0,0,0,0.5)`
- **Botões:**
  - Primário — fundo `#FFFFFF`, texto `#0A0A0A`; uma única ação por tela
  - Secundário — outline `1px #3A3A3A`, fundo transparente; hover preenche com `#141414`
  - Ghost — sem borda/fundo, texto `#8C8C8C`; hover sublinha e clareia para `#F2F2F2`
- **Cards:** fundo `#141414`, borda `1px #272727`, radius `8px`, sem sombra. Card interativo clareia fundo e borda no hover; card estático não reage
- **Inputs:** fundo `#141414`, borda `1px #272727`, radius `4px`. Foco = borda branca pura + `box-shadow 0 0 0 1px #FFFFFF` — o foco também resolve por contraste, não por cor
- **Navbar:** mesmo fundo da página, sem elevação — separada só pela borda inferior. Logotipo com peso 700 e tamanho de destaque próprio (maior que o corpo). CTA de navbar sempre em botão secundário, nunca primário
- **Microinterações:** transições de `120–160ms`, easing `ease-out`, nunca bounce/elástico. Hover muda cor, borda ou opacidade — nunca escala grande. Clique pode ter um scale sutil (`0.98`) como retorno tátil. Foco sempre visível por contraste (outline branco), nunca removido sem substituto

---

## O que NUNCA fazer

- Sombra decorativa em cards ou seções de conteúdo
- Border-radius grande (pill, rounded-full) em qualquer componente
- Gradientes em botões, cards ou fundos
- Ícones ou ilustrações coloridas / estilo cartoon
- Mais de um botão primário na mesma tela ou seção
- Easing bounce/elástico ou animações acima de ~300ms sem função
- Emojis na interface do produto
- Outline de foco removido sem um substituto visível

---

## Logo

**Conceito:** "Corte Preciso" — um "C" construído só com retas, sem nenhuma curva orgânica. Os dois vértices que formam a abertura central são cortes agudos que se encaram através do vão — o corte e o ponto de convergência (entre sistemas, entre o antes e o depois do cliente) são a mesma aresta. Não é um símbolo genérico de tecnologia (sem chip, cérebro, engrenagem, raio, hexágono ou circuito).

- **Construção:** viewBox `0 0 100 100`, `polygon points="16,14 58,14 85,38 40,38 40,62 85,62 58,86 16,86"`, preenchido em cor sólida (branco sobre fundo escuro; preto sobre fundo claro)
- **Parâmetros:** ângulo do corte ≈ 42° · espessura do traço 24 (24% da altura) · abertura central 24 (proporção 1:1 com a espessura) · caixa 69×72, centralizada
- **Cor:** monocromático puro — nunca aplicar cor de destaque, gradiente, sombra ou efeito 3D sobre o símbolo
- **Arquivo:** *(gerar SVG definitivo a partir da construção acima — ex: identidade/simbolo.svg)*
- **Versão pra fundo escuro/claro:** o símbolo é só silhueta — funciona em qualquer fundo trocando a cor de preenchimento (branco em fundo escuro, preto em fundo claro), sem versão alternativa de arte
- **Onde usar:** favicon, avatar/ícone de app, slide final do carrossel (CTA), header de propostas, slides de apresentação, navbar (junto ao wordtype "CEZARY.IO")
- **Tamanho sugerido:** símbolo sozinho a partir de 16px (favicon); junto ao wordmark, altura mínima de 24px na navbar
- **Cuidados de produção:** ajustar manualmente a versão de 16px (abertura e vértices agudos ficam no limite do antialiasing nesse tamanho); marcar o asset como não-espelhável em qualquer framework com mirror automático para RTL; fazer busca de anterioridade de marca antes do registro oficial (INPI) — a semelhança visual com marcas existentes não pode ser validada só por busca de texto

---

## Observações adicionais
