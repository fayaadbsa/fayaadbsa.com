const TAGS = {
  SCRUM: { id: "1", name: "scrum" },
  PERSONA: { id: "2", name: "persona" },
  UX: { id: "3", name: "user experience" },
  GIT: { id: "4", name: "git" },
};


export const blogsData = [
  {
    id: "1",
    title: "Mari Menggunakan Git Version Control dengan Baik",
    tags: [TAGS.GIT],
    imageUrl: "https://miro.medium.com/max/1400/1*9MMfDvHXhdVcJMSoBxd-eQ.jpeg",
    imageAlt: "Git",
    url: "https://fayaadbsa.medium.com/mari-menggunakan-git-version-control-dengan-baik-267fb984cbda",
  },
  {
    id: "2",
    title: "Pentingnya Persona dalam Pengembangan Produk",
    tags: [TAGS.UX, TAGS.PERSONA],
    imageUrl: "https://miro.medium.com/max/1400/0*vQ_M1IYdTMQWoH5K.jpg",
    imageAlt: "persona",
    url: "https://fayaadbsa.medium.com/user-centered-design-persona-c7c8b884ff6a",
  },
  {
    id: "3",
    title: "Scrum dalam Software Development",
    tags: [TAGS.SCRUM],
    imageUrl: "https://miro.medium.com/max/1400/0*e-IbP_d6liaTIwF2.jpg",
    imageAlt: "board",
    url: "https://fayaadbsa.medium.com/scrum-dalam-software-development-bc3da3ece287",
  },
];