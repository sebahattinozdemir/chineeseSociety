import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./Table.css"
import { useSnackbar } from 'notistack';

//stores
import GenericStore from "../../../../../stores/GenericStore";
const GenericService = new GenericStore('announcement', 'tr')

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

function Table(props) {
  const [open, setOpen] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [url, setUrl] = useState(props.duyuru.url);
  const [baslik, setBaslik] = useState(props.duyuru.baslik);
  const [duyuruContent, setDuyuruContent] = useState(props.duyuru.duyuruContent);
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const guncelle = (e) => {
    e.preventDefault();
    e.preventDefault();
    GenericService.update({
      _id: props.duyuru.id,
      photoUrl: url,
      title: baslik,
      content: duyuruContent,

    })
      .then((data) => {
        props.getAnnouncements()
        setOpen(false)
        enqueueSnackbar('Duyuru güncellendi.', {
          autoHideDuration: 3000,
          variant: 'success'
        });
      })
      .catch((err) => {
        enqueueSnackbar('Duyuru güncellenemedi.', {
          autoHideDuration: 3000,
          variant: 'error'
        });
      })
  };
  return (
    <tbody>
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
            <h3 style={{ marginLeft: "5%" }}>Duyuru Guncelle</h3>
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
                  placeholder="Sayfa Adi"
                  value={url}
                  onChange={(event) => setUrl(event.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Baslik Ekle</label>
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
                <label for="exampleFormControlTextarea1">
                  Duyuru Yazisi Ekle
                </label>
                <CKEditor
                  editor={ClassicEditor}
                  data={duyuruContent}
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setDuyuruContent(data);
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
                onClick={guncelle}
              >
                Guncelle
              </button>
            </form>
          </div>
        </div>
      </Dialog>
      <tr>
        <th scope="row">{props.index + 1}</th>
        <td>{props.duyuru.baslik}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={(event) => {
              GenericService.delete(props.duyuru.id)
                .then((data) => {
                  props.getAnnouncements()
                  enqueueSnackbar('Duyuru silindi.', {
                    autoHideDuration: 3000,
                    variant: 'success'
                  });
                })
                .catch((err) => {
                  enqueueSnackbar('Duyuru silinemedi.', {
                    autoHideDuration: 3000,
                    variant: 'error'
                  });
                })
            }
            }
          >
            X
          </button>
        </td>
        <td>
          <button className="btn btn-primary" onClick={handleClickOpen}>
            Guncelle
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default Table;
