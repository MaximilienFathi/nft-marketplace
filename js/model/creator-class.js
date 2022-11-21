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
    revenueData,
    expanseData,
    viewsData,
    profitMargin,
    salesEffectiveness,
    newViewsData,
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
    this.revenueData = revenueData;
    this.expanseData = expanseData;
    this.viewsData = viewsData;
    this.profitMargin = profitMargin;
    this.salesEffectiveness = salesEffectiveness;
    this.newViewsData = newViewsData;
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
  [65, 59, 80, 81, 56, 55, 40],
  [24, 50, 12, 65, 45, 73, 95],
  [65, 120, 80, 70, 30, 90, 200],
  [30, 70],
  [20, 80],
  [40, 60],
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad deleniti",
  "IMAGES/cosmos-g20ff2fd5e_640.png",
  "IMAGES/man-g238e36a78_640.png"
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
  [2, 23, 75, 12, 45, 52, 79],
  [78, 5, 45, 7, 24, 89, 77],
  [45, 14, 154, 75, 92, 4, 65],
  [10, 90],
  [76, 24],
  [34, 66],
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad deleniti",
  "IMAGES/bear-gfc11ffe9c_640.png",
  "IMAGES/man-g1679334f6_640.png"
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
  [56, 89, 12, 78, 98, 12, 23],
  [78, 56, 2, 46, 13, 7, 65],
  [66, 178, 45, 26, 198, 100, 57],
  [25, 75],
  [55, 45],
  [76, 24],
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad deleniti",
  "IMAGES/memphis-g1020b08ad_640.jpg",
  "IMAGES/woman-g33cc37279_640.jpg"
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
  [88, 56, 46, 12, 90, 78, 65],
  [77, 44, 72, 33, 62, 19, 37],
  [125, 189, 146, 23, 74, 50, 64],
  [64, 36],
  [70, 30],
  [82, 18],
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad deleniti",
  "IMAGES/ice-cream-g26773c881_640.png",
  "IMAGES/woman-g11e4ec8b8_640.jpg"
);
