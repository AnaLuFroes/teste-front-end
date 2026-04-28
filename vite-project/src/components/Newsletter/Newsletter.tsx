import { useState } from 'react';
import styles from './Newsletter.module.scss';

function Newsletter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [accepted, setAccepted] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // Aqui entraria a integração com o backend
  }

  return (
    <section className={styles.newsletter} aria-label="Newsletter">
      <div className={styles.text}>
        <h2 className={styles.title}>Inscreva-se na nossa newsletter</h2>
        <p className={styles.desc}>
          Assine a nossa newsletter e receba as novidades e conteúdos
          exclusivos da Econverse.
        </p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <input
            className={styles.input}
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Nome"
          />
          <input
            className={styles.input}
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="E-mail"
          />
          <button className={styles.submit} type="submit">
            INSCREVER
          </button>
        </div>
        <label className={styles.check}>
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
          />
          Aceito os termos e condições
        </label>
      </form>
    </section>
  );
}

export default Newsletter;
