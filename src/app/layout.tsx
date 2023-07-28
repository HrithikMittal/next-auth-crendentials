import Nav from "@/components/Nav";
import "@/styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description:
    "Promptopia is a place to find writing prompts and share your own.",
};

const RootLayout = ({ children }: any) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
