// "use script";

class NftClass {
  constructor(image, name, creator, ethereum, views, favorites, description) {
    this.image = image;
    this.name = name;
    this.creator = creator;
    this.ethereum = ethereum;
    this.views = views;
    this.favorites = favorites;
    this.description = description;
  }
}

export const nft1 = new NftClass(
  "img/space-ga758f1522_640.jpg",
  "Flying Astronaut",
  "Bob Taylor",
  9.23,
  15,
  59,
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus magni maiores molestias mollitia nam nobis odio optio pariatur quae quaerat quo, rem sunt tempore velit veritatis voluptate voluptates! Assumenda!"
);

export const nft2 = new NftClass(
  "img/art-g388e5fb4f_640.jpg",
  "Death Mask",
  "John Smith",
  3.78,
  56,
  87,
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus magni maiores molestias mollitia nam nobis odio optio pariatur quae quaerat quo, rem sunt tempore velit veritatis voluptate voluptates! Assumenda!"
);

export const nft3 = new NftClass(
  "img/art-ga0bb51423_640.jpg",
  "Pink Shirt Guy",
  "Lucy Pudding",
  6.56,
  15,
  9,
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus magni maiores molestias mollitia nam nobis odio optio pariatur quae quaerat quo, rem sunt tempore velit veritatis voluptate voluptates! Assumenda!"
);

export const nft4 = new NftClass(
  "img/art-ga1ef76e48_640.jpg",
  "Green Monster",
  "Jacky Foster",
  15.04,
  78,
  45,
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus magni maiores molestias mollitia nam nobis odio optio pariatur quae quaerat quo, rem sunt tempore velit veritatis voluptate voluptates! Assumenda!"
);
