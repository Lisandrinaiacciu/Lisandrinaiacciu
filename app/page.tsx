"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Product = {
  photoClass?: string;
  imageSrc?: string;
  name: string;
  description: string;
  price?: string;
  oldPrice?: string;
  newPrice?: string;
};

type Category = {
  title: string;
  description: string;
  className?: string;
  products: Product[];
};

const categories: Category[] = [
  {
    title: "Destockage",
    description: "Dernieres pieces a prix reduits.",
    className: "destockage",
    products: [
      {
        photoClass: "photo-b",
        name: "Gilet maille enfant",
        description: "Serie limitee, fin de collection.",
        oldPrice: "34.90 EUR",
        newPrice: "19.90 EUR",
      },
      {
        photoClass: "photo-f",
        name: "Ensemble bebe coton",
        description: "Confort premium, dernieres tailles.",
        oldPrice: "29.90 EUR",
        newPrice: "16.90 EUR",
      },
      {
        photoClass: "photo-h",
        name: "Veste coupe-vent junior",
        description: "Modele leger et resistant.",
        oldPrice: "49.90 EUR",
        newPrice: "27.90 EUR",
      },
    ],
  },
  {
    title: "Vetements bebe 0-18 mois",
    description: "Exemple de produits avec photos et prix.",
    products: [
      {
        photoClass: "photo-a",
        name: "Body coton doux",
        description: "Lot de 2 bodies manches longues.",
        price: "19.90 EUR",
      },
      {
        photoClass: "photo-b",
        name: "Pyjama nuage",
        description: "Ouverture pratique, tissu respirant.",
        price: "24.90 EUR",
      },
      {
        photoClass: "photo-c",
        name: "Ensemble naissance",
        description: "Bonnet, gilet et pantalon assortis.",
        price: "29.90 EUR",
      },
    ],
  },
  {
    title: "Vetements enfant 24-36 mois",
    description: "Exemple de produits avec photos et prix.",
    products: [
      {
        photoClass: "photo-d",
        name: "Sweat zip enfant",
        description: "Confort quotidien, coupe mixte.",
        price: "27.90 EUR",
      },
      {
        photoClass: "photo-e",
        name: "Jean souple",
        description: "Taille elastique, denim doux.",
        price: "22.90 EUR",
      },
      {
        photoClass: "photo-f",
        name: "Robe fleurie",
        description: "Legere et facile a entretenir.",
        price: "25.90 EUR",
      },
    ],
  },
  {
    title: "Vetements enfants 4 ans et +",
    description: "Exemple de produits avec photos et prix.",
    products: [
      {
        imageSrc: "/gucci-robe-rayure-7-ans.jpg",
        name: "GUCCI Robe rayure",
        description: "Taille 7 ans, comme neuve.",
        price: "Prix sur demande",
      },
      {
        photoClass: "photo-g",
        name: "Veste mi-saison",
        description: "Protection legere pour l'ecole.",
        price: "39.90 EUR",
      },
      {
        photoClass: "photo-h",
        name: "T-shirt graphique",
        description: "Impression durable, coton epais.",
        price: "14.90 EUR",
      },
      {
        photoClass: "photo-i",
        name: "Pantalon cargo",
        description: "Coupe moderne et poches pratiques.",
        price: "31.90 EUR",
      },
    ],
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const normalizedSearch = searchQuery.trim().toLowerCase();
  const filteredCategories = useMemo(() => {
    if (!normalizedSearch) {
      return categories;
    }

    return categories
      .map((category) => {
        const products = category.products.filter((product) => {
          const searchableText = [
            category.title,
            product.name,
            product.description,
            product.price,
            product.oldPrice,
            product.newPrice,
          ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();
          return searchableText.includes(normalizedSearch);
        });

        return { ...category, products };
      })
      .filter((category) => category.products.length > 0);
  }, [normalizedSearch]);

  const hasResults = filteredCategories.length > 0;

  return (
    <>
      <header className="hero" id="accueil">
        <nav className="nav container">
          <a className="logo" href="#accueil">
            <Image src="/logo.png" alt="Logo Lisandrinaiacciu" width={42} height={42} />
            <span>Lisandrinaiacciu</span>
          </a>
          <div className="nav-links">
            <a href="#accueil">Accueil</a>
            <a href="#presentation">Presentation</a>
            <a href="#produits">Produits</a>
            <a href="#contact">Contact</a>
            <Link href="/personnalisations">Personnalisations</Link>
          </div>
        </nav>

        <div className="hero-content container">
          <Image
            className="hero-logo"
            src="/logo.png"
            alt="Logo Lisandrinaiacciu"
            width={430}
            height={430}
            priority
          />
          <h1>Choisissez des pieces de luxe a petit prix</h1>
          <p>Decouvrez notre selection de pieces dont vous revez a prix de reve.</p>
          <a className="btn" href="#produits">
            Voir les produits
          </a>
        </div>
      </header>

      <main>
        <section className="section container" id="presentation">
          <h2>Presentation</h2>
          <div className="presentation-grid">
            <article>
              <h3>Nos lives Whatnot</h3>
              <p>
                Depuis Janvier 2026 notre site internet est retranscrit trois fois par semaine via des
                lives effectues sur Whatnot. Vous y trouverez les pieces presentees ci dessous.
                N&apos;hesitez pas a demander de passer une piece qui vous interesse lors des lives
              </p>
            </article>
            <article>
              <h3>Notre promesse</h3>
              <p>
                Une selection courte, des pieces choisies a la main et un service client attentif.
                Chaque produit est teste avant d&apos;arriver en rayon.
              </p>
            </article>
          </div>
        </section>

        <section className="section section-alt" id="produits">
          <div className="container">
            <h2>Produits</h2>
            <div className="product-search-box">
              <label htmlFor="product-search">Rechercher un article</label>
              <input
                id="product-search"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Ex: pyjama, robe, veste..."
                aria-label="Rechercher un article"
              />
            </div>

            {!hasResults ? (
              <p className="search-empty">
                Aucun article ne correspond a &quot;{searchQuery.trim()}&quot;.
              </p>
            ) : null}

            <div className="categories-stack">
              {filteredCategories.map((category) => (
                <article
                  className={`category-block ${category.className ?? ""}`.trim()}
                  key={category.title}
                >
                  <div className="category-head">
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                  <div className="product-list">
                    {category.products.map((product) => (
                      <article className="product-card" key={`${category.title}-${product.name}`}>
                        <div className={`product-photo ${product.imageSrc ? "product-photo-image" : product.photoClass ?? ""}`}>
                          {product.imageSrc ? (
                            <Image
                              src={product.imageSrc}
                              alt={product.name}
                              fill
                              sizes="(max-width: 680px) 33vw, (max-width: 980px) 50vw, 25vw"
                            />
                          ) : (
                            "Photo produit"
                          )}
                        </div>
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                        {product.oldPrice && product.newPrice ? (
                          <div className="deal-line">
                            <span className="old-price">{product.oldPrice}</span>
                            <span className="new-price">{product.newPrice}</span>
                          </div>
                        ) : (
                          <span className="price">{product.price}</span>
                        )}
                      </article>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="contact">
          <h2>Contact</h2>
          <p className="contact-intro">
            Une question ou une commande specifique? Ecrivez-nous, nous vous repondons sous 24h.
          </p>
          <form className="contact-form" action="#" method="post">
            <label htmlFor="nom">Nom</label>
            <input id="nom" name="nom" type="text" placeholder="Votre nom" required />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="vous@email.com" required />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Votre message"
              required
            ></textarea>

            <button type="submit" className="btn">
              Envoyer
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Lisandrinaiacciu - Tous droits reserves.</p>
      </footer>
    </>
  );
}
