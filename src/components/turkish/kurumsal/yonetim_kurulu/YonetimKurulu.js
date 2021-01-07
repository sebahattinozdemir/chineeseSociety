import "./YonetimKurulu.css";
import Header from "../../header/Header";
import BusinessIcon from '@material-ui/icons/Business';
import React from 'react'

export default function YonetimKurulu() {
    return (
        <div>
            <Header
                
                title="Yönetim Kurulu"
                icon={<BusinessIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{}}>
            <div className="col-md-6 col-sm-6 col-12" style={{padding:"0",margin:"auto",marginTop:"3rem",marginBottom:"3rem"}}>
                
                <table class="table table-striped baskanlar" >
                        <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col" ><span style={{color:"#A4320A",fontSize:"medium"}}>Adı ve Soyadı</span></th>
                    <th scope="col"><span style={{color:"#A4320A",fontSize:"medium"}}>Görev Tanımı</span></th>
                    
                    </tr>
                </thead>
                    <tbody>
                        
                        <tr>
                            <th scope="row" style={{color:"#A4320A"}}>1</th>
                            <td>YUE ZHAO</td>
                            <td>Dernek Başkanı</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{color:"#A4320A"}}>2</th>
                            <td>ORHAN ATİK	</td>
                            <td>Yönetim Kurulu Üyesi</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{color:"#A4320A"}}>3</th>
                            <td>MEHMET SAĞLAM</td>
                            <td>Yönetim Kurulu Üyesi</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{color:"#A4320A"}}>4</th>
                            <td>MURAT ERDAL</td>
                            <td>Yönetim Kurulu Üyesi</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{color:"#A4320A"}}>5</th>
                            <td>KADRİYE ZEYNEP ÖZGENÇ</td>
                            <td>Yönetim Kurulu Üyesi</td>
                        </tr>
                    </tbody>
                    </table>

                </div>
                
                
            </div>
            
        </div>
    )
}
