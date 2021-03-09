import Header from "../../header/Header";
import AssignmentIcon from "@material-ui/icons/Assignment";
import React, { useEffect, useState } from "react";
import "./Haber.css";
import db from "./../../../../firebase";
import HaberInterior from "./HaberInterior";
function Haber() {
  
  const [haberler, setHaberler] = useState([]);
  
  useEffect(() => {
    // fires once when the app loads
    db.collection("chi-haberler")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setHaberler(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            url:doc.data().url.substring(doc.data().url.lastIndexOf('file')+7, doc.data().url.lastIndexOf('/')),
            content: doc.data().haberContent,
            heading: doc.data().baslik,
          }))
        );
      });
  }, []);

  return (
    <div>

      <Header
        subtitle="新闻"
        title="新闻"
        icon={<AssignmentIcon style={{ fontSize: "x-large" }} />}
      />
      <div className="row" style={{ paddingTop: "2rem", minHeight:"30rem"}}>
      {haberler.map((haber,index) => (
            <HaberInterior photo = {haber.url} title={haber.heading} uzanti={"/chi-haberler/"+haber.heading} 
            content = {haber} divert={"/chi-haberler/"+haber.heading}  
            />
          ))}
      </div>
    </div>
  );
}

export default Haber;
