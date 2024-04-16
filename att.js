import { db } from "./database.js";
import { Suspense } from "react";

async function ConferencePage({ slug }) {
  const conf = await db.Confs.find({ slug });
  return (
    <ConferenceLayout conf={conf}>
      <Suspense fallback={<TalksLoading />}>
        <Talks confId={conf.id} />
      </Suspense>
    </ConferenceLayout>
  );
}

// Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression; the class has its own name
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

async function Talks({ confId }) {
  const talks = await db.Talks.findAll({ confId });
  const videos = talks.map((talk) => talk.video);
  return <SearchableVideoList videos={videos} />;
}

function Comp() {
  return <h1> As usual we can call the function using component call</h1>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Comp />);
