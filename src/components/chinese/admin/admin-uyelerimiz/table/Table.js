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
const GenericService = new GenericStore('member','ch')

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
  const [url, setUrl] = useState(props.uye.url);
  const [name, setName] = useState(props.uye.name);
  const [mission, setMission] = useState(props.uye.mission);
  const [position, setPosition] = useState(props.uye.position);

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
      _id: props.uye.id,
      photoUrl: url,
      nameAndSurname: name,
      mission: mission,
      position: position,
    })
      .then((data) => {
        props.getMembers()
        enqueueSnackbar('Üye bilgileri güncellendi.', {
          autoHideDuration: 3000,
          variant: 'success'
        });
      })
      .catch((err) => {
        enqueueSnackbar('Üye bilgileri güncellenemedi.', {
          autoHideDuration: 3000,
          variant: 'error'
        });
      })

    // db.collection("chi-duz-uyeler").doc(props.uye.id).set(
    //   {
    //     url: url,
    //     name: name,
    //     mission: mission,
    //     position: position,
    //     timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    //   },
    //   { merge: true }
    // );
    setOpen(false);
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
            <h3 style={{ marginLeft: "5%" }}>Uye Ekle</h3>
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

              <div class="form-group">
                <label for="exampleFormControlInput1">Gorevi</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="mission"
                  value={mission}
                  onChange={(event) => setMission(event.target.value)}
                />
              </div>

              <div class="form-group">
                <label for="exampleFormControlInput1">Pozisyon</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Pozisyon"
                  value={position}
                  onChange={(event) => setPosition(event.target.value)}
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
        <td>{props.uye.name}</td>
        <td>{props.uye.mission}</td>
        <td>{props.uye.position}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={(event) => {
              GenericService.delete(props.uye.id)
                .then((data) => {
                  props.getMembers()
                  enqueueSnackbar('Üye silindi.', {
                    autoHideDuration: 3000,
                    variant: 'success'
                  });
                })
                .catch((err) => {
                  enqueueSnackbar('Üye silinemedi.', {
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
