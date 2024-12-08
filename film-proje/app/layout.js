import "@/styles/reset.css"
import styles from "@/styles/global.css"
import Hedaer from "@/components/haeder";
import Footer from "@/components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={styles.container}>
        <Hedaer />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
