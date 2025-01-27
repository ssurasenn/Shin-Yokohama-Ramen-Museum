import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";


export const metadata = {
  title: "Shin-Yokohama Ramen Museum",
  description: "สวัสดีครับ วันนี้จะมาลองทำ responsive website เกี่ยวกับราเมนและมุมจำหน่ายผลิตภัณฑ์ รวมถึงร้านราเมง 10 อันดับแรกที่ได้รับเลือกให้เป็นร้านที่ดีที่สุดในญี่ปุ่น  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
