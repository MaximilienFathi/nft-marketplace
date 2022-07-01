// "use script";

class CreatorClass {
  constructor(
    name,
    joinDate,
    items,
    views,
    followers,
    balance,
    totalSales,
    totalValue,
    description,
    bannerImg,
    profileImg
  ) {
    this.name = name;
    this.joinDate = joinDate;
    this.items = items;
    this.views = views;
    this.followers = followers;
    this.balance = balance;
    this.totalSales = totalSales;
    this.totalValue = totalValue;
    this.description = description;
    this.bannerImg = bannerImg;
    this.profileImg = profileImg;
  }
}

export const creator1 = new CreatorClass(
  "Bob Taylor",
  "January 2022",
  56,
  10,
  8,
  562,
  423,
  1500,
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad deleniti",
  "img/cosmos-g20ff2fd5e_640.png",
  "img/man-g238e36a78_640.png"
);

export const creator2 = new CreatorClass(
  "John Smith",
  "March 2020",
  23,
  30,
  4,
  45,
  213,
  645,
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad deleniti",
  "img/bear-gfc11ffe9c_640.png",
  "img/man-g1679334f6_640.png"
);

export const creator3 = new CreatorClass(
  "Lucy Pudding",
  "December 2021",
  145,
  78,
  34,
  789,
  541,
  956,
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad deleniti",
  "img/memphis-g1020b08ad_640.jpg",
  "img/woman-g33cc37279_640.jpg"
);

export const creator4 = new CreatorClass(
  "Jacky Foster",
  "August 2020",
  34,
  4,
  16,
  123,
  89,
  237,
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad deleniti",
  "img/ice-cream-g26773c881_640.png",
  "img/woman-g11e4ec8b8_640.jpg"
);
