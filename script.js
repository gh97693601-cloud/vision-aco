// ─── DATA ───────────────────────────────────────────────────────
// NOTA: Somente as imagens da pasta /images/ são referenciadas.
// Imagens inexistentes foram removidas (img: null = usa placeholder).
// Imagens existentes usam o nome EXATO: images/IMG_XXXX.jpeg

const categories = {

  // ── 01 · NUMÉRICAS DECORATIVAS ──────────────────────────────
  numericas: {
    name: 'Numéricas Decorativas',
    numeric: true,
    subcats: ['Todos','Pets','Gato','Pássaro','Floral','Ornamental','Premium'],
    products: [
      {id:'n1', name:'Corgi com Número',           sub:'Pets · Vertical',       img:null,  badge:'Top Venda', subcat:'Pets',      desc:'Corgi sorridente ao lado do número da residência em composição vertical com moldura em L.'},
      {id:'n2', name:'Bull Terrier com Número',    sub:'Pets · Horizontal',     img:null,  badge:null,        subcat:'Pets',      desc:'Bull Terrier espiando sobre a placa com número e endereço.'},
      {id:'n3', name:'Pitbull Sorrindo',           sub:'Pets · Horizontal',     img:null,  badge:'Novo',      subcat:'Pets',      desc:'Pitbull simpático espreitando sobre a numeração.'},
      {id:'n4', name:'Pitbull Lateral',            sub:'Pets · Vertical',       img:null,  badge:null,        subcat:'Pets',      desc:'Pitbull em posição lateral sobre base com número e endereço.'},
      {id:'n5', name:'Boston Terrier',             sub:'Pets · Vertical',       img:null,  badge:null,        subcat:'Pets',      desc:'Boston Terrier elegante sobre placa com número e endereço.'},
      {id:'n6', name:'Bulldog Francês',            sub:'Pets · Vertical',       img:null,  badge:'Premium',   subcat:'Pets',      desc:'Bulldog Francês sentado ao lado do número em moldura vertical.'},
      {id:'n7', name:'Dachshund em Pé',            sub:'Pets · Vertical',       img:null,  badge:null,        subcat:'Pets',      desc:'Salsicha apoiado na moldura vertical do número.'},
      {id:'n8', name:'Trio de Cães',               sub:'Pets · Horizontal',     img:null,  badge:'Exclusivo', subcat:'Pets',      desc:'Labrador, Husky e Lhasa espiando acima do número e nome da rua.'},
      {id:'n9', name:'Gato Pendurado',             sub:'Gato · Minimalista',    img:null,  badge:'Novo',      subcat:'Gato',      desc:'Gato pendurado na grade com número. Silhueta clean e expressiva.'},
      {id:'n10',name:'Gato Floral',                sub:'Gato · Premium',        img:null,  badge:'Premium',   subcat:'Gato',      desc:'Gato com florações internas em corte a laser detalhado.'},
      {id:'n11',name:'Pássaros no Galho',          sub:'Pássaro · Elegante',    img:null,  badge:null,        subcat:'Pássaro',   desc:'Par de pássaros no galho sobre placa arredondada com número.'},
      {id:'n12',name:'Ornamental Welcome',         sub:'Ornamental · Clássico', img:null,  badge:'Top Venda', subcat:'Ornamental',desc:'Placa Welcome com moldura ornamental barroca e número central.'},
      {id:'n13',name:'Placa Clássica Branca',      sub:'Ornamental · Premium',  img:null,  badge:null,        subcat:'Ornamental',desc:'Placa de número em acabamento branco com arabescos e moldura recortada.'},
      {id:'n14',name:'Oval Dourada',               sub:'Premium · Dourado',     img:null,  badge:'Premium',   subcat:'Premium',   desc:'Placa oval em acabamento dourado com número em tipografia clássica.'},
      {id:'n15',name:'Árvore Circular',            sub:'Floral · Premium',      img:null,  badge:'Exclusivo', subcat:'Floral',    desc:'Círculo com árvore frondosa em corte a laser e número central.'},
      {id:'n16',name:'Poste Ornamental',           sub:'Ornamental · Jardim',   img:null,  badge:null,        subcat:'Ornamental',desc:'Placa oval ornamental em poste de jardim com arabescos e número.'},
      {id:'n17',name:'Vertical Arabesco',          sub:'Ornamental · Artístico',img:null,  badge:'Top Venda', subcat:'Ornamental',desc:'Números em coluna vertical com arabescos fluidos ao redor.'},
      {id:'n18',name:'Floral Arabesco',            sub:'Floral · Moderno',      img:null,  badge:null,        subcat:'Floral',    desc:'Número em destaque sobre composição de arabescos e ramos florais.'},
      {id:'n19',name:'Floral Vertical',            sub:'Floral · Delicado',     img:null,  badge:'Novo',      subcat:'Floral',    desc:'Número em placa vertical com buquê floral no topo.'},
      {id:'n20',name:'Samambaias com Número',      sub:'Floral · Natureza',     img:null,  badge:'Novo',      subcat:'Floral',    desc:'Samambaias em moldura quadrada com número e endereço abaixo.'},
      {id:'n21',name:'Oval Floral',                sub:'Floral · Elegante',     img:null,  badge:null,        subcat:'Floral',    desc:'Moldura oval com flores no topo e número em destaque.'},
      {id:'n22',name:'Gato Espreitando Vertical',  sub:'Gato · Moderno',        img:null,  badge:'Top Venda', subcat:'Gato',      desc:'Gato preto espreitando ao lado de placa vertical com número e rua.'},
      {id:'n23',name:'Borboleta com Flores',       sub:'Floral · Premium',      img:null,  badge:'Premium',   subcat:'Floral',    desc:'Borboleta pousada entre flores silvestres sobre número.'},
      {id:'n24',name:'Arabesco Horizontal',        sub:'Ornamental · Moderno',  img:null,  badge:null,        subcat:'Ornamental',desc:'Número em cápsula preta com arabescos fluidos em volta.'},
      {id:'n25',name:'Barroco Ornamental',         sub:'Ornamental · Barroco',  img:null,  badge:'Exclusivo', subcat:'Ornamental',desc:'Número central envolto em ornamentos barrocos e volutas.'},
      {id:'n26',name:'Mandala Meia-Lua',           sub:'Floral · Espiritual',   img:null,  badge:'Premium',   subcat:'Floral',    desc:'Metade de mandala ao lado do número em coluna.'},
      {id:'n27',name:'Gato Floral Borboleta',      sub:'Gato · Artístico',      img:null,  badge:'Novo',      subcat:'Gato',      desc:'Gato florido alcançando borboleta com pata.'},
      {id:'n28',name:'Gato Espreitando Placa',     sub:'Gato · Horizontal',     img:null,  badge:null,        subcat:'Gato',      desc:'Gato realista espreitando sobre placa horizontal com número e rua.'},
      {id:'n29',name:'Gato Preto Vertical',        sub:'Gato · Vertical',       img:null,  badge:'Top Venda', subcat:'Gato',      desc:'Gato preto em silhueta lateral com número e nome da rua verticais.'},
      {id:'n30',name:'Corgi com Endereço v2',      sub:'Pets · Vertical',       img:null,  badge:null,        subcat:'Pets',      desc:'Corgi sorridente em versão aprimorada com moldura em L.'},
      {id:'n31',name:'Labrador com Endereço',      sub:'Pets · Vertical',       img:null,  badge:'Premium',   subcat:'Pets',      desc:'Labrador deitado ao lado de número e endereço em moldura L.'},
      {id:'n32',name:'Pitbull Vertical Endereço',  sub:'Pets · Vertical',       img:null,  badge:null,        subcat:'Pets',      desc:'Pitbull em vista lateral com moldura vertical de número e rua.'},
      {id:'n33',name:'Beija-flor com Número',      sub:'Pássaro · Premium',     img:null,  badge:'Exclusivo', subcat:'Pássaro',   desc:'Beija-flor em composição artística com número vertical e arabescos florais.'},
      {id:'n34',name:'Beija-flor Floral v2',       sub:'Pássaro · Elegante',    img:null,  badge:null,        subcat:'Pássaro',   desc:'Beija-flor em segundo ângulo com número e florações.'},
      {id:'n35',name:'Floral Vertical Poinsettia', sub:'Floral · Delicado',     img:null,  badge:'Novo',      subcat:'Floral',    desc:'Número em placa vertical com poinsettia e folhas.'},
      {id:'n36',name:'Girassol com Número',        sub:'Floral · Alegre',       img:null,  badge:null,        subcat:'Floral',    desc:'Número em destaque com girassol e ramos abaixo.'},
      {id:'n37',name:'Guirlanda de Folhas',        sub:'Floral · Clássico',     img:null,  badge:'Top Venda', subcat:'Floral',    desc:'Número dentro de guirlanda circular de folhas e bagas.'},
      {id:'n38',name:'Cardeal com Número',         sub:'Pássaro · Clássico',    img:null,  badge:'Premium',   subcat:'Pássaro',   desc:'Cardeal pousado em galho dentro de moldura vertical com número.'},
      {id:'n39',name:'Arabesco Floral v2',         sub:'Floral · Moderno',      img:null,  badge:null,        subcat:'Floral',    desc:'Número grande com arabescos florais em composição horizontal.'},
      {id:'n40',name:'Ornamental Clássico',        sub:'Ornamental · Premium',  img:null,  badge:'Premium',   subcat:'Ornamental',desc:'Composição ornamental premium com tipografia clássica e arabescos.'},
    ]
  },

  // ── 02 · DECORAÇÃO ANIMAL ────────────────────────────────────
  animal: {
    name: 'Decoração Animal',
    numeric: false,
    subcats: ['Todos','Cavalos','Aves','Safari','Outros'],
    products: [
      {id:'a1', name:'Cavalo em Moldura',        sub:'Cavalos · Clássico',  img:null, badge:'Top Venda', subcat:'Cavalos', desc:'Cavalo em galope dentro de moldura horizontal. Linhas artísticas que transmitem força e movimento.'},
      {id:'a2', name:'Cavalo Galopando',         sub:'Cavalos · Premium',   img:null, badge:'Premium',   subcat:'Cavalos', desc:'Cavalo em galope vertical com crina ao vento saindo da moldura.'},
      {id:'a3', name:'Tríptico Cavalo Correndo', sub:'Cavalos · Conjunto',  img:null, badge:'Exclusivo', subcat:'Cavalos', desc:'Composição em três painéis horizontais formando cavalo em corrida.'},
      {id:'a4', name:'Cavalo Geométrico 4 Peças',sub:'Cavalos · Geométrico',img:null, badge:'Novo',      subcat:'Cavalos', desc:'Cavalo em estilo poligonal dividido em quatro quadros.'},
      {id:'a5', name:'Tríptico Cavalo Empinando',sub:'Cavalos · Conjunto',  img:null, badge:null,        subcat:'Cavalos', desc:'Três painéis verticais com cavalo empinando em silhueta.'},
      {id:'a6', name:'Cabeça de Cavalo',         sub:'Cavalos · Artístico', img:null, badge:null,        subcat:'Cavalos', desc:'Cabeça de cavalo em traços lineares abstratos.'},
      {id:'a7', name:'Cavalo Abstrato',          sub:'Cavalos · Moderno',   img:null, badge:null,        subcat:'Cavalos', desc:'Cavalo em traços abstratos e linhas fluidas.'},
      {id:'a8', name:'Fênix Tribal',             sub:'Aves · Poder',        img:null, badge:'Top Venda', subcat:'Aves',    desc:'Fênix em estilo tribal com asas abertas em simetria perfeita.'},
      {id:'a9', name:'Águia Imperial',           sub:'Aves · Majestoso',    img:null, badge:'Premium',   subcat:'Aves',    desc:'Águia em voo frontal com asas completamente abertas.'},
      {id:'a10',name:'Beija-flor Geométrico',    sub:'Aves · Elegante',     img:null, badge:'Exclusivo', subcat:'Aves',    desc:'Beija-flor dentro de moldura quadrada com círculo.'},
      {id:'a11',name:'Trio de Corujas',          sub:'Aves · Família',      img:null, badge:'Novo',      subcat:'Aves',    desc:'Coruja mãe com dois filhotes no galho com folhas.'},
      {id:'a12',name:'Crocodilo em Moldura',     sub:'Safari · Exótico',    img:null, badge:null,        subcat:'Safari',  desc:'Crocodilo saindo da moldura quadrada.'},
      {id:'a13',name:'Tigre na Selva',           sub:'Safari · Majestoso',  img:null, badge:'Premium',   subcat:'Safari',  desc:'Tigre entre bambus e folhagens em composição vertical.'},
      {id:'a14',name:'Zebra em Moldura',         sub:'Safari · Moderno',    img:null, badge:null,        subcat:'Safari',  desc:'Zebra com listras detalhadas saindo da moldura.'},
      {id:'a15',name:'Girafa em Moldura',        sub:'Safari · Delicado',   img:null, badge:'Top Venda', subcat:'Safari',  desc:'Girafa elegante com manchas detalhadas dentro de moldura vertical.'},
      {id:'a16',name:'Tríptico Safari',          sub:'Safari · Conjunto',   img:null, badge:'Exclusivo', subcat:'Safari',  desc:'Três painéis com girafa, elefante e zebra.'},
      {id:'a17',name:'Girafa com Óculos',        sub:'Safari · Divertido',  img:null, badge:'Novo',      subcat:'Safari',  desc:'Girafa estilosa com óculos saindo da moldura.'},
      {id:'a18',name:'Santa Ceia',               sub:'Outros · Religioso',  img:null, badge:'Premium',   subcat:'Outros',  desc:'A Última Ceia em corte a laser com detalhes fiéis à obra clássica.'},
    ]
  },

  // ── 03 · MANDALAS DECORATIVAS ───────────────────────────────
  mandala: {
    name: 'Mandalas Decorativas',
    numeric: false,
    subcats: ['Todos','Árvore da Vida','Mandalas','Buda','Yoga','Espiritual'],
    products: [
      {id:'m1',name:'Árvore com Barco',     sub:'Árvore da Vida · Clássico',   img:null, badge:'Top Venda', subcat:'Árvore da Vida', desc:'Árvore da vida circular com barco ao rio e arquitetura ao fundo.'},
      {id:'m2',name:'Flor de Lótus',        sub:'Mandalas · Espiritual',       img:null, badge:'Premium',   subcat:'Mandalas',       desc:'Flor de lótus em múltiplas camadas de pétalas.'},
      {id:'m3',name:'Elefante Ornamental',  sub:'Espiritual · Indiano',        img:null, badge:'Exclusivo', subcat:'Espiritual',     desc:'Cabeça de elefante com arabescos indianos ornamentais.'},
      {id:'m4',name:'Árvore Galhos Secos',  sub:'Árvore da Vida · Minimalista',img:null, badge:null,        subcat:'Árvore da Vida', desc:'Árvore circular com galhos sem folhas em estilo minimalista.'},
      {id:'m5',name:'Buda com Árvore',      sub:'Buda · Espiritual',           img:null, badge:'Top Venda', subcat:'Buda',           desc:'Buda em meditação dentro de círculo com árvore florida ao fundo.'},
      {id:'m6',name:'Árvore Coração',       sub:'Árvore da Vida · Amor',       img:null, badge:'Novo',      subcat:'Árvore da Vida', desc:'Árvore com galhos formando coração.'},
      {id:'m7',name:'Mulher Yoga Lótus',    sub:'Yoga · Premium',              img:null, badge:'Premium',   subcat:'Yoga',           desc:'Figura feminina em pose de yoga sobre lótus com símbolo Om.'},
      {id:'m8',name:'Carpas Koi Yin-Yang',  sub:'Espiritual · Equilíbrio',     img:null, badge:'Exclusivo', subcat:'Espiritual',     desc:'Par de carpas koi em composição yin-yang circular.'},
    ]
  },

  // ── 04 · DECORAÇÃO AUTOMOTIVA ───────────────────────────────
  auto: {
    name: 'Decoração Automotiva',
    numeric: false,
    subcats: ['Todos','Esportivos','Clássicos','Fórmula 1'],
    products: [
      {id:'au1', name:'Porsche 911 GT3',          sub:'Esportivos · Ângulo 3/4', img:null, badge:'Top Venda', subcat:'Esportivos', desc:'Porsche 911 GT3 em vista 3/4 frontal com detalhes do aerofólio.'},
      {id:'au2', name:'F1 Vista Superior',         sub:'Fórmula 1 · Topo',        img:null, badge:'Exclusivo', subcat:'Fórmula 1',  desc:'Monoposto de F1 visto de cima com detalhes do chassis e rodas.'},
      {id:'au3', name:'Mitsubishi Lancer',         sub:'Esportivos · Lateral',    img:null, badge:null,        subcat:'Esportivos', desc:'Lancer Evolution em silhueta lateral clean com aerofólio.'},
      {id:'au4', name:'Jaguar E-Type',             sub:'Clássicos · Vintage',     img:null, badge:'Premium',   subcat:'Clássicos',  desc:'Jaguar E-Type clássico em vista 3/4 com linhas elegantes.'},
      {id:'au5', name:'Oldsmobile 442',            sub:'Clássicos · Muscle',      img:null, badge:null,        subcat:'Clássicos',  desc:'Oldsmobile 442 muscle car em composição detalhada.'},
      {id:'au6', name:'BMW M4 Frontal',            sub:'Esportivos · Frontal',    img:null, badge:'Novo',      subcat:'Esportivos', desc:'BMW M4 em vista frontal com grades duplas características.'},
      {id:'au7', name:'Lamborghini Aventador',     sub:'Esportivos · Traseira',   img:null, badge:'Premium',   subcat:'Esportivos', desc:'Lamborghini Aventador SVJ em vista traseira 3/4.'},
      {id:'au8', name:'Porsche Carrera GT',        sub:'Esportivos · Spider',     img:null, badge:'Exclusivo', subcat:'Esportivos', desc:'Porsche Carrera GT descapotável em ângulo 3/4.'},
      {id:'au9', name:'Mercedes Detalhe',          sub:'Esportivos · Close',      img:null, badge:null,        subcat:'Esportivos', desc:'Detalhe frontal de Mercedes esportiva em moldura quadrada.'},
      {id:'au10',name:'Mustang Shelby GT350',      sub:'Esportivos · Muscle',     img:null, badge:'Top Venda', subcat:'Esportivos', desc:'Ford Mustang Shelby GT350 em vista 3/4.'},
      {id:'au11',name:'Lamborghini Huracán',       sub:'Esportivos · Lateral',    img:null, badge:'Premium',   subcat:'Esportivos', desc:'Lamborghini Huracán Performante em silhueta lateral.'},
      {id:'au12',name:'Corvette C8',               sub:'Esportivos · Moderno',    img:null, badge:'Novo',      subcat:'Esportivos', desc:'Chevrolet Corvette C8 mid-engine em vista lateral.'},
      {id:'au13',name:'F1 Vista Frontal',          sub:'Fórmula 1 · Frontal',     img:null, badge:'Exclusivo', subcat:'Fórmula 1',  desc:'Monoposto de F1 em vista frontal com asas e pneus largos.'},
      {id:'au14',name:'Chevrolet Camaro',          sub:'Clássicos · Muscle',      img:null, badge:'Top Venda', subcat:'Clássicos',  desc:'Chevrolet Camaro SS em vista 3/4 frontal.'},
      {id:'au15',name:'Carro Esportivo Moderno',   sub:'Esportivos · Clean',      img:null, badge:null,        subcat:'Esportivos', desc:'Silhueta limpa de esportivo moderno em vista lateral.'},
      {id:'au16',name:'Porsche 911 GT3 RS',        sub:'Esportivos · Clássico',   img:null, badge:'Premium',   subcat:'Esportivos', desc:'Porsche 911 GT3 RS em ângulo frontal 3/4.'},
      {id:'au17',name:'Mustang Clássico',          sub:'Clássicos · Vintage',     img:null, badge:'Exclusivo', subcat:'Clássicos',  desc:'Ford Mustang Fastback clássico em silhueta sólida lateral.'},
    ]
  },

  // ── 05 · PLACAS DECORATIVAS ─────────────────────────────────
  placas: {
    name: 'Placas Decorativas',
    numeric: false,
    subcats: ['Todos','Frases','Nomes','Minimalistas','Modernas','Decorativas'],
    products: [
      {id:'p1', name:'Bem-Vindo Elegante',   sub:'Frases · Clássico',        emoji:'🏡', img:null, badge:'Top Venda', subcat:'Frases',      desc:'Placa de boas-vindas com tipografia elegante e ornamentos florais.'},
      {id:'p2', name:'Esta Casa tem Amor',   sub:'Frases · Família',         emoji:'❤',  img:null, badge:'Novo',      subcat:'Frases',      desc:'Frase afetiva com coração e arabescos decorativos.'},
      {id:'p3', name:'Nome da Família',      sub:'Nomes · Personalizado',    emoji:'🏠', img:null, badge:'Exclusivo', subcat:'Nomes',       desc:'Sobrenome da família em tipografia serif com ornamentos.'},
      {id:'p4', name:'Monograma Duplo',      sub:'Nomes · Casal',            emoji:'💑', img:null, badge:'Premium',   subcat:'Nomes',       desc:'Iniciais do casal entrelaçadas em composição ornamental.'},
      {id:'p5', name:'Linha Slim',           sub:'Minimalistas · Clean',     emoji:'▬',  img:null, badge:'Novo',      subcat:'Minimalistas',desc:'Placa minimalista com texto clean e linha decorativa.'},
      {id:'p6', name:'Círculo Minimal',      sub:'Minimalistas · Geométrico',emoji:'○',  img:null, badge:null,        subcat:'Minimalistas',desc:'Composição circular minimalista com texto centralizado.'},
      {id:'p7', name:'Hexagonal Modern',     sub:'Modernas · Geométrico',    emoji:'⬡',  img:null, badge:'Premium',   subcat:'Modernas',    desc:'Placa em formato hexagonal com design contemporâneo.'},
      {id:'p8', name:'Industrial Chic',      sub:'Modernas · Tendência',     emoji:'⚙',  img:null, badge:'Exclusivo', subcat:'Modernas',    desc:'Estética industrial com elementos mecânicos e tipografia bold.'},
      {id:'p9', name:'Ornamental Barroca',   sub:'Decorativas · Clássico',   emoji:'🔱', img:null, badge:'Top Venda', subcat:'Decorativas', desc:'Composição barroca com volutas e ornamentos clássicos.'},
      {id:'p10',name:'Art Nouveau',          sub:'Decorativas · Artístico',  emoji:'🌹', img:null, badge:'Premium',   subcat:'Decorativas', desc:'Linhas sinuosas e florações no estilo art nouveau.'},
      {id:'p11',name:'Placa de Quarto',      sub:'Frases · Interior',        emoji:'🛏', img:null, badge:null,        subcat:'Frases',      desc:'Placa personalizada para quartos com nome e elementos decorativos.'},
      {id:'p12',name:'Copa & Cozinha',       sub:'Frases · Funcional',       emoji:'🍷', img:null, badge:'Novo',      subcat:'Frases',      desc:'Placa temática para cozinha e copa com ícones e frase personalizada.'},
    ]
  },

  // ── 06 · FAZENDA & CHÁCARA ──────────────────────────────────
  // ✅ TODAS as imagens abaixo existem em /images/ com nome EXATO
  fazenda: {
    name: 'Fazenda & Chácara',
    numeric: false,
    nameCustom: true,
    subcats: ['Todos','Tratores','Cavalos','Gado','Rural'],
    products: [
      // TRATORES
      {id:'f1', name:'Trator Moderno Circular',   sub:'Tratores · Premium',      img:'images/IMG_5019.jpeg', badge:'Top Venda', subcat:'Tratores', desc:'Trator moderno de grande porte dentro de moldura circular com nuvens ao fundo. Composição impressionante em corte a laser.'},
      {id:'f2', name:'Trator Clássico Circular',  sub:'Tratores · Vintage',      img:'images/IMG_5017.jpeg', badge:'Exclusivo', subcat:'Tratores', desc:'Trator clássico vintage dentro de círculo com grama e detalhes rústicos. Peça nostálgica que celebra a tradição do campo.'},
      {id:'f3', name:'Trator com Nome — Faixa',   sub:'Tratores · Personalizado',img:'images/IMG_5018.jpeg', badge:'Novo',      subcat:'Tratores', desc:'Trator moderno em círculo com faixa inferior para nome personalizado.'},
      {id:'f4', name:'Trator Frontal Detalhado',  sub:'Tratores · Moderno',      img:'images/IMG_5016.jpeg', badge:'Premium',   subcat:'Tratores', desc:'Trator em vista frontal com detalhes de nuvens e terreno. Potência e precisão em corte a laser.'},
      // CAVALOS
      {id:'f5', name:'Par de Cavalos Oval',        sub:'Cavalos · Elegante', img:'images/IMG_5013.jpeg', badge:'Top Venda', subcat:'Cavalos', desc:'Dois cavalos face a face dentro de moldura oval com árvores e cerca. Composição clássica e elegante para decoração rural.'},
      {id:'f6', name:'Cavalos na Paisagem Oval',   sub:'Cavalos · Premium',  img:'images/IMG_5014.jpeg', badge:'Premium',   subcat:'Cavalos', desc:'Par de cavalos em paisagem oval com árvores, cercas e águia em voo. Cena completa do universo equestre.'},
      {id:'f7', name:'Dupla Cabeça de Cavalo',     sub:'Cavalos · Artístico',img:'images/IMG_5015.jpeg', badge:'Exclusivo', subcat:'Cavalos', desc:'Duas cabeças de cavalo simétricas com ferradura central e faixa para nome. Peça imponente de grande impacto visual.'},
      {id:'f8', name:'Fazenda com Cavalos Oval',   sub:'Cavalos · Rural',    img:'images/IMG_5012.jpeg', badge:'Novo',      subcat:'Cavalos', desc:'Cavalos e animais de fazenda em moldura oval com pôr do sol. Cena rural completa e poética.'},
      {id:'f9', name:'Rancho Cavalos Cerca',       sub:'Cavalos · Country',  img:'images/IMG_4998.jpeg', badge:'Top Venda', subcat:'Cavalos', desc:'Três cavalos em silhueta atrás de cerca em composição em arco. Design autêntico que traz a alma do rancho.'},
      {id:'f10',name:'Cavalo & Cão na Fazenda',    sub:'Cavalos · Família',  img:'images/IMG_4999.jpeg', badge:null,        subcat:'Cavalos', desc:'Cavalos e cão em composição horizontal com cercas e árvores. Perfeita para fazendas familiares.'},
      {id:'f11',name:'Cavaleiro nas Montanhas',    sub:'Cavalos · Country',  img:'images/IMG_5011.jpeg', badge:'Exclusivo', subcat:'Cavalos', desc:'Cavaleiro montado em paisagem oval com montanhas, pinheiros e cercas. Composição cinematográfica.'},
      // GADO
      {id:'f12',name:'Touro Hexagonal',           sub:'Gado · Premium',  img:'images/IMG_5009.jpeg', badge:'Premium',   subcat:'Gado', desc:'Touro em posição altiva dentro de moldura hexagonal com campo ao fundo. Força e nobreza do agro.'},
      {id:'f13',name:'Rebanho Arco com Nome',     sub:'Gado · Rural',    img:'images/IMG_5010.jpeg', badge:'Top Venda', subcat:'Gado', desc:'Rebanho de vacas com árvores em composição horizontal com arco para nome. Cena bucólica e autêntica.'},
      {id:'f14',name:'Trio de Vacas',             sub:'Gado · Divertido',img:'images/IMG_5008.jpeg', badge:'Novo',      subcat:'Gado', desc:'Três cabeças de vaca olhando para frente com nome em destaque. Peça bem-humorada e cheia de personalidade.'},
      // RURAL
      {id:'f15',name:'Welcome to — Completa',   sub:'Rural · Clássico', img:'images/IMG_5005.jpeg', badge:'Top Venda', subcat:'Rural', desc:'Placa circular "Welcome to" com paisagem rural completa: trator, cavalo, celeiro, moinho e árvores.'},
      {id:'f16',name:'Fazenda Oval Dourada',     sub:'Rural · Premium',  img:'images/IMG_5007.jpeg', badge:'Premium',   subcat:'Rural', desc:'Composição oval com celeiro, trator, árvore e animais em paisagem dourada. Elegância rústica premium.'},
      {id:'f17',name:'Placa Welcome Campos',     sub:'Rural · Moderno',  img:'images/IMG_5001.jpeg', badge:'Exclusivo', subcat:'Rural', desc:'Placa oval "Welcome To" com cena de celeiro, campos de trigo e silo ao sol.'},
      {id:'f18',name:'The Farm — Retangular',    sub:'Rural · Rústico',  img:'images/IMG_5002.jpeg', badge:null,        subcat:'Rural', desc:'Placa retangular ornamental com cena de fazenda: vacas, trator, árvores e galinhas.'},
      {id:'f19',name:'Fazenda Oval Animais',     sub:'Rural · Família',  img:'images/IMG_5004.jpeg', badge:'Novo',      subcat:'Rural', desc:'Moldura oval com fazenda ao pôr do sol: vacas, cavalos, cão, gato, galo e árvore.'},
      {id:'f20',name:'Farm Circular Nome',       sub:'Rural · Country',  img:'images/IMG_5006.jpeg', badge:'Top Venda', subcat:'Rural', desc:'Composição circular com trator, fardos de feno, celeiro e gado dentro do nome personalizado.'},
    ]
  }
};

