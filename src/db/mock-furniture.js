const furnitures = [
  {
    id: 1,
    name: "Tabouret de Cyril",
    type: "chaise",
    price: 150,
    description: "Chic et contemporain, avec son alliance de cuir blanc et de chêne naturel travaillé artisanalement, il bénéficie d'une assise rembourrée pour un confort incomparable.",
    material: ["bois", "cuir"],
    color: "marron",
    size: "h:87cm l:40cm p:46cm",
    accepted: false,
    image_url: ["https://res.cloudinary.com/do44skvp1/image/upload/v1657187071/tabouret-de-bar-en-cuir-blanc-et-pieds-en-chene_1113843_ekttri.jpg", "https://res.cloudinary.com/do44skvp1/image/upload/v1657187014/tabouret-de-bar-en-cuir-blanc-et-pieds-en-chene_1113847_kdi2k9.jpg", "https://res.cloudinary.com/do44skvp1/image/upload/v1657186799/tabouret-de-bar-en-cuir-blanc-et-pieds-en-chene_1281311_nvl3il.jpg"],
    userId: 2,
    created_at: new Date(),
    edited_at: new Date(),
  },
  {
    id: 2,
    name: "Lit enfant d'Ulysse",
    type: "lit",
    price: 100,
    description: "Le lit enfant en bois gris est un lit de transition utilisable à partir de 2 ans. Un sommier rabaissé, une taille adaptée au petit enfant de 2-3 ans, il est pourvu de barrières anti-chute sur les côtés.",
    material: ["bois"],
    color: "gris",
    size: "h:60cm l:76cm p:50cm",
    accepted: true,
    image_url: ["https://res.cloudinary.com/do44skvp1/image/upload/v1657188448/ambiance-lit-enfant-moonlight-90x190-blanc-fdtc-ok3_eebqnf.jpg", "https://res.cloudinary.com/do44skvp1/image/upload/v1657188721/details-lit-enfant-moonlight-90x190-blanc-fdtc-ok2_v0jswi.jpg"],
    userId: 1,
    created_at: new Date(),
    edited_at: new Date(),
  },
  {
    id: 3,
    name: "Table en verre de Jacqueline",
    type: "table",
    price: 150,
    description: "La table verre Spyder  est supportée par une  base en acier.",
    material: ["verre"],
    color: "marron",
    size: "h:80cm l:70cm p:50cm",
    accepted: true,
    image_url: ["https://res.cloudinary.com/do44skvp1/image/upload/v1657187321/table-a-manger-en-verre-et-chene-6-personnes-l120-1000-7-1-165723_5_rnmyvv.jpg", "https://res.cloudinary.com/do44skvp1/image/upload/v1657187470/table-a-manger-en-verre-et-chene-6-personnes-l120-1000-7-1-165723_1_b2l88b.jpg", "https://res.cloudinary.com/do44skvp1/image/upload/v1657187554/table-a-manger-en-verre-et-chene-6-personnes-l120-1000-7-1-165723_3_p3dmnz.jpg"],
    userId: 2,
    created_at: new Date(),
    edited_at: new Date(),
  },
  {
    id: 4,
    name: "Canapé de Sandy",
    type: "canapé",
    price: 1899,
    description: "Posada est une gamme iconique de canapés et de fauteuils Habitat. Cette collection adopte des proportions généreuses et des formes rebondies pour un confort absolu. Lovez-vous dans un canapé Posada et accessoirisez-le avec un coussin assorti. Cette gamme propose une assise composée d’un mélange de mousse et de plumes. Tandis que ses accoudoirs rembourrés invitent à la détente. Le canapé 3 places Posada en tissu Bellagio gris noir est un canapé d’une grande élégance. Son design soigné se retrouve dans ses coutures et les finitions en ourlet de ses accoudoirs.",
    material: ["plumes de canard", "tissu, coton, lin, viscose", "pin massif"],
    color: "gris noir",
    size: "h:75cm l:219cm p:79cm",
    accepted: true,
    image_url: ["https://res.cloudinary.com/oslanne/image/upload/v1657188435/Projet_site%20vente%20de%20meubles/20220707_120515_uieebo.jpg",
      "https://res.cloudinary.com/oslanne/image/upload/v1657188432/Projet_site%20vente%20de%20meubles/20220707_120522_k12hep.jpg",
      "https://res.cloudinary.com/oslanne/image/upload/v1657188430/Projet_site%20vente%20de%20meubles/20220707_120534_p3xgje.jpg"],
    userId: 3,
    created_at: new Date(),
    edited_at: new Date(),
  },
  {
    id: 5,
    name: "Fauteuil de Marine",
    type: "fauteuil",
    price: 530,
    description: "Formellement inspiré du design Italien des années 70, ce fauteuil en cuir au design épuré est une ré-interprétation d’un classique du design. Il est revêtu d’un cuir aniline au touché bougie.",
    material: ["bois", "cuir", "acier"],
    color: "caramel",
    size: "h:75cm l:79cm p:89cm",
    accepted: true,
    image_url: ["https://res.cloudinary.com/do44skvp1/image/upload/v1657187796/PALMIE-FAUTEUIL-BEIGE-ESTEREL-PALMIE-26489926-F-1_iuay8z.jpg", "https://res.cloudinary.com/do44skvp1/image/upload/v1657187869/PALMIE-FAUTEUIL-BEIGE-ESTEREL-PALMIE-26489926-B-1_jaf2mi.jpg", "https://res.cloudinary.com/do44skvp1/image/upload/v1657187945/PALMIE-FAUTEUIL-BEIGE-ESTEREL-PALMIE-26489926-Z-1_kzgpqe.jpg"],
    userId: 2,
    created_at: new Date(),
    edited_at: new Date(),
  },
  {
    id: 6,
    name: "Buffet de Clara Z.",
    type: "buffet",
    price: 639,
    description: "Le buffet haut Rita possède deux portes et un espace ouvert pour optimiser vos espaces de vie. Comme petite bibliothèque ou comme meuble de rangement, il trouve parfaitement sa place dans votre salon ou votre salle à manger. Le buffet Rita offre un joli jeu de contraste par ses couleurs vives et chaleureuses.",
    material: ["chêne massif, vernis"],
    color: "naturel et orange",
    size: "h:45cm l:100cm p:115cm",
    accepted: true,
    image_url: ["https://res.cloudinary.com/do44skvp1/image/upload/v1657188110/buffet-haut-en-chene-naturel-et-orange-design-by-adrien-carves_1111343_fo10rl.jpg",
      "https://res.cloudinary.com/do44skvp1/image/upload/v1657188223/buffet-haut-en-chene-naturel-et-orange-design-by-adrien-carves_1296599_xdlcvy.jpg"],
    userId: 1,
    created_at: new Date(),
    edited_at: new Date(),
  },
  {
    id: 7,
    name: "Meuble TV d’Amanda",
    type: "Meuble TV",
    price: 840,
    description: "Les meubles de cette collection se distinguent par des pieds droits en métal et des portes coulissantes en chêne massif de couleur naturel. Mêlant design scandinave et design industriel, les meubles de salon Yves sont tout en élégance et sobriété.",
    material: ["bois", "acier"],
    color: "bois",
    size: "h:42cm l:159cm p:52cm",
    accepted: true,
    image_url: ["https://res.cloudinary.com/oslanne/image/upload/v1657187516/Projet_site%20vente%20de%20meubles/yves-meuble-tv-av-chene-naturel_2422489_cmywwq.jpg, https://res.cloudinary.com/oslanne/image/upload/v1657187516/Projet_site%20vente%20de%20meubles/yves-meuble-tv-av-chene-naturel_2422513_x1g00x.jpg", "https://res.cloudinary.com/oslanne/image/upload/v1657187516/Projet_site%20vente%20de%20meubles/yves-meuble-tv-av-chene-naturel_2422501_tdhbou.jpg"],
    userId: 3,
    created_at: new Date(),
    edited_at: new Date(),
  },
  {
    id: 8,
    name: "Bibliothèque d'Emma",
    type: "bibliothèque",
    price: 2499,
    description: "Composée de trois colonnes de rangement et d'une échelle qui glisse sur la barre en métal, la bibliothèque Camus est en chêne naturel. Elle incarne à elle seule l'image de la bibliothèque par excellence. Elle fait rêver tous les passionnés de litterature. Une extension est vendue séparément pour permettre de l'agrandir.",
    material: ["chêne laqué, acier"],
    color: "bois",
    size: "h:238cm l:209cm p:44cm",
    accepted: true,
    image_url: ["https://res.cloudinary.com/oslanne/image/upload/v1657187865/Projet_site%20vente%20de%20meubles/bibliotheque-en-chene-avec-son-echelle-amovible_1112985_u32mfo.jpg",
      "https://res.cloudinary.com/oslanne/image/upload/v1657188075/Projet_site%20vente%20de%20meubles/bibliotheque-en-chene-avec-son-echelle-amovible-naturel_7535457_kgnwku.jpg",
      "https://res.cloudinary.com/oslanne/image/upload/v1657188119/Projet_site%20vente%20de%20meubles/bibliotheque-en-chene-avec-son-echelle-amovible-naturel_7535459_tfdjiq.jpg"],
    userId: 2,
    created_at: new Date(),
    edited_at: new Date(),
  },


];

module.exports = furnitures
