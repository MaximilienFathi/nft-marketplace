// "use script";

class NftClass {
  constructor(
    name,
    creator,
    ethereum,
    dollar,
    views,
    favorites,
    description,
    image
  ) {
    this.name = name;
    this.creator = creator;
    this.ethereum = ethereum;
    this.dollar = dollar;
    this.views = views;
    this.favorites = favorites;
    this.description = description;
    this.image = image;
  }
}

export const nft1 = new NftClass(
  "Flying Astronaut",
  "Bob Taylor",
  9.23,
  0,
  15,
  59,
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam" +
    " doloribus magni maiores molestias mollitia nam nobis odio optio pariatur quae quaerat quo, rem sunt tempore velit veritatis voluptate voluptates! Assumenda!",
  "public/images/space-ga758f1522_640.jpg"
);

export const nft2 = new NftClass(
  "Death Mask",
  "John Smith",
  3.78,
  0,
  56,
  87,
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam" +
    " doloribus magni maiores molestias mollitia nam nobis odio optio pariatur quae quaerat quo, rem sunt tempore velit veritatis voluptate voluptates! Assumenda!",
  "public/images/art-g388e5fb4f_640.jpg"
);

export const nft3 = new NftClass(
  "Pink Shirt Guy",
  "Lucy Pudding",
  6.56,
  0,
  15,
  9,
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam" +
    " doloribus magni maiores molestias mollitia nam nobis odio optio pariatur quae quaerat quo, rem sunt tempore velit veritatis voluptate voluptates! Assumenda!",
  "public/images/art-ga0bb51423_640.jpg"
);

export const nft4 = new NftClass(
  "Green Monster",
  "Jacky Foster",
  15.04,
  0,
  78,
  45,
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam" +
    " doloribus magni maiores molestias mollitia nam nobis odio optio pariatur quae quaerat quo, rem sunt tempore velit veritatis voluptate voluptates! Assumenda!",
  "public/images/art-ga1ef76e48_640.jpg"
);
