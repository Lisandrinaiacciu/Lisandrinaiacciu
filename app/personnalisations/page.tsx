import Image from "next/image";
import Link from "next/link";

export default function PersonnalisationsPage() {
  return (
    <>
      <header className="hero" id="personnalisations">
        <nav className="nav container">
          <Link className="logo" href="/">
            <Image src="/logo.png" alt="Logo Lisandrinaiacciu" width={42} height={42} />
            <span>Lisandrinaiacciu</span>
          </Link>
          <div className="nav-links">
            <Link href="/">Accueil</Link>
            <Link href="/#produits">Produits</Link>
            <Link href="/#contact">Contact</Link>
            <Link href="/personnalisations">Personnalisations</Link>
          </div>
        </nav>

        <div className="hero-content container">
          <h1>Personnalisations</h1>
          <p>
            Créez une pièce unique pour bébé ou enfant: texte brodé, prénom, couleurs et thèmes au
            choix.
          </p>
          <a className="btn" href="#demande">
            Faire une demande
          </a>
        </div>
      </header>

      <main>
        <section className="section container">
          <h2>Ce que nous personnalisons</h2>
          <div className="presentation-grid">
            <article>
              <h3>Broderie prénom</h3>
              <p>
                Ajout du prénom sur body, gilet, couverture ou pyjama avec plusieurs styles
                d&apos;écriture.
              </p>
            </article>
            <article>
              <h3>Choix des couleurs</h3>
              <p>
                Vous choisissez la couleur principale, les détails et le rendu final selon votre
                univers.
              </p>
            </article>
            <article>
              <h3>Coffrets cadeaux</h3>
              <p>
                Création de coffrets sur mesure pour naissance, anniversaire et occasions
                spéciales.
              </p>
            </article>
          </div>
        </section>

        <section className="section section-alt" id="demande">
          <div className="container">
            <h2>Demande de personnalisation</h2>
            <p className="contact-intro">
              Envoyez votre idée, nous revenons vers vous avec une proposition et un devis.
            </p>
            <form className="contact-form" action="#" method="post">
              <label htmlFor="nom-personnalisation">Nom</label>
              <input
                id="nom-personnalisation"
                name="nom"
                type="text"
                placeholder="Votre nom"
                required
              />

              <label htmlFor="email-personnalisation">Email</label>
              <input
                id="email-personnalisation"
                name="email"
                type="email"
                placeholder="vous@email.com"
                required
              />

              <label htmlFor="idee">Votre personnalisation</label>
              <textarea
                id="idee"
                name="idee"
                rows={5}
                placeholder="Exemple: body 6 mois, prénom Emma en doré, thème fleuri"
                required
              ></textarea>

              <button type="submit" className="btn">
                Envoyer la demande
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Lisandrinaiacciu - Tous droits reserves.</p>
      </footer>
    </>
  );
}
