import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
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
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <div className="app">
            <Nav />
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
