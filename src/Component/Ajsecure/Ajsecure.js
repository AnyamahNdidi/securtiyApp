import React from 'react'
import {
  AllCom,
  AllCom1,
  AllCom2,
  AllCom3
} from "./Ajstyle"
import "./Ajstyle.css"

import { NotificationOutlined, SecurityScanOutlined, FileProtectOutlined } from '@ant-design/icons';

function Ajsecure() {
  return (
    <div>
      <br />

      <center>
        <div className="ajecon">
          Ajegunle Crime Report
        </div>

      </center>

      <center>
        <AllCom>
          <AllCom1>
            <NotificationOutlined className="awares" />
            <div style={{ color: "white" }}>
              Awareness
          </div>
            <hr className="hrcon"  ></hr>
          </AllCom1>
          <AllCom2>
            <SecurityScanOutlined className="awares" />
            <div style={{ color: "white" }}>
              Security
            </div>
            <hr className="hrcon"  ></hr>

          </AllCom2>
          <AllCom3>
            <FileProtectOutlined className="awares" />
            <div style={{ color: "white" }}>
              Protections
            </div>
            <hr className="hrcon"  ></hr>
          </AllCom3>

        </AllCom>

      </center>
    </div>
  )
}

export default Ajsecure
