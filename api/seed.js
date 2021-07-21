const {
  Recruiters,
  Companies,
  Areas,
  States,
  Seniority,
  TypeEmployed,
  Jobs,
  Modality,
} = require('./db/models/index')

const recruiters = [
  {
    name: 'Guillermo Martin',
    surname: 'Otamendi',
    email: 'GuillermoMartin@Otamendi.com',
    country: 'Argentina',
    state: 'CABA',
    bio: 'Soy una descripcion de ejemplo',
    img: 'https://randomuser.me/api/portraits/men/18.jpg',
    favoriteArea1: 'Ingenierías',
    favoriteArea2: 'Comercial, Ventas y Negocios',
    favoriteArea3: 'Recursos Humanos y Capacitación',
    seniority1: 'SemiSenior/Senior',
    seniority2: 'Jefetura',
    seniority3: 'SemiSenior/Senior',
    rating: 10,
  },
  {
    name: 'Eva',
    surname: 'Camacho',
    email: 'Eva@Camacho.com',
    country: 'Argentina',
    state: 'Cordoba',
    bio: 'Soy una descripcion de ejemplo',
    img: 'https://randomuser.me/api/portraits/women/84.jpg',
    favoriteArea1: 'Comercial, Ventas y Negocios',
    favoriteArea2: 'Atención al Cliente, Call Center y Telemarketing',
    favoriteArea3: 'Seguros',
    seniority1: 'SemiSenior/Senior',
    seniority2: 'Jefetura',
    seniority3: 'Training/Junior',
    rating: 4,
  },
  {
    name: 'Alejandra',
    surname: 'Castillo',
    email: 'Alejandra@Castillo.com',
    country: 'Argentina',
    state: 'Vicente Lopez',
    bio: 'Soy una descripcion de ejemplo',
    img: 'https://randomuser.me/api/portraits/women/79.jpg',
    favoriteArea1: 'Gerencia y Dirección General',
    favoriteArea2: 'Recursos Humanos y Capacitación',
    favoriteArea3: 'Administración, Contabilidad y Finanzas',
    seniority1: 'Gerente/Director',
    seniority2: 'Jefetura',
    seniority3: 'SemiSenior/Senior',
    rating: 8,
  },
  {
    name: 'Mario',
    surname: 'Juarez',
    email: 'Mario@Juarez.com',
    country: 'Argentina',
    state: 'CABA',
    bio: 'Soy una descripcion de ejemplo',
    img: 'https://randomuser.me/api/portraits/men/62.jpg',
    favoriteArea1: 'Administración, Contabilidad y Finanzas',
    favoriteArea2: 'Atención al Cliente, Call Center y Telemarketing',
    favoriteArea3: 'Legales',
    seniority1: 'SemiSenior/Senior',
    seniority2: 'Training/Junior',
    seniority3: 'Jefetura',
  },
  {
    name: 'Marisa',
    surname: 'Lembergier',
    email: 'Marisa@Lembergier.com',
    country: 'Argentina',
    state: 'CABA',
    bio: 'Soy una descripcion de ejemplo',
    img: 'https://randomuser.me/api/portraits/women/37.jpg',
    favoriteArea1: 'Recursos Humanos y Capacitación',
    favoriteArea2: 'Secretarias y Recepción',
    favoriteArea3: 'Administración, Contabilidad y Finanzas',
    seniority1: 'Training/Junior',
    seniority2: 'SemiSenior/Senior',
    seniority3: 'Jefetura',
  },
  {
    name: 'Asencio',
    surname: 'Sebastian',
    email: 'Asencio@Sebastian.com',
    country: 'Argentina',
    state: 'Comodoro Rivadavia',
    bio: 'Soy una descripcion de ejemplo',
    img: 'https://randomuser.me/api/portraits/men/0.jpg',
    favoriteArea1: 'Minería, Petróleo y Gas',
    favoriteArea2: 'Ingenierías',
    favoriteArea3: 'Ingeniería Civil y Construcción',
    seniority1: 'Jefetura',
    seniority2: 'Gerente/Director',
    seniority3: 'SemiSenior/Senior',
  },
  {
    name: 'Estefania',
    surname: 'Audia',
    email: 'Estefania@Audia.com',
    country: 'Argentina',
    state: 'CABA',
    bio: 'Soy una descripcion de ejemplo',
    img: 'https://randomuser.me/api/portraits/women/78.jpg',
    favoriteArea1: 'Administración, Contabilidad y Finanzas',
    favoriteArea2: 'Comercial, Ventas y Negocios',
    favoriteArea3: 'Atención al Cliente, Call Center y Telemarketing',
    seniority1: 'SemiSenior/Senior',
    seniority2: 'Training/Junior',
    seniority3: 'Jefetura',
  },
  {
    name: 'Verónica Ana',
    surname: 'Rozzi',
    email: 'VerónicaAna@Rozzi.com',
    country: 'Argentina',
    state: 'CABA',
    bio: 'Soy una descripcion de ejemplo',
    img: 'https://randomuser.me/api/portraits/women/56.jpg',
    favoriteArea1: 'Administración, Contabilidad y Finanzas',
    favoriteArea2: 'Secretarias y Recepción',
    favoriteArea3: 'Salud, Medicina, Enfermería y Farmacia',
    seniority1: 'Gerente/Director',
    seniority2: 'Jefetura',
    seniority3: 'SemiSenior/Senior',
  },
  {
    name: 'Braian',
    surname: 'Netto',
    email: 'Braian@Netto.com',
    country: 'Argentina',
    state: 'GBA SUR',
    bio: 'Soy una descripcion de ejemplo',
    img: 'https://randomuser.me/api/portraits/women/31.jpg',
    favoriteArea1: 'Administración, Contabilidad y Finanzas',
    favoriteArea2: 'Comercial, Ventas y Negocios',
    favoriteArea3: 'Comunicación, Relaciones Institucionales y Públicas',
    seniority1: 'SemiSenior/Senior',
    seniority2: 'Jefetura',
    seniority3: 'Training/Junior',
  },
  {
    name: 'Florencia',
    surname: 'Podestá',
    email: 'Florencia@Podestá.com',
    country: 'Argentina',
    state: 'GBA SUR',
    bio: 'Soy una descripcion de ejemplo',
    img: 'https://randomuser.me/api/portraits/women/54.jpg',
    favoriteArea1: 'Administración, Contabilidad y Finanzas',
    favoriteArea2: 'Recursos Humanos y Capacitación',
    favoriteArea3: 'Ingenierías',
    seniority1: 'SemiSenior/Senior',
    seniority2: 'Jefetura',
    seniority3: 'Training/Junior',
  },
  {
    name: 'Mariana',
    surname: 'Jenichen',
    email: 'Mariana@Jenichen.com',
    country: 'Argentina',
    state: 'GBA NORTE',
    bio: 'Soy una descripcion de ejemplo',
    img: 'https://randomuser.me/api/portraits/women/87.jpg',
    favoriteArea1: 'Seguros',
    favoriteArea2: 'Comercial, Ventas y Negocios',
    favoriteArea3: 'Marketing y Publicidad',
    seniority1: 'Jefetura',
    seniority2: 'Gerente/Director',
    seniority3: 'SemiSenior/Senior',
  },
  {
    name: 'Analía',
    surname: 'Nuñez',
    email: 'Analía@Nuñez.com',
    country: 'Argentina',
    state: 'CABA',
    bio: 'Soy una descripcion de ejemplo',
    img: 'https://randomuser.me/api/portraits/women/23.jpg',
    favoriteArea1: 'Comercial, Ventas y Negocios',
    favoriteArea2: 'Gerencia y Dirección General',
    favoriteArea3: 'Gastronomía y Turismo',
    seniority1: 'Gerente/Director',
    seniority2: 'Jefetura',
    seniority3: 'Training/Junior',
  },
  {
    name: 'Alejandro',
    surname: 'Comegna',
    email: 'Alejandro@Comegna.com',
    country: 'Argentina',
    state: 'CABA',
    bio: 'Soy una descripcion de ejemplo',
    img: 'https://randomuser.me/api/portraits/men/74.jpg',
    favoriteArea1: 'Administración, Contabilidad y Finanzas',
    favoriteArea2: 'Recursos Humanos y Capacitación',
    favoriteArea3: 'Producción y Manufactura',
    seniority1: 'SemiSenior/Senior',
    seniority2: 'Training/Junior',
    seniority3: 'Gerente/Director',
  },
  {
    name: 'CL',
    surname: 'select',
    email: 'CL@select.com',
    country: 'Argentina',
    state: 'Mendoza',
    bio: 'Soy una descripcion de ejemplo',
    img: 'https://randomuser.me/api/portraits/men/14.jpg',
    favoriteArea1: 'Comercial, Ventas y Negocios',
    favoriteArea2: 'Administración, Contabilidad y Finanzas',
    favoriteArea3: 'Seguros',
    seniority1: 'SemiSenior/Senior',
    seniority2: 'Jefetura',
    seniority3: 'Training/Junior',
  },
  {
    name: 'Monica',
    surname: 'Puppi',
    email: 'Monica@Puppi.com',
    country: 'Argentina',
    state: 'CABA',
    bio: 'Soy una descripcion de ejemplo',
    img: 'https://randomuser.me/api/portraits/women/4.jpg',
    favoriteArea1: 'Gerencia y Dirección General',
    favoriteArea2: 'Salud, Medicina, Enfermería y Farmacia',
    favoriteArea3: 'Comercial, Ventas y Negocios',
    seniority1: 'Gerente/Director',
    seniority2: 'Jefetura',
    seniority3: 'SemiSenior/Senior',
  },
  {
    name: 'Christian',
    surname: 'Lopez',
    email: 'Christian@Lopez.com',
    country: 'Argentina',
    state: 'Cordoba',
    bio: 'Soy una descripcion de ejemplo',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    favoriteArea1: 'Administración, Contabilidad y Finanzas',
    favoriteArea2: 'Recursos Humanos y Capacitación',
    favoriteArea3: 'Ingenierías',
    seniority1: 'SemiSenior/Senior',
    seniority2: 'Training/Junior',
    seniority3: 'Jefetura',
  },
  {
    name: 'Nadia',
    surname: 'Gonzalez',
    email: 'Nadia@Gonzalez.com',
    country: 'Argentina',
    state: 'Cordoba',
    bio: 'Soy una descripcion de ejemplo',
    img: 'https://randomuser.me/api/portraits/women/83.jpg',
    favoriteArea1: 'Tecnología, Sistemas y Telecomunicaciones',
    favoriteArea2: 'Recursos Humanos y Capacitación',
    favoriteArea3: 'Administración, Contabilidad y Finanzas',
    seniority1: 'Gerente/Director',
    seniority2: 'SemiSenior/Senior',
    seniority3: 'SemiSenior/Senior',
  },
  {
    name: 'Verónica',
    surname: 'Guglielmotti',
    email: 'Verónica@Guglielmotti.com',
    country: 'Argentina',
    state: 'Mendoza',
    bio: 'Soy una descripcion de ejemplo',
    img: 'https://randomuser.me/api/portraits/women/83.jpg',
    favoriteArea1: 'Salud, Medicina, Enfermería y Farmacia',
    favoriteArea2: 'Ingeniería Civil y Construcción',
    favoriteArea3: 'Aduana y Comercio Exterior',
    seniority1: 'SemiSenior/Senior',
    seniority2: 'Jefetura',
    seniority3: 'Gerente/Director',
  },
  {
    name: 'Vanesa',
    surname: 'Goldmann',
    email: 'Vanesa@Goldmann.com',
    country: 'Argentina',
    state: 'Cordoba',
    bio: 'Soy una descripcion de ejemplo',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    favoriteArea1: 'Administración, Contabilidad y Finanzas',
    favoriteArea2: 'Recursos Humanos y Capacitación',
    favoriteArea3: 'Secretarias y Recepción',
    seniority1: 'SemiSenior/Senior',
    seniority2: 'Training/Junior',
    seniority3: 'Jefetura',
  },
  {
    name: 'Claudio',
    surname: 'Amitrano',
    email: 'Claudio@Amitrano.com',
    country: 'Argentina',
    state: 'Cordoba',
    bio: 'Soy una descripcion de ejemplo',
    img: 'https://randomuser.me/api/portraits/men/29.jpg',
    favoriteArea1: 'Administración, Contabilidad y Finanzas',
    favoriteArea2: 'Comercial, Ventas y Negocios',
    favoriteArea3: 'Recursos Humanos y Capacitación',
    seniority1: 'Jefetura',
    seniority2: 'SemiSenior/Senior',
    seniority3: 'Gerente/Director',
  },
  {
    name: 'Vanesa',
    surname: 'Goldmann',
    email: 'Vanesa@Goldmann.com',
    country: 'Argentina',
    state: 'Santa Fe',
    bio: 'Soy una descripcion de ejemplo',
    img: 'https://randomuser.me/api/portraits/women/78.jpg',
    favoriteArea1: 'Administración, Contabilidad y Finanzas',
    favoriteArea2: 'Recursos Humanos y Capacitación',
    favoriteArea3: 'Secretarias y Recepción',
    seniority1: 'SemiSenior/Senior',
    seniority2: 'Training/Junior',
    seniority3: 'Jefetura',
  },
  {
    name: 'Ileana',
    surname: 'Piccioni',
    email: 'Ileana@Piccioni.com',
    country: 'Argentina',
    state: 'CABA',
    bio: 'Soy una descripcion de ejemplo',
    img: 'https://randomuser.me/api/portraits/women/1.jpg',
    favoriteArea1: 'Tecnología, Sistemas y Telecomunicaciones',
    favoriteArea2: 'Administración, Contabilidad y Finanzas',
    favoriteArea3: 'Comercial, Ventas y Negocios',
    seniority1: 'SemiSenior/Senior',
    seniority2: 'Jefetura',
    seniority3: 'Training/Junior',
  },
  {
    name: 'Josefina',
    surname: 'Rodriguez',
    email: 'Josefina@Rodriguez.com',
    country: 'Argentina',
    state: 'CABA',
    bio: 'Soy una descripcion de ejemplo',
    img: 'https://randomuser.me/api/portraits/women/17.jpg',
    favoriteArea1: 'Marketing y Publicidad',
    favoriteArea2: 'Recursos Humanos y Capacitación',
    favoriteArea3: 'Gerencia y Dirección General',
    seniority1: 'Gerente/Director',
    seniority2: 'Jefetura',
    seniority3: 'SemiSenior/Senior',
  },
  {
    name: 'Maida',
    surname: 'Garcia',
    email: 'Maida@Garcia.com',
    country: 'Argentina',
    state: 'CABA',
    bio: 'Soy una descripcion de ejemplo',
    img: 'https://randomuser.me/api/portraits/women/77.jpg',
    favoriteArea1: 'Tecnología, Sistemas y Telecomunicaciones',
    favoriteArea2: 'Administración, Contabilidad y Finanzas',
    favoriteArea3: 'Recursos Humanos y Capacitación',
    seniority1: 'SemiSenior/Senior',
    seniority2: 'SemiSenior/Senior',
    seniority3: 'SemiSenior/Senior',
  },
  {
    name: 'Inés',
    surname: 'Schenone',
    email: 'Inés@Schenone.com',
    country: 'Argentina',
    state: 'Buenos Aires',
    bio: 'Soy una descripcion de ejemplo',
    img: 'https://randomuser.me/api/portraits/women/43.jpg',
    favoriteArea1: 'Administración, Contabilidad y Finanzas',
    favoriteArea2: 'Comercial, Ventas y Negocios',
    favoriteArea3: 'Producción y Manufactura',
    seniority1: 'Gerente/Director',
    seniority2: 'Jefetura',
    seniority3: 'SemiSenior/Senior',
  },
  {
    name: 'Anabella',
    img: 'https://randomuser.me/api/portraits/women/63.jpg',
    surname: 'Albornoz',
    email: 'Anabella@Albornoz.com',
    country: 'Argentina',
    state: 'Mar del Plata',
    bio: 'Soy una descripcion de ejemplo',
    favoriteArea1: 'Recursos Humanos y Capacitación',
    favoriteArea2: 'Administración, Contabilidad y Finanzas',
    favoriteArea3: 'Tecnología, Sistemas y Telecomunicaciones',
    seniority1: 'SemiSenior/Senior',
    seniority2: 'Jefetura',
    seniority3: 'Training/Junior',
  },
]

