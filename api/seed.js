const Recruiters = require('../api/db/models/recruiters')

const recruiters = [
  {
    name: 'Guillermo Martin',
    surname: 'Otamendi',
    email: 'GuillermoMartin@Otamendi.com',
    country: 'Argentina',
    state: 'CABA',
    bio: 'Soy una descripcion de ejemplo',
    favoriteArea1: 'Ingenierías',
    favoriteArea2: 'Comercial, Ventas y Negocios',
    favoriteArea3: 'Recursos Humanos y Capacitación',
    seniority1: 'SemiSenior/Senior',
    seniority2: 'Jefetura',
    seniority3: 'SemiSenior/Senior',
  },
  {
    name: 'Eva',
    surname: 'Camacho',
    email: 'Eva@Camacho.com',
    country: 'Argentina',
    state: 'Cordoba',
    bio: 'Soy una descripcion de ejemplo',
    favoriteArea1: 'Comercial, Ventas y Negocios',
    favoriteArea2: 'Atención al Cliente, Call Center y Telemarketing',
    favoriteArea3: 'Seguros',
    seniority1: 'SemiSenior/Senior',
    seniority2: 'Jefetura',
    seniority3: 'Training/Junior',
  },
  {
    name: 'Alejandra',
    surname: 'Castillo',
    email: 'Alejandra@Castillo.com',
    country: 'Argentina',
    state: 'Vicente Lopez',
    bio: 'Soy una descripcion de ejemplo',
    favoriteArea1: 'Gerencia y Dirección General',
    favoriteArea2: 'Recursos Humanos y Capacitación',
    favoriteArea3: 'Administración, Contabilidad y Finanzas',
    seniority1: 'Gerente/Director',
    seniority2: 'Jefetura',
    seniority3: 'SemiSenior/Senior',
  },
  {
    name: 'Mario',
    surname: 'Juarez',
    email: 'Mario@Juarez.com',
    country: 'Argentina',
    state: 'CABA',
    bio: 'Soy una descripcion de ejemplo',
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
    favoriteArea1: 'Administración, Contabilidad y Finanzas',
    favoriteArea2: 'Comercial, Ventas y Negocios',
    favoriteArea3: 'Producción y Manufactura',
    seniority1: 'Gerente/Director',
    seniority2: 'Jefetura',
    seniority3: 'SemiSenior/Senior',
  },
  {
    name: 'Anabella',
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

recruiters.map((recruiter) => {
  Recruiters.create(recruiter).then((user) =>
    console.log('usuario creado: ', user)
  )
})