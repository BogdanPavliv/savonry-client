"use client";
import Layout from "./Layout";
import StoreProvider from "../provider/Provider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <StoreProvider>
            <Layout>
              {children}
              <ToastContainer position='bottom-right' />
            </Layout>
          </StoreProvider>
        </div>
      </body>
    </html>
  );
};

export default PagesLayout;
