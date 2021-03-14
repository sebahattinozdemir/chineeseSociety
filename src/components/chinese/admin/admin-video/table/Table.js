import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { useSnackbar } from 'notistack';
 
//stores 
import GenericStore from "../../../../../stores/GenericStore";
const GenericService = new GenericStore('video', 'ch')

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
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = React.useState(false);
  const [url, setUrl] = useState(props.video.url);
  const [name, setName] = useState(props.video.name);

  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const guncelle = (e) => {
    e.preventDefault();
    GenericService.update({
      _id: props.video.id,
      videoUrl: url,
      videoName: name
    })
      .then((data) => {
        props.getVideos()
        setOpen(false);
        enqueueSnackbar('Video güncellendi.', {
          autoHideDuration: 3000,
          variant: 'success'
        });
      })
      .catch((err) => {
        enqueueSnackbar('Video güncellenemedi.', {
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
            <h3 style={{ marginLeft: "5%" }}>Video Ekle</h3>
          </Toolbar>
        </AppBar>

        <div className="col-12 referans-pop">
          <div className="container" style={{ marginTop: "10%" }}>
            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1">Url</label>
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
                <label for="exampleFormControlInput1">Isim</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Isim"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <button className="btn btn-primary" type="submit" onClick={guncelle}>
                Kaydet
              </button>
            </form>
          </div>
        </div>
      </Dialog>

      <tr>
        <th scope="row">{props.index + 1}</th>
        <td>{props.video.name}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={(event) => {
              GenericService.delete(props.video.id)
                .then((data) => {
                  props.getVideos()
                  enqueueSnackbar('Video silindi.', {
                    autoHideDuration: 3000,
                    variant: 'success'
                  });
                })
                .catch((err) => {
                  enqueueSnackbar('Video silinemedi.', {
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
