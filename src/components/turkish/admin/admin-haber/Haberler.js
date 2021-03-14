import React, { useState, useEffect } from "react";
import "./Haberler.css";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Table from "./table/Table";
import db from "./../../../../firebase";
import firebase from "firebase";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useSnackbar } from 'notistack';

//stores
import GenericStore from "../../../../stores/GenericStore";
const GenericService = new GenericStore('news', 'tr')

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Haberler() {

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
            url: news.photoUrl,
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const kaydet = (e) => {
    e.preventDefault();
    GenericService.save({
      photoUrl: url,
      title: baslik,
      content: haberContent,
      newsUrl: haberUrl,
      language: 'tr'
    }).then((data) => {
      getNews()
      enqueueSnackbar('Haber eklendi.', {
        autoHideDuration: 3000,
        variant: 'success'
      });
    }).catch((err) => {
      console.log(`Oppss ! ${err}`)
    })

    setUrl("");
    setBaslik("");
    setHaberContent("");
    setHaberUrl("")

    setOpen(false);
  };

  return (
    <div className="blog" style={{ border: "2px solid transparent" }}>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <h3 style={{ marginLeft: "5%" }}>Haber Sayfasi Ekle</h3>
          </Toolbar>
        </AppBar>

        <div className="col-12 blog-pop">
          <div className="container" style={{ marginTop: "10%" }}>
            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1">Foto Url</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Url"
                  value={url}
                  onChange={(event) => setUrl(event.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Haber Başlığı Ekle</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Sayfa Adi"
                  value={baslik}
                  onChange={(event) => setBaslik(event.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Haber Linki</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Sayfa Adi"
                  value={haberUrl}
                  onChange={(event) => setHaberUrl(event.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Haber Yazisi Ekle
                </label>
                <CKEditor
                  editor={ClassicEditor}
                  data={haberContent}
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setHaberContent(data);
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
              </div>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={kaydet}
              >
                Kaydet
              </button>
            </form>
          </div>
        </div>
      </Dialog>

      <h1 style={{ textAlign: "center", color: "black" }}>
        {" "}
        Haberler Sayfasi Guncelleme
      </h1>
      <div
        class="dropdown btn btn-outline"
        style={{
          fontSize: "16px",
          display: "block",
          width: "20%",
        }}
      ></div>

      <div className="container-fluid">
        <h2 style={{ color: "black" }}>Haberler</h2>
        <button className="btn btn-primary" onClick={handleClickOpen}>
          Haber Sayfasi Ekle
        </button>
        <table class="table" style={{ color: "black" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Haber Sayfa Adi</th>
              <th scope="col">Sil</th>
              <th scope="col">Guncelle</th>
            </tr>
          </thead>
          {haberler.map((haber, index) => (
            <Table key={haber.id} haber={haber} index={index} getNews={getNews} />
          ))}
        </table>
      </div>
    </div>
  );
}

export default Haberler;