// ─── STATE ──────────────────────────────────────────────────────
let currentCat = null;
let currentProduct = null;
let currentSubcat = 'Todos';
let selectedColor = 'gold';
let selectedSize = '30cm';
let customNumber = '';
let customName = '';

// ─── PLACEHOLDER SVG para produtos sem imagem ───────────────────
function getPlaceholder(catKey) {
  const icons = {
    numericas: '🔢', animal: '🐾', mandala: '✿',
    auto: '🏎', placas: '🪧', fazenda: '🌾'
  };
  const icon = icons[catKey] || '✦';
  return `<div class="placeholder-thumb"><span>${icon}</span></div>`;
}

// ─── CATEGORY ──────────────────────────────────────────────────
function openCategory(key) {
  currentCat = key;
  currentSubcat = 'Todos';
  const cat = categories[key];
  document.getElementById('cat-panel-title').textContent = cat.name;
  document.getElementById('cat-panel-count').textContent = cat.products.length + ' modelos';
  renderSubcatTabs(cat);
  renderProducts(cat.products);
  const panel = document.getElementById('cat-panel');
  panel.classList.add('open');
  panel.scrollTop = 0;
}

function closeCategory() {
  document.getElementById('cat-panel').classList.remove('open');
}

function renderSubcatTabs(cat) {
  document.getElementById('subcat-tabs').innerHTML = cat.subcats.map(s =>
    `<button class="subcat-tab${s === currentSubcat ? ' active' : ''}" onclick="filterSubcat('${s}')">${s}</button>`
  ).join('');
}

