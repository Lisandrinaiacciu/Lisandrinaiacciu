import Image from "next/image";

export default function Home() {
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
          </div>
        </nav>

        <div className="hero-content container">
          <p className="badge">Nouvelle collection 2026</p>
          <Image
            className="hero-logo"
            src="/logo.png"
            alt="Logo Lisandrinaiacciu"
            width={430}
            height={430}
            priority
          />
          <h1>Choisissez des pièces de luxe à petit prix</h1>
          <p>
            Decouvrez notre selection d'objets lifestyle et deco. Une boutique pensee pour
            celles et ceux qui aiment la qualite et le design.
          </p>
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
              <h3>Notre histoire</h3>
              <p>
                Depuis 2018, nous proposons des produits utiles, durables et beaux. Notre
                mission: rendre le style accessible sans compromis sur la qualite.
              </p>
            </article>
            <article>
              <h3>Notre promesse</h3>
              <p>
                Une selection courte, des pieces choisies a la main et un service client
                attentif. Chaque produit est teste avant d'arriver en rayon.
              </p>
            </article>
          </div>
        </section>

        <section className="section section-alt" id="produits">
          <div className="container">
            <h2>Produits</h2>
            <div className="categories-stack">
              <article className="category-block destockage">
                <div className="category-head">
                  <h3>Destockage</h3>
                  <p>Dernieres pieces a prix reduits.</p>
                </div>
                <div className="product-list">
                  <article className="product-card">
                    <div className="product-photo photo-b">Photo produit</div>
                    <h4>Gilet maille enfant</h4>
                    <p>Serie limitee, fin de collection.</p>
                    <div className="deal-line">
                      <span className="old-price">34.90 EUR</span>
                      <span className="new-price">19.90 EUR</span>
                    </div>
                  </article>
                  <article className="product-card">
                    <div className="product-photo photo-f">Photo produit</div>
                    <h4>Ensemble bebe coton</h4>
                    <p>Confort premium, dernieres tailles.</p>
                    <div className="deal-line">
                      <span className="old-price">29.90 EUR</span>
                      <span className="new-price">16.90 EUR</span>
                    </div>
                  </article>
                  <article className="product-card">
                    <div className="product-photo photo-h">Photo produit</div>
                    <h4>Veste coupe-vent junior</h4>
                    <p>Modele leger et resistant.</p>
                    <div className="deal-line">
                      <span className="old-price">49.90 EUR</span>
                      <span className="new-price">27.90 EUR</span>
                    </div>
                  </article>
                </div>
              </article>

              <article className="category-block">
                <div className="category-head">
                  <h3>Vetements bebe 0-18 mois</h3>
                  <p>Exemple de produits avec photos et prix.</p>
                </div>
                <div className="product-list">
                  <article className="product-card">
                    <div className="product-photo photo-a">Photo produit</div>
                    <h4>Body coton doux</h4>
                    <p>Lot de 2 bodies manches longues.</p>
                    <span className="price">19.90 EUR</span>
                  </article>
                  <article className="product-card">
                    <div className="product-photo photo-b">Photo produit</div>
                    <h4>Pyjama nuage</h4>
                    <p>Ouverture pratique, tissu respirant.</p>
                    <span className="price">24.90 EUR</span>
                  </article>
                  <article className="product-card">
                    <div className="product-photo photo-c">Photo produit</div>
                    <h4>Ensemble naissance</h4>
                    <p>Bonnet, gilet et pantalon assortis.</p>
                    <span className="price">29.90 EUR</span>
                  </article>
                </div>
              </article>

              <article className="category-block">
                <div className="category-head">
                  <h3>Vetements enfant 24-36 mois</h3>
                  <p>Exemple de produits avec photos et prix.</p>
                </div>
                <div className="product-list">
                  <article className="product-card">
                    <div className="product-photo photo-d">Photo produit</div>
                    <h4>Sweat zip enfant</h4>
                    <p>Confort quotidien, coupe mixte.</p>
                    <span className="price">27.90 EUR</span>
                  </article>
                  <article className="product-card">
                    <div className="product-photo photo-e">Photo produit</div>
                    <h4>Jean souple</h4>
                    <p>Taille elastique, denim doux.</p>
                    <span className="price">22.90 EUR</span>
                  </article>
                  <article className="product-card">
                    <div className="product-photo photo-f">Photo produit</div>
                    <h4>Robe fleurie</h4>
                    <p>Legere et facile a entretenir.</p>
                    <span className="price">25.90 EUR</span>
                  </article>
                </div>
              </article>

              <article className="category-block">
                <div className="category-head">
                  <h3>Vetements enfants 4 ans et +</h3>
                  <p>Exemple de produits avec photos et prix.</p>
                </div>
                <div className="product-list">
                  <article className="product-card">
                    <div className="product-photo photo-g">Photo produit</div>
                    <h4>Veste mi-saison</h4>
                    <p>Protection legere pour l'ecole.</p>
                    <span className="price">39.90 EUR</span>
                  </article>
                  <article className="product-card">
                    <div className="product-photo photo-h">Photo produit</div>
                    <h4>T-shirt graphique</h4>
                    <p>Impression durable, coton epais.</p>
                    <span className="price">14.90 EUR</span>
                  </article>
                  <article className="product-card">
                    <div className="product-photo photo-i">Photo produit</div>
                    <h4>Pantalon cargo</h4>
                    <p>Coupe moderne et poches pratiques.</p>
                    <span className="price">31.90 EUR</span>
                  </article>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section container" id="contact">
          <h2>Contact</h2>
          <p className="contact-intro">
            Une question ou une commande specifique? Ecrivez-nous, nous vous repondons sous
            24h.
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
