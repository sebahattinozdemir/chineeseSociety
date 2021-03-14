import Header from "../../header/Header";
import AssignmentIcon from "@material-ui/icons/Assignment";
import React, { useEffect, useState } from "react";
import "./Haber.css";
import db from "./../../../../firebase";
import HaberInterior from "./HaberInterior";
import { useSnackbar } from 'notistack';
import { makeStyles } from "@material-ui/core/styles";
//stores
import GenericStore from "../../../../stores/GenericStore";
const GenericService = new GenericStore('news')

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

function Haber() {

  
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = React.useState(false);

  const [haberler, setHaberler] = useState([]);
  const [url, setUrl] = useState("");
  const [baslik, setBaslik] = useState("");
  const [haberContent, setHaberContent] = useState("");
  const [haberUrl, setHaberUrl] = useState("");

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
            url: news.photoUrl.replace("?dl=0","?raw=1"),
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
        subtitle="新闻"
        title="新闻"
        icon={<AssignmentIcon style={{ fontSize: "x-large" }} />}
      />
      <div className="row" style={{ paddingTop: "2rem", minHeight:"30rem"}}>
      {haberler.map((haber,index) => (
         <HaberInterior 
            photo = {haber.url} 
            key={haber.id}
            index={index}
            title={haber.baslik}
            content = {haber.haberContent} 
         
            
            />
          ))}
      </div>
    </div>
  );
}

export default Haber;