function filterSubcat(sub) {
  currentSubcat = sub;
  const cat = categories[currentCat];
  document.querySelectorAll('#subcat-tabs .subcat-tab').forEach((t, i) =>
    t.classList.toggle('active', cat.subcats[i] === sub)
  );
  const filtered = sub === 'Todos' ? cat.products : cat.products.filter(p => p.subcat === sub);
  renderProducts(filtered);
}

function renderProducts(products) {
  document.getElementById('products-grid').innerHTML = products.map(p => {
    const thumbContent = p.img
      ? `<img src="${p.img}" alt="${p.name}" class="product-real-img" loading="lazy">`
      : getPlaceholder(currentCat);
    return `
    <div class="product-card" onclick="openDetail('${currentCat}','${p.id}')">
      <div class="product-thumb">
        ${thumbContent}
        ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-sub">${p.sub}</div>
        <div class="product-from">Sob consulta</div>
      </div>
    </div>`;
  }).join('');
}

// ─── PRODUCT DETAIL ─────────────────────────────────────────────
function openDetail(catKey, productId) {
  const cat = categories[catKey];
  const product = cat.products.find(p => p.id === productId);
  currentProduct = product;
  selectedColor = 'gold';
  selectedSize = '30cm';
  customNumber = '';
  customName = '';

  document.getElementById('detail-panel-title').textContent = product.name;

  const imgWrap = document.getElementById('detail-img');
  if (product.img) {
    imgWrap.innerHTML = `
      <img src="${product.img}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;display:block;">
      <div class="detail-img-overlay" style="background:linear-gradient(to bottom,transparent 55%,rgba(13,13,13,0.15) 100%)"></div>
      <div class="detail-gallery-dots">
        <div class="gallery-dot active"></div>
        <div class="gallery-dot"></div>
        <div class="gallery-dot"></div>
      </div>`;
  } else {
    imgWrap.innerHTML = `
      <div class="detail-placeholder">${getPlaceholder(catKey)}</div>
      <div class="detail-img-overlay"></div>
      <div class="detail-gallery-dots">
        <div class="gallery-dot active"></div>
        <div class="gallery-dot"></div>
        <div class="gallery-dot"></div>
      </div>`;
  }

  document.getElementById('detail-body').innerHTML = `
    <div class="detail-cat-label">${cat.name}</div>
    <h2 class="detail-name">${product.name}</h2>
    <p class="detail-desc">${product.desc} Produzido em MDF de alta qualidade com corte a laser de precisão. Acabamento lixado e pronto para pintura ou uso natural.</p>

    ${cat.nameCustom ? `
    <div class="personalize-box">
      <div class="personalize-title">Personalize com o nome da propriedade</div>
      <div class="name-preview-wrap">
        <div class="name-preview-text" id="name-display">Fazenda Exemplo</div>
      </div>
      <input class="num-input" type="text" placeholder="Ex: Fazenda Dois Irmãos, Rancho Oliveira..." maxlength="30" id="name-input-field" value="" oninput="updateFazendaName(this.value)" style="font-size:16px;">
    </div>` : ''}

    ${cat.numeric ? `
    <div class="personalize-box">
      <div class="personalize-title">Personalize com seu número</div>
      <div class="num-preview-wrap">
        <div class="num-preview-art color-${selectedColor}" id="num-preview-art">
          <div class="num-preview-num" id="num-display">12</div>
        </div>
      </div>
      <input class="num-input" type="text" placeholder="Digite seu número (ex: 42)" maxlength="6" id="num-input-field" value="" oninput="updateNumber(this.value)">
    </div>` : ''}

    <div class="options-section">
      <div class="options-label">Tamanho</div>
      <div class="size-options" id="size-opts">
        ${['20cm','30cm','40cm','50cm','60cm','80cm'].map(s =>
          `<button class="size-btn${s === selectedSize ? ' active' : ''}" onclick="selectSize('${s}')">${s}</button>`
        ).join('')}
      </div>
    </div>

    <div class="options-section">
      <div class="options-label">Cor / Acabamento</div>
      <div class="color-options" id="color-opts">
        <div class="color-btn${selectedColor==='black'?' active':''}" onclick="selectColor('black')">
          <div class="color-swatch swatch-black"></div>
          <span class="color-name">Preto Micro-texturizado</span>
        </div>
        <div class="color-btn${selectedColor==='white'?' active':''}" onclick="selectColor('white')">
          <div class="color-swatch swatch-white"></div>
          <span class="color-name">Branco</span>
        </div>
        <div class="color-btn${selectedColor==='gold'?' active':''}" onclick="selectColor('gold')">
          <div class="color-swatch swatch-gold"></div>
          <span class="color-name">Dourado</span>
        </div>
      </div>
    </div>

    <div class="options-section">
      <div class="options-label">Observações</div>
      <textarea class="obs-field" id="obs-field" placeholder="Ex: medida específica, tipo de instalação, acabamento especial..." rows="3"></textarea>
    </div>

    <div class="cta-group">
      <a class="btn-primary" href="#" onclick="sendWhatsApp(event)">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Solicitar Orçamento pelo WhatsApp
      </a>
      <button class="btn-secondary" onclick="closeDetail()">← Voltar ao Catálogo</button>
    </div>`;

  const panel = document.getElementById('detail-panel');
  panel.classList.add('open');
  panel.scrollTop = 0;
}

