import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zubstr - Support</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Terms of services</h1>

        {/* <p className={styles.description}>
          Zubstr is a technology company building products for a better world!
        </p> */}

        <div className={styles.grid} style={{textAlign: "left"}}>
          {/* <p>Terms of Service for Cuisine - Restaurant Menu App</p> */}
          <ol>
            <li>Acceptance of Terms</li>
          </ol>
          <p>
            Welcome to Cuisine, the restaurant menu app (&quot;the App&quot;).
            By using the App, you agree to comply with and be bound by these
            Terms of Service (&quot;Terms&quot;). If you do not agree with these
            Terms, please do not use the App.
          </p>
          <ol>
            <li>Use of the App</li>
          </ol>
          <p>
            2.1 Account Creation: To use the App, you must create an account.
            You are responsible for providing accurate and complete information
            during the registration process and for keeping your account
            credentials secure.
          </p>
          <p>
            2.2 Restaurant Owners: Cuisine is intended for use by restaurant
            owners to create digital menus. By using the App, you confirm that
            you are a restaurant owner or have the legal authority to manage the
            menu for the restaurant.
          </p>
          <p>
            2.3 Content Submission: As a restaurant owner, you are responsible
            for the accuracy and legality of the information you provide,
            including dish names, ingredients, and images. You grant Cuisine a
            non-exclusive, royalty-free, worldwide license to use, display, and
            modify the content for the purpose of providing the App&#39;s
            services.
          </p>
          <ol>
            <li>User Content</li>
          </ol>
          <p>
            3.1 Ownership: You retain ownership of any content you submit to the
            App. However, by submitting content, you grant Cuisine the right to
            use, reproduce, modify, and distribute the content as necessary to
            provide the services.
          </p>
          <p>
            3.2 Prohibited Content: You agree not to submit content that is
            unlawful, defamatory, obscene, invasive of privacy, or infringing on
            any third-party rights. Cuisine reserves the right to remove or
            refuse to display any content that violates these terms.
          </p>
          <ol>
            <li>App Features and Services</li>
          </ol>
          <p>
            4.1 Menu Creation: Cuisine allows you to create digital menus for
            your restaurant by inputting dish names, ingredients, and 3D images.
            The accuracy and presentation of the menu are your responsibility.
          </p>
          <p>
            4.2 Availability: Cuisine strives to provide reliable services, but
            we do not guarantee uninterrupted or error-free access to the App.
            We may modify or discontinue features at any time.
          </p>
          <ol>
            <li>Data Privacy</li>
          </ol>
          <p>
            5.1 Data Collection: Cuisine collects and processes personal and
            non-personal information as described in our Privacy Policy. By
            using the App, you consent to the data practices outlined therein.
          </p>
          <ol>
            <li>Termination</li>
          </ol>
          <p>
            Cuisine reserves the right to terminate your account and access to
            the App at its discretion if you violate these Terms or engage in
            behavior that could harm the App or its users.
          </p>
          <ol>
            <li>Limitation of Liability</li>
          </ol>
          <p>
            To the extent permitted by law, Cuisine and its affiliates shall not
            be liable for any direct, indirect, incidental, special,
            consequential, or punitive damages arising from or related to your
            use of the App.
          </p>
          <ol>
            <li>Changes to Terms</li>
          </ol>
          <p>
            Cuisine may update these Terms from time to time. We will notify you
            of any material changes through the App. Continued use of the App
            after such changes constitutes your acceptance of the updated Terms.
          </p>
          <ol>
            <li>Governing Law</li>
          </ol>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of [Jurisdiction], without regard to its conflict of law
            principles.
          </p>
          <ol>
            <li>Contact Us</li>
          </ol>
          <p>
            If you have any questions or concerns about these Terms, please
            contact us at [+91 9550476617/syedzubairahmed001@gmail.com].
          </p>
          <p>By using Cuisine, you agree to abide by these Terms of Service.</p>
          {/* <p>Effective Date: [Date]</p>
          <p>[End of Terms of Service]</p> */}
        </div>
      </main>
    </div>
  );
}
