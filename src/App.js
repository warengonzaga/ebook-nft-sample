import HTMLFlipBook from "react-pageflip";
import "./styles/Home.css";

export default function Home() {
  return (
    <div className="container">
      <main className="main">
        <HTMLFlipBook width={300} height={500} showCover={true}>
          <div className="demoPage">
            <img alt="demoImage" src="/page1.jpg"/>
          </div>
          <div className="demoPage">
            <img alt="demoImage" src="/page2.jpg"/>
          </div>
          <div className="demoPage">
            <img alt="demoImage" src="/page3.jpg"/>
          </div>
          <div className="demoPage">
            <img alt="demoImage" src="/page4.jpg"/>
          </div>
          <div className="demoPage">
            <img alt="demoImage" src="/page5.jpg"/>
          </div>
          <div className="demoPage">
            <img alt="demoImage" src="/page6.jpg"/>
          </div>
        </HTMLFlipBook>
      </main>
    </div>
  );
}