function closeDetail() {
  document.getElementById('detail-panel').classList.remove('open');
}

// ─── PERSONALIZATION ─────────────────────────────────────────────
function updateFazendaName(val) {
  customName = val;
  const display = document.getElementById('name-display');
  if (display) {
    display.textContent = val || 'Fazenda Exemplo';
    display.classList.add('num-pulse');
    setTimeout(() => display.classList.remove('num-pulse'), 300);
  }
}

function updateNumber(val) {
  customNumber = val;
  const display = document.getElementById('num-display');
  if (display) {
    display.textContent = val || '—';
    display.classList.add('num-pulse');
    setTimeout(() => display.classList.remove('num-pulse'), 300);
  }
}

function selectSize(size) {
  selectedSize = size;
  document.querySelectorAll('#size-opts .size-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent === size);
  });
}

function selectColor(color) {
  selectedColor = color;
  document.querySelectorAll('#color-opts .color-btn').forEach((btn, i) => {
    btn.classList.toggle('active', ['black','white','gold'][i] === color);
  });
  const art = document.getElementById('num-preview-art');
  if (art) art.className = `num-preview-art color-${color}`;
}

// ─── WHATSAPP ────────────────────────────────────────────────────
function sendWhatsApp(e) {
  e.preventDefault();
  const cat = categories[currentCat];
  const obs = document.getElementById('obs-field')?.value || '';
  const colorNames = { black: 'Preto Microtexturizado', white: 'Branco', gold: 'Dourado' };

  let msg = `Olá! Vim pelo catálogo da *Vértice Decor* e tenho interesse:\n\n`;
  msg += `📦 *Produto:* ${currentProduct.name}\n`;
  msg += `📂 *Categoria:* ${cat.name}\n`;
  msg += `📏 *Tamanho:* ${selectedSize}\n`;
  msg += `🎨 *Cor:* ${colorNames[selectedColor]}\n`;
  if (cat.numeric && customNumber) msg += `🔢 *Número:* ${customNumber}\n`;
  if (cat.nameCustom && customName) msg += `🏡 *Nome da propriedade:* ${customName}\n`;
  if (obs) msg += `📝 *Obs:* ${obs}\n`;
  msg += `\nAguardo informações sobre prazo e valor. Obrigado!`;

  window.open(`https://wa.me/5500000000000?text=${encodeURIComponent(msg)}`, '_blank');
}

// ─── SCROLL TOP ──────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 300);
});

// ─── SWIPE BACK (MOBILE) ─────────────────────────────────────────
let touchStartX = 0;
document.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
}, { passive: true });

document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (dx > 80) {
    const detail = document.getElementById('detail-panel');
    const cat = document.getElementById('cat-panel');
    if (detail.classList.contains('open')) closeDetail();
    else if (cat.classList.contains('open')) closeCategory();
  }
}, { passive: true });
