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
        <h1 className={styles.title}>Cancellation Policy</h1>

        {/* <p className={styles.description}>
          Zubstr is a technology company building products for a better world!
        </p> */}

        <div className={styles.grid}>
          <p>
            We at Cuisine strive to provide you with the best possible
            experience using our restaurant menu app (&quot;the App&quot;). We
            understand that circumstances may change, and we want to ensure
            transparency and fairness in our cancellation policy. Please read
            the following cancellation policy carefully.
          </p>
          <ol>
            <li>Cancellation Period</li>
          </ol>
          <p>
            You have the right to cancel your subscription for the Cuisine app
            at any time within the first two weeks (14 days) after the date of
            initial subscription. This period is referred to as the
            &quot;Cancellation Period.&quot;
          </p>
          <ol>
            <li>Cancellation Process</li>
          </ol>
          <p>To initiate a cancellation, please follow these steps:</p>
          <p>
            2.1 Contact Customer Support: Send an email to our customer support
            team at [support email] within the Cancellation Period. Please
            include your account information and the reason for cancellation.
          </p>
          <p>
            2.2 Confirmation: Upon receiving your cancellation request, we will
            confirm your request and initiate the cancellation process.
          </p>
          <ol>
            <li>Refund Policy</li>
          </ol>
          <p>
            3.1 Refund Eligibility: If you cancel your subscription within the
            Cancellation Period and meet the specified criteria, you are
            eligible for a full refund of your subscription fee.
          </p>
          <p>
            3.2 Refund Processing: Refunds will be processed within 7 business
            days of confirming your cancellation request. The refund will be
            issued using the original payment method used for the subscription.
          </p>
          <ol>
            <li>Eligibility Criteria</li>
          </ol>
          <p>
            4.1 Cancellation Timing: To be eligible for a refund, the
            cancellation request must be submitted within the Cancellation
            Period of 14 days from the date of initial subscription.
          </p>
          <p>
            4.2 Account Usage: Your subscription must not have been used to
            create more than a certain number of menus during the Cancellation
            Period to be eligible for a refund. The specific limit will be
            communicated to you upon request or during the cancellation process.
          </p>
          <ol>
            <li>Exclusions</li>
          </ol>
          <p>
            5.1 Beyond Cancellation Period: Cancellation requests made after the
            Cancellation Period will not be eligible for a refund.
          </p>
          <p>
            5.2 Excessive Usage: If your subscription has been used to create
            menus beyond the specified limit during the Cancellation Period, you
            will not be eligible for a refund.
          </p>
          <ol>
            <li>Contact Us</li>
          </ol>
          <p>
            If you have any questions or concerns about our cancellation policy
            or the cancellation process, please contact our customer support
            team at [support email/phone number].
          </p>
          <p>
            Please note that by using Cuisine, you agree to abide by this
            cancellation policy.
          </p>
          <p>Effective Date: [Date]</p>
          <p>[End of Cancellation Policy]</p>
        </div>
      </main>
    </div>
  );
}
