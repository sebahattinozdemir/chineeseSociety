import Header from "../../header/Header";
import AssignmentIcon from "@material-ui/icons/Assignment";
import React, { useEffect, useState } from "react";
import "./Haber.css";
import HaberInterior from "./HaberInterior";

//stores
import GenericStore from "../../../../stores/GenericStore";
const GenericService = new GenericStore('news', 'tr')

function Haber() {

  const [haberler, setHaberler] = useState([]);

  useEffect(() => {
    getNews()
  }, []);

  //get news
  const getNews = () => {
    GenericService.get()
      .then(async (data) => {
        setHaberler(
          data.map((news) => ({
            id: news._id,
            url: news.photoUrl.replace("?dl=0", "?raw=1"),
            baslik: news.title,
            haberContent: news.content,
            haberUrl: news.newsUrl
          }))
        );
      })
      .catch((err) => {
        console.log(`Oppss ! ${err}`)
      })
  }

  return (
    <div>

      <Header
        subtitle="Haber"
        title="Haber"
        icon={<AssignmentIcon style={{ fontSize: "x-large" }} />}
      />
      <div className="row" style={{ paddingTop: "2rem", minHeight: "30rem" }}>
        {haberler.map((haber, index) => (
          <HaberInterior photo={haber.url} title={haber.baslik} uzanti={"/haberler/" + haber.baslik}
            content={haber.haberContent} divert={"/haberler/" + haber.heading}
          /> 
        ))} 
      </div>
    </div>
  );
}

export default Haber;