const companies = [
  {
    name: 'DSNTEC',
    address: 'Av. Santa Fe 4010,',
    email: 'dsntec@dsntec.com',
    img: 'https://media-exp1.licdn.com/dms/image/C4D0BAQG7z3D-htOC7A/company-logo_200_200/0/1518870857507?e=2159024400&v=beta&t=Kd7mQszqqmrQO3_LQxqCXpQY7qRvFW7ODQ0XfreeJSM',
    bio: 'Our company combines know-how and a deep domain understanding of technology to provide a range of IT outsourcing services from Product Development, custom application programming, to IT consulting services to enterprises all over the world.',
  },
  {
    name: 'Swiss Medical Group',
    address: 'Av. Maipú 1139',
    email: 'swissmedicalgroup@swissmedicalgroup.com',
    img: 'https://prepagas-precios.com.ar/wp-content/uploads/2020/06/swissmedical-precios-1038x572.jpg',
    bio: 'Swiss Medical Group es uno de los principales grupos empresarios de Argentina que se dedica a la protección de personas y es líder en el mercado de la salud.',
  },
  {
    name: 'Camuzzi Gas',
    address: 'Mitre 1260',
    email: 'camuzzigas@camuzzigas.com',
    img: 'https://www.camuzzigas.com/wp-content/uploads/2019/06/generica-logo-camuzzi-gas-2019.jpg',
    bio: 'Somos la mayor distribuidora de gas natural de la Argentina en términos de volumen, cubriendo el 45% del paísen dos regiones contiguas a través de Camuzzi Gas Pampeana y Camuzzi Gas del Sur.',
  },
  {
    name: 'Accusys Technology',
    address: 'Av. Córdoba 673',
    email: 'accusystechnology@accusystechnology.com',
    img: 'https://media-exp3.licdn.com/dms/image/C4D0BAQGYiIk7JYRxLg/company-logo_200_200/0/1519928788078?e=2159024400&v=beta&t=KSSqWoV1IGQdMyOd8mp8ns-DdDED57nqHceS7989C0o',
    bio: 'Accusys Technology, Compañía Líder regional en desarrollo y mantenimiento de soluciones informáticas ',
  },
]

