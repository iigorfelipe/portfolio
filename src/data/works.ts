type Media = {
  viewMode: 'desktop' | 'mobile';
  path: string;
  alt: string;
};

type Works = {
  project: string;
  media: Media[];
  appLink: string;
  githubLink: string;
  descriptionEn: string;
  descriptionBr: string;
}

export const works: Works[] = [
  {
    project: 'Invoice Insight',
    media: [
      {
        viewMode: 'desktop',
        path: 'https://github.com/iigorfelipe/lets-organize/assets/87145566/05bcf366-7025-4fda-bd85-9e1db143f315',
        alt: 'gif'
      },
      {
        viewMode: 'desktop',
        path: 'https://github.com/iigorfelipe/lets-organize/assets/87145566/f5f590d6-b7e8-4253-9be6-c05d6a3db871',
        alt: 'gif'
      },    
    ],
    appLink: 'https://iigorfelipe.github.io/invoice-insight/',
    githubLink: 'https://github.com/iigorfelipe/invoice-insight',
    descriptionEn:  'Performance listing of clients and services by month. Includes graph and filtering by period.',
    descriptionBr: 'Listagem performática de clientes e prestações por mês. Inclui gráfico e filtragem por períodos.',
  },
  {
    project: 'Github Explorer',
    media: [
      {
        viewMode: 'desktop',
        path: '/portfolio/github-explorer.gif',
        alt: 'gif'
      },
      {
        viewMode: 'desktop',
        path: 'https://github.com/iigorfelipe/lets-organize/assets/87145566/7e309db1-8eff-43ba-8056-9c91433d4033',
        alt: 'gif'
      },
    ],
    appLink: 'https://iigorfelipe.github.io/github-explorer/',
    githubLink: 'https://github.com/iigorfelipe/github-explorer',
    descriptionEn: 'Explore GitHub repositories with ease. Filtering by type, language and sorting available.',
    descriptionBr: 'Explore repositórios GitHub com facilidade. Filtragem por tipo, linguagem e ordenação disponíveis.',
  },
  {
    project: 'Woovi',
    media: [
      {
        viewMode: 'mobile',
        path: 'https://github.com/user-attachments/assets/19cf46a5-b644-4f71-bc4e-6c5e3781c3d5',
        alt: 'img'
      },
      {
        viewMode: 'mobile',
        path: 'https://github.com/user-attachments/assets/50e42c20-ef16-4843-9d7e-94a0fba6774e',
        alt: 'img'
      },
      
    ],
    appLink: 'https://iigorfelipe.github.io/woovi/',
    githubLink: 'https://github.com/iigorfelipe/woovi',
    descriptionEn: 'Payment Guide: Pix and Installment Credit Card on Woovi',
    descriptionBr: 'Guia de Pagamento: Pix e Cartão de Crédito Parcelado no Woovi',
  },
  {
    project: 'Plann.er',
    media: [
      {
        viewMode: 'desktop',
        path: 'https://github.com/user-attachments/assets/d6c262b6-1eb5-4b41-9dfe-139bbb447272',
        alt: 'img',
      },
      {
        viewMode: 'desktop',
        path: 'https://github.com/user-attachments/assets/398fc057-5c60-439a-9a00-0f9395fc6abd',
        alt: 'img',
      },
    ],
    appLink: '',
    githubLink: 'https://github.com/iigorfelipe/planner',
    descriptionEn: 'Desktop site for creating travel plans with friends, registering activities, and saving useful links',
    descriptionBr: 'Site desktop para montar planos de viagem com amigos, registrar atividades e links úteis',
  },
  {
    project: 'eSports',
    media: [
      {
        viewMode: 'desktop',
        path: 'https://user-images.githubusercontent.com/87145566/192146150-dd2c85a0-9d37-4015-b17d-b5ba4d11b90a.png',
        alt: 'img'
      },
      {
        viewMode: 'mobile',
        path: '/portfolio/eSports-mobile.gif',
        alt: 'gif'
      },      
    ],
    appLink: '',
    githubLink: 'https://github.com/iigorfelipe/esports',
    descriptionEn: 'Find your duo by posting an ad in your favorite games',
    descriptionBr: 'Encontre o seu duo publicando um anúncio nos seus jogos favoritos',
  },
  {
    project: 'Tractian',
    media: [
      {
        viewMode: 'desktop',
        path: 'https://github.com/iigorfelipe/tractian-challenge/assets/87145566/539fa31c-d31c-4e13-98d5-dbb1f13c0031',
        alt: 'gif'
      },
      {
        viewMode: 'mobile',
        path: 'https://github.com/iigorfelipe/tractian-challenge/assets/87145566/3d426e0f-6854-40a6-8b91-744b539fde15',
        alt: 'gif'
      },      
    ],
    appLink: 'https://iigorfelipe.github.io/tractian-challenge/',
    githubLink: 'https://github.com/iigorfelipe/tractian-challenge',
    descriptionEn: "Hierarchical visualization of a company's assets, including components, assets, and locations.",
    descriptionBr: 'Visualização hierárquica dos ativos de uma empresa, abrangendo componentes, ativos e localizações',
  },
  {
    project: 'list',
    media: [
      {
        viewMode: 'mobile',
        path: 'https://github.com/iigorfelipe/lets-organize/assets/87145566/201bb38b-a548-4bdd-bbc7-7b34325302c9',
        alt: 'gif'
      },
      {
        viewMode: 'mobile',
        path: 'https://github.com/iigorfelipe/lets-organize/assets/87145566/2e8cca66-4c12-4625-98e5-9df8b6e5af68',
        alt: 'gif'
      },    
    ],
    appLink: 'https://iigorfelipe.github.io/lets-organize/',
    githubLink: 'https://github.com/iigorfelipe/lets-organize',
    descriptionEn: 'Create, update, remove, delete and reorganize a dynamic list',
    descriptionBr: 'Criar, atualizar, remover, eliminar e reorganizar uma lista dinâmica',
  },
  {
    project: 'Pikachu Run',
    media: [
      {
        viewMode: 'desktop',
        path: 'https://user-images.githubusercontent.com/87145566/172067720-c99b1314-e8b9-4e5b-a4b3-45cc938c8d9d.gif',
        alt: 'gif'
      },
      {
        viewMode: 'desktop',
        path: 'https://user-images.githubusercontent.com/87145566/172067751-5ed2e038-2672-46a3-bc96-75ca1f189f6c.gif',
        alt: 'gif'
      },    
    ],
    appLink: 'https://iigorfelipe.github.io/pikachu/',
    githubLink: 'https://github.com/iigorfelipe/pikachu/tree/master',
    descriptionEn: 'Simple game inspired by Pikachu love of ketchup',
    descriptionBr: 'Jogo simples inspirado no amor do Pikachu em ketchup',
  },
  {
    project: 'Portfolio',
    media: [
      {
        viewMode: 'desktop',
        path: 'https://user-images.githubusercontent.com/87145566/295727772-6a5311fd-d7ba-456b-ad40-36a588f3fd65.png',
        alt: 'img'
      },
      {
        viewMode: 'desktop',
        path: 'https://user-images.githubusercontent.com/87145566/191565496-c37c02de-06c2-4ed7-a0ee-faeb300e066b.png',
        alt: 'img'
      },    
    ],
    appLink: 'https://iigorfelipe.github.io/portfolio-ts',
    githubLink: 'https://github.com/iigorfelipe/portfolio-ts',
    descriptionEn: 'My first portfolio with a carousel display of projects and an animated navigation menu',
    descriptionBr: 'Meu primeiro portfolio com exibição dos projetos em carrossel ',
  },
]
