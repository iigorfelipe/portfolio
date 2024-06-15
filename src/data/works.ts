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
    project: 'list',
    media: [
      {
        viewMode: 'mobile',
        path: '/portfolio/list.gif',
        alt: 'gif'
      },
      {
        viewMode: 'mobile',
        path: '/portfolio/list2.gif',
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
        path: 'https://github-production-user-asset-6210df.s3.amazonaws.com/87145566/295727772-6a5311fd-d7ba-456b-ad40-36a588f3fd65.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240614%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240614T164558Z&X-Amz-Expires=300&X-Amz-Signature=6baec1561dbc8b5ab8a91d85e476134a998c3b1d52175307d8387c837a8a7a83&X-Amz-SignedHeaders=host&actor_id=87145566&key_id=0&repo_id=543754666',
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