const areas = [
  { name: 'Ingenierías' },
  { name: 'Comercial, Ventas y Negocios' },
  { name: 'Gerencia y Dirección General' },
  { name: 'Administración, Contabilidad y Finanzas' },
  { name: 'Recursos Humanos y Capacitación' },
  { name: 'Minería, Petróleo y Gas' },
  { name: 'Seguros' },
  { name: 'Tecnología, Sistemas y Telecomunicaciones' },
  { name: 'Salud, Medicina, Enfermería y Farmacia' },
  { name: 'Marketing y Publicidad' },
]

const states = [
  { name: 'CABA' },
  { name: 'Buenos Aires' },
  { name: 'Catamarca' },
  { name: 'Chaco' },
  { name: 'Chubut' },
  { name: 'Córdoba' },
  { name: 'Corrientes' },
  { name: 'Entre Ríos' },
  { name: 'Formosa' },
  { name: 'Jujuy' },
  { name: 'La Pampa' },
  { name: 'La Rioja' },
  { name: 'Mendoza' },
  { name: 'Misiones' },
  { name: 'Neuquén' },
  { name: 'Rio Negro' },
  { name: 'Salta' },
  { name: 'San Juan' },
  { name: 'San Luis' },
  { name: 'Santa Cruz' },
  { name: 'Santa Fe' },
  { name: 'Santiago del Estero' },
  { name: 'Tierra del Fuego' },
  { name: 'Tucumán' },
]

