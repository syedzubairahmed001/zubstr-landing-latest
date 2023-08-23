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
        <h1 className={styles.title}>Privacy Policy</h1>

        {/* <p className={styles.description}>
          Zubstr is a technology company building products for a better world!
        </p> */}

        <div className={styles.grid}>
          <p>
            This Privacy Policy explains how Cuisine (&quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;) collects, uses, and safeguards
            the personal information of users who are restaurant owners when
            using our restaurant menu app (&quot;the App&quot;). By using the
            App, you agree to the practices described in this policy.
          </p>
          <ol>
            <li>Information We Collect</li>
          </ol>
          <p>
            1.1 Account Information: When you create an account, we collect your
            name, email address, restaurant name, and contact details. This
            information is used to identify you as the owner and manager of the
            restaurant.
          </p>
          <p>
            1.2 Dish Information: To create digital menus, the App collects dish
            information including names, ingredients, and 3D images. This data
            is associated with your restaurant and displayed on your digital
            menu.
          </p>
          <p>
            1.3 Usage Information: We gather information about how you interact
            with the App, including actions you take, features you use, and the
            frequency of your visits. This data helps us improve the App&#39;s
            functionality and user experience.
          </p>
          <ol>
            <li>How We Use Your Information</li>
          </ol>
          <p>
            2.1 Menu Creation: The dish information you provide is used to
            create and display digital menus for your restaurant within the App.
          </p>
          <p>
            2.2 Improvement and Analytics: We analyze usage data to improve the
            App&#39;s features, enhance user experience, and identify areas for
            optimization.
          </p>
          <p>
            2.3 Communication: We may use your contact information to send you
            important updates, notifications about App features, and promotional
            information. You can opt-out of promotional communications at any
            time.
          </p>
          <p>
            2.4 Legal Compliance: We may use and disclose your information when
            required by law, regulation, legal process, or governmental request.
          </p>
          <ol>
            <li>Sharing Your Information</li>
          </ol>
          <p>
            3.1 Digital Menus: The dish information you provide is shared within
            the App to create digital menus for your restaurant.
          </p>
          <p>
            3.2 Service Providers: We may engage third-party service providers
            to assist with various aspects of our services, such as data storage
            and analysis. These providers have access to your information only
            as needed to perform their functions and are bound by
            confidentiality obligations.
          </p>
          <ol>
            <li>Data Security</li>
          </ol>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access, disclosure, alteration, or destruction.
            However, no data transmission over the internet or electronic
            storage method is entirely secure.
          </p>
          <ol>
            <li>Your Choices</li>
          </ol>
          <p>
            You can manage your account information and dish details through the
            App&#39;s settings. You can also control communication preferences
            and opt-out of promotional emails.
          </p>
          <ol>
            <li>Data Retention</li>
          </ol>
          <p>
            We retain your information as long as your account is active or as
            needed to provide you with the services. If you wish to close your
            account, we will retain and use your information as necessary to
            comply with our legal obligations, resolve disputes, and enforce our
            agreements.
          </p>
          <ol>
            <li>Changes to Privacy Policy</li>
          </ol>
          <p>
            We may update this Privacy Policy to reflect changes in our
            practices or legal requirements. We will notify you of any material
            changes by posting the updated policy within the App.
          </p>
          <ol>
            <li>Contact Us</li>
          </ol>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at [contact email/phone number].
          </p>
          <p>Effective Date: [Date]</p>
          <p>
            By using Cuisine, you agree to the terms of this Privacy Policy.
          </p>
          <p>[End of Privacy Policy]</p>
        </div>
      </main>
    </div>
  );
}
