export const team = [
    {
        name: 'Humberto Jr. Guerra',
        linkedin: 'https://www.linkedin.com/in/humbertojrguerra/',
        github: 'https://github.com/HumbertoJr10',
        picture: 'https://res.cloudinary.com/dg1roy34p/image/upload/v1675131395/SmartNest/d7d21yd1qbnb744kek6y.jpg'
    },
    {
        name: 'Federico Arrascaeta',
        linkedin: 'https://www.linkedin.com/in/arrascaetaf/',
        github: 'https://github.com/ArrascaetaFedericoIgnacio',
        picture: ''
    },
    {
        name: 'Saul Paredes',
        linkedin: 'https://www.linkedin.com/in/saul-paredes-03a22622b/',
        github: 'https://github.com/blackgg88',
        picture: ''
    },
    {
        name: 'Diego Gonzalez',
        linkedin: 'https://www.linkedin.com/in/diegokernel/',
        github: 'https://github.com/KernelDiego',
        picture: ''
    },
    {
        name: 'Yeraldinne Sanabria',
        linkedin: 'https://www.linkedin.com/in/yeraldinne-sanabria-bb6970172/',
        github: 'https://github.com/Yeraldinnesan',
        picture: ''
    },
    {
        name: 'Milton Martin',
        linkedin: 'https://www.linkedin.com/in/milton-martin/',
        github: 'https://github.com/MiltonM96',
        picture: ''
    },
    {
        name: 'Kevin Picado',
        linkedin: 'https://www.linkedin.com/in/kevin-p-131203255/',
        github: 'https://github.com/kpv22',
        picture: ''
    },
    {
        name: 'Daniel Viuasus',
        linkedin: 'https://www.linkedin.com/in/daniel-viasus-a01788231/',
        github: 'https://github.com/alejandroViasus',
        picture: ''
    }
]

export const TeamSorted = team.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

 export interface Team {
    name: string
    linkedin: string
    github: string
    picture: string
  }

export interface LottieOptions {
    loop: boolean,
    autoplay: boolean,
    rendererSettings: { preserveAspectRatio: string}
  }

export const defaultOption: LottieOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};