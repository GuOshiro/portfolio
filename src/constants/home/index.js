export const menuItems = ["services", "midia", "portfolio", "blog", "jobs"]

export const homeContent = {
  card: [
    {
      image: 'devops',
      title: { as: "h4", label: "home.cardOptions.devops" },
      subtitle: { as: "p", label: "home.cardOptions.suportEvolution" },
    },
    {
      image: 'agileProjects',
      title: { as: "h4", label: "home.cardOptions.agileProjects" },
      subtitle: { as: "p", label: "home.cardOptions.makeProjectsReality" },
    },
    {
      image: 'developerOnDemand',
      title: { as: "h4", label: "home.cardOptions.developerOnDemand" },
      subtitle: {
        as: "p",
        label: "home.cardOptions.getOurDesignersAndDevelopers",
      },
    },
  ],
  clients: {
    title: { as: "h4", label: "home.whoWeDevelop.whoWeDevelop" },
    subtitle: {
      as: "p",
      label: "home.whoWeDevelop.designAndSoftwareDeveloper",
    },
  },
  cases: {
    title: { as: "h4", label: "home.develop.developFor" },
    clients: [
      {
        company: "Suzano Papel e Celulose",
        employee: "Mario Del Matto",
        text:
          "Temos uma excelente parceria com a X-Apps no desenvolvimento de projetos, agora com três sistemas na área de biotecnologia e dois para demandas internas.",
      },
      {
        company: "Engenheiro BMW Motorrad",
        employee: "Sérgio Fossa",
        text:
          "A parceria com a X-Apps proporcionou a interação da moto com o celular, como também espelhar as rotas para andar em grupo.",
      },
    ],
  },
  midia: {
    title: { as: "h4", label: "home.midia.midia" },
  },
}
