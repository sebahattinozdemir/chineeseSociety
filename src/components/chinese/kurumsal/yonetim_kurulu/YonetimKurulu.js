import "../../../turkish/kurumsal/yonetim_kurulu/YonetimKurulu.css";
import Header from "../../header/Header";
import BusinessIcon from "@material-ui/icons/Business";
import React, { useEffect, useState } from "react";

//stores
import GenericStore from "../../../../stores/GenericStore";
const GenericService = new GenericStore('managementMember', 'ch')

export default function YonetimKurulu() {
  const [uyeler, setUyeler] = useState([]);

  useEffect(() => {
    getManagementMembers()
  }, []);

  const getManagementMembers = () => {
    GenericService.get()
      .then(async (data) => {
        setUyeler(
          data.map((member) => ({
            id: member._id,
            url: member.photoUrl.replace('?dl=0', '?raw=1'),
            name: member.nameAndSurname,
            position: member.position,
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
        title="管理委员会"
        icon={<BusinessIcon style={{ fontSize: "x-large" }} />}
      />
      <div className="row" style={{ paddingTop: "2rem", minHeight: "30rem" }}>

        {uyeler.map((uye, index) => (
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-2">
            <div className="uye_cerceve">
              <img
                src={uye.url}
                className="uye_card"
                alt="Türk-Çin Derneği Üyeleri"
              ></img>
              <div className="uye_bilgi">
                <p className="uye_ad">{uye.name}</p>
                <p className="uye_gorev">{uye.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
