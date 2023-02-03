import MainLayout from "@/src/layouts/mainLayout";
import "@/src/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