const seniorities = [
  { name: 'Trainee' },
  { name: 'Junior' },
  { name: 'Semi-Senior' },
  { name: 'Senior' },
  { name: 'Manager' },
]

const modalities = [{ name: 'Presencial' }, { name: 'Remota' }]

const typesEmployed = [{ name: 'Fulltime' }, { name: 'Part-time' }]

const jobs = [
  {
    title: 'Fullstack',
    areaId: '2',
    seniorityId: '2',
    description: 'Alto laburo amigo',
    country: 'Argentina',
    stateId: '2',
    typeemloyedId: '1',
    salary: 10000,
    modalityId: '2',
    companyId: 2,
    rating: 6,
    date: new Date(
      new Date().setDate(new Date().getDate() - Math.floor(Math.random() * 7))
    ),
  },
  {
    title: 'Fullstack',
    areaId: '1',
    seniorityId: '1',
    description: 'Alto laburo amigo',
    country: 'Argentina',
    stateId: '1',
    typeemloyedId: '1',
    salary: 10000,
    modalityId: '1',
    companyId: 1,
    rating: 8,
    date: new Date(
      new Date().setDate(new Date().getDate() - Math.floor(Math.random() * 7))
    ),
  },
  {
    title: 'Fullstack',
    areaId: '1',
    seniorityId: '1',
    description: 'Alto laburo amigo',
    country: 'Argentina',
    stateId: '1',
    typeemloyedId: '1',
    salary: 10000,
    modalityId: '1',
    companyId: 1,
    rating: 3,
    date: new Date(
      new Date().setDate(new Date().getDate() - Math.floor(Math.random() * 7))
    ),
  },
  {
    title: 'Fullstack',
    areaId: '3',
    seniorityId: '3',
    description: 'Alto laburo amigo',
    country: 'Argentina',
    stateId: '3',
    typeemloyedId: '1',
    salary: 10000,
    modalityId: '3',
    companyId: 1,
    rating: 10,
    date: new Date(
      new Date().setDate(new Date().getDate() - Math.floor(Math.random() * 7))
    ),
  },
]

recruiters.map((recruiter) => {
  Recruiters.create(recruiter).then((user) =>
    console.log('usuario creado: ', user)
  )
})

companies.map((Company) => {
  Companies.create(Company).then((Company) =>
    console.log('Company creada: ', Company)
  )
})

areas.map((Area) => {
  Areas.create(Area).then((area) => {
    console.log('Area creada: ', area)
  })
})

states.map((State) => {
  States.create(State).then((state) => {
    console.log('State creado: ', state)
  })
})

seniorities.map((seniority) => {
  Seniority.create(seniority).then((data) => {
    console.log('Seniority creado: ', data)
  })
})

modalities.map((Modalities) => {
  Modality.create(Modalities).then((modalities) => {
    console.log('Modality creado: ', modalities)
  })
})

typesEmployed.map((types) => {
  TypeEmployed.create(types).then((type) => {
    console.log('Type of Employed creado: ', type)
  })
})

jobs.map((job) => {
  Jobs.create(job).then((jobCreated) => {
    Recruiters.findByPk(Math.floor(Math.random() * recruiters.length))
      .then((user) => user.addJob(jobCreated))
      .then(() => {
        console.log('job creado', jobCreated)
      })
  })
})
