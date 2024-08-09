import Images from "./Images";
const sampleTags = [
    { name: "sneakers", image: Images.analyticsIcon.src },
    { name: "boots", image: Images.calenderIcon.src },
    { name: "sandals", image: Images.contactIcon.src },
    { name: "loafers", image: Images.dashboardIcon.src },
    { name: "heels", image: Images.dataMappingIcon.src },
    { name: "flats", image: Images.profileIcon.src },
  ];
  
  const sampleSearchQueries = [
    {
      query: "white sneakers",
      usersCount: 1104,
      image: "user1.jpg",
    },
    {
      query: "black boots",
      usersCount: 980,
      image: "user2.jpg",
    },
    {
      query: "red heels",
      usersCount: 760,
      image: "user3.jpg",
    },
  ];
  
  const sampleUserQueries = [
    {
      user: "User 1",
      query: "white sneakers",
      usersCount: 1104,
      image: "user1.jpg",
    },
    {
      user: "User 2",
      query: "white sneakers",
      usersCount: 1104,
      image: "user2.jpg",
    },
    {
      user: "User 3",
      query: "white sneakers",
      usersCount: 1104,
      image: "user3.jpg",
    },
  ];

    export {sampleTags,sampleUserQueries, sampleSearchQueries} 